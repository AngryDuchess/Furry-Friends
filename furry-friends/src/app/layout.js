// import { Inter } from "next/font/google";
import { inter } from "./fonts";
import "./globals.css";
import NavBar from "./components/core/NavBar";
import Hero from "./components/core/Hero";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {/* <Hero /> */}
        {children}
      </body>
    </html>
  );
}
