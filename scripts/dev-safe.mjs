import { spawn } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import path from "node:path";
import net from "node:net";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");

const args = process.argv.slice(2);
const portFlagIndex = args.findIndex((arg) => arg === "--port" || arg === "-p");
const port =
  portFlagIndex >= 0 && args[portFlagIndex + 1]
    ? Number.parseInt(args[portFlagIndex + 1], 10)
    : 3000;

const projectRoot = process.cwd();
const lockPath = path.join(projectRoot, ".next", "dev", "lock");

function canConnect(portToCheck) {
  return new Promise((resolve) => {
    const socket = new net.Socket();

    const finish = (value) => {
      socket.destroy();
      resolve(value);
    };

    socket.setTimeout(750);
    socket.once("connect", () => finish(true));
    socket.once("timeout", () => finish(false));
    socket.once("error", () => finish(false));
    socket.connect(portToCheck, "127.0.0.1");
  });
}

const portInUse = await canConnect(port);

if (portInUse) {
  console.error(
    `Port ${port} is already in use. Stop the running server first or use "npm run dev -- --port <port>".`,
  );
  process.exit(1);
}

if (existsSync(lockPath)) {
  rmSync(lockPath, { force: true });
  console.log(`Removed stale Next.js dev lock at ${lockPath}`);
}

const child = spawn(process.execPath, [nextBin, "dev", ...args], {
  stdio: "inherit",
  env: process.env,
  cwd: projectRoot,
});

const forwardSignal = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on("SIGINT", forwardSignal);
process.on("SIGTERM", forwardSignal);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
