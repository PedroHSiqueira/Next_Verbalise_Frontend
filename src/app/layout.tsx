import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Verbalize",
  description: "Página para aprendizado de idiomas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#dddddd]">
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
