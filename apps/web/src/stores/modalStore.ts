import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  modalType: string | null;
  modalProps: Record<string, any>;
  openModal: (type: string, props?: Record<string, any>) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {},
  openModal: (modalType, modalProps = {}) =>
    set({ isOpen: true, modalType, modalProps }),
  closeModal: () => set({ isOpen: false, modalType: null, modalProps: {} }),
}));
