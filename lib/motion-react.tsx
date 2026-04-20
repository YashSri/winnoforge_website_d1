"use client";

import * as React from "react";

type MotionExtras = {
  animate?: unknown;
  exit?: unknown;
  initial?: unknown;
  transition?: unknown;
  viewport?: unknown;
  whileHover?: unknown;
  whileInView?: unknown;
  whileTap?: unknown;
};

const componentCache = new Map<string, React.ComponentType<any>>();

function createMotionComponent(tag: string) {
  const MotionComponent = React.forwardRef<HTMLElement, MotionExtras & Record<string, unknown>>(
    ({ animate, exit, initial, transition, viewport, whileHover, whileInView, whileTap, ...props }, ref) =>
      React.createElement(tag, { ...props, ref }),
  );

  MotionComponent.displayName = `motion.${tag}`;

  return MotionComponent;
}

export const motion = new Proxy({} as Record<string, React.ComponentType<any>>, {
  get(_target, property) {
    const tag = String(property);

    if (!componentCache.has(tag)) {
      componentCache.set(tag, createMotionComponent(tag));
    }

    return componentCache.get(tag);
  },
});
