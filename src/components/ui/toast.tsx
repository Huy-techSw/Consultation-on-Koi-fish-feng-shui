import { useState } from "react";

interface ToastMessage {
  title: string;
  description: string;
  variant?: "default" | "destructive";
}

export const useToast = () => {
  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);

  const toast = (message: ToastMessage) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000); // Tự động ẩn thông báo sau 3 giây
  };

  return {
    toast,
    toastMessage,
  };
};
