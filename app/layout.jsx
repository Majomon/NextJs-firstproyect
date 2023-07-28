import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation"; // Con el @ empezamos de la raíz del proyecto

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web con NextJs",
  description: "Creado con NextJS",
  keywords: "next,react,app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
