import { Inter } from "next/font/google";
import "./globals.css";
import CommonHeader from "@/components/CommonHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS CRUD demo app",
  description: "Next JS CRUD app for demo purpose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommonHeader />
        {children}
      </body>
    </html>
  );
}
