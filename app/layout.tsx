import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "NFT MarketPlace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg  text-white"
      >

        {children}

      </body>
    </html>
  );
}
