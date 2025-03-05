import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Milan Thapa | Portfolio website",
  description: "I’m Milan Thapa, a full-stack developer from Kathmandu, Nepal, with a Bachelor’s in Computer Science and Information Technology from Tribhuvan University. I specialize in both front-end and back-end development and have a strong background in web and graphic design. Passionate about creating user-friendly experiences, I enjoy tackling complex challenges and continuously enhancing my skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
