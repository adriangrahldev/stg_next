"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (

    <html className={`h-full`}>
      <body className="h-screen">
      <SessionProvider>

        <div className="flex h-full">
          <Sidebar />
          <div className="w-full h-full">
            
            <Header />

            <main className="bg-white rounded-b-md">
              <div className="mx-auto">{children}</div>
            </main>
          </div>
        </div>
      </SessionProvider>
      </body>
    </html>
  );
}
