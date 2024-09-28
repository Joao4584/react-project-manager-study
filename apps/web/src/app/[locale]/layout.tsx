import React from "react";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { GeistSans } from "geist/font/sans";

import "@/assets/globals.css";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Providers } from "@/providers/providers";

export const metadata: Metadata = {
  title: "Manager Study",
  description: "..",
};


export default function Layout({
  children,
  params: { locale },
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning  >
      <head>
        <link rel="icon" href="/logo/icon-study.png" />
      </head>
      <body className={GeistSans.className}>
        <Providers locale={locale}>     
            <DashboardLayout>
                {children}
            </DashboardLayout>
          </Providers>
      </body>
    </html>
  );
}
