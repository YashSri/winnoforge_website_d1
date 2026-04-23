"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type ModalType = "join" | "partner" | null;

interface ModalCtx {
  open: (type: NonNullable<ModalType>) => void;
  close: () => void;
  modalType: ModalType;
}

const ModalContext = createContext<ModalCtx>({
  open: () => {},
  close: () => {},
  modalType: null,
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);

  return (
    <ModalContext.Provider value={{ open: setModalType, close: () => setModalType(null), modalType }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
