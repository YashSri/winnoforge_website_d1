"use client";

import { useModal } from "./ModalContext";
import type { ReactNode } from "react";

export default function JoinButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useModal();
  return (
    <button type="button" onClick={() => open("join")} className={className}>
      {children}
    </button>
  );
}
