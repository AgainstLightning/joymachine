import "./globals.css";
import { Space_Mono } from "next/font/google";

const inter = Space_Mono({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Joy Machine LLC",
  description: "Software focusing on human computer interaction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
