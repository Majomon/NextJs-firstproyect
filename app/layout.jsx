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
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/flatly/bootstrap.min.css"
        ></link>
      </head>
      <body className={inter.className}>
        <Navigation />
        <div className="container pt-4">{children}</div>
      </body>
    </html>
  );
}
