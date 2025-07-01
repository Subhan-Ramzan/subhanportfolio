//app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subhan Ramzan | Web Developer Portfolio",
  description:
    "Explore Subhan Ramzan's portfolio, showcasing expertise in web development, front-end design, and modern web technologies like Next.js, React, and JavaScript. Discover projects, skills, and professional services in building scalable, efficient websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SessionWrapper>
          {/* <ProductProvider> */}
          <Navbar />
          <div className="min-h-[80vh] inset-0 -z-10 items-center overflow-hidden justify-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            {children}
          </div>
          <Footer />
          {/* </ProductProvider> */}
        </SessionWrapper>
      </body>
    </html>
  );
}
