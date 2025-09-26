import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import "leaflet/dist/leaflet.css";
import "@/styles/leaflet-fixes.css";
import PublicLayout from "@/layouts/PublicLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Remau Bako Tuo",
  description: "Sistem Informasi Desa Remau Bako Tuo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <TooltipProvider>
            <PublicLayout>
              {children}
            </PublicLayout>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
