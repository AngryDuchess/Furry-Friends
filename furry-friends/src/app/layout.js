import { inter } from "./fonts";
import "./globals.css";
// import NavBar from "./components/core/NavBar";


export const metadata = {
  title: "Furry Friends",
  description: "An online pet shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}