"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type ModalType = "join" | "partner" | "download" | "mentor" | null;

export interface DownloadPayload {
  programSlug: string;
  programName: string;
}

interface ModalCtx {
  open: (type: NonNullable<ModalType>, payload?: DownloadPayload) => void;
  close: () => void;
  modalType: ModalType;
  downloadPayload: DownloadPayload | null;
}

const ModalContext = createContext<ModalCtx>({
  open: () => {},
  close: () => {},
  modalType: null,
  downloadPayload: null,
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [downloadPayload, setDownloadPayload] = useState<DownloadPayload | null>(null);

  const open = (type: NonNullable<ModalType>, payload?: DownloadPayload) => {
    setModalType(type);
    setDownloadPayload(payload ?? null);
  };

  const close = () => {
    setModalType(null);
    setDownloadPayload(null);
  };

  return (
    <ModalContext.Provider value={{ open, close, modalType, downloadPayload }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
