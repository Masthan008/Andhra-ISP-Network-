import { useToastStore } from '../stores/toastStore';

export function useToast() {
  const { addToast, removeToast, toasts } = useToastStore();

  return {
    toasts,
    toast: addToast,
    dismiss: removeToast,
    success: (title: string, message?: string) =>
      addToast({ type: 'success', title, message }),
    error: (title: string, message?: string) =>
      addToast({ type: 'error', title, message }),
    info: (title: string, message?: string) =>
      addToast({ type: 'info', title, message }),
  };
}
