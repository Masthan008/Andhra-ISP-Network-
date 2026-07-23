import { useModalStore } from '../stores/modalStore';

export function useModal() {
  const { isOpen, modalType, modalProps, openModal, closeModal } = useModalStore();

  return {
    isOpen,
    modalType,
    modalProps,
    openModal,
    closeModal,
  };
}
