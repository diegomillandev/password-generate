"use client";

import { Toaster } from "@/components/ui/sonner";
import queryClient from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" richColors />
      {children}
    </QueryClientProvider>
  );
}
