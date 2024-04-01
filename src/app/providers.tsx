"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import { LazyMotion, domAnimation } from "framer-motion";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <LazyMotion features={domAnimation}>
      <NextUIProvider navigate={router.push}>
        <ToastContainer
          position="bottom-center"
          theme="dark"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {children}
      </NextUIProvider>
    </LazyMotion>
  );
}
