import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html className={`h-full`}>
      <body className="h-screen">
        <div className="flex h-full">
          <Sidebar />
          <div className="w-full h-full py-2">
            <Header />
            <main className="bg-white rounded-b-md">
              <div className="mx-auto py-6 px-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
