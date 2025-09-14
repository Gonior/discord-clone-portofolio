import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const ggsans = localFont({
  src : [
    {
      path : "../public/fonts/gg-sans-regular.ttf",
      style : 'normal',
      weight : "400"
    },
    {
      path : "../public/fonts/gg-sans-medium.ttf",
      style : 'normal',
      weight : "500"
    },
    {
      path : "../public/fonts/gg-sans-semibold.ttf",
      style : 'normal',
      weight : "600"
    },
    {
      path : "../public/fonts/gg-sans-bold.ttf",
      style : 'normal',
      weight : "700"
    }

  ],
  variable : '--font-gg-sans'
})


export const metadata: Metadata = {
  title: "Discord Clone",
  description: "Portofolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ggsans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
