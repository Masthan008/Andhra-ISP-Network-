import React from 'react';
import { useToastStore } from '../stores/toastStore';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, removeToast } = useToastStore();

  return (
    <>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-xl border flex items-start gap-3 shadow-xl backdrop-blur-md transition-all duration-200 ${
              toast.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500/30 text-emerald-300'
                : toast.type === 'error'
                ? 'bg-rose-950/90 border-rose-500/30 text-rose-300'
                : 'bg-cyan-950/90 border-cyan-500/30 text-cyan-300'
            }`}
          >
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white">{toast.title}</h4>
              {toast.message && <p className="text-xs text-slate-300 mt-1">{toast.message}</p>}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
