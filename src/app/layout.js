'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global components/Navbar";
import { store } from "@/store";
import { Provider } from "react-redux";
import Footer from "./components/global components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Provider store={store}>
      <div className="flex flex-col min-h-screen justify-between">
        <Navbar/>
      {children}
      <Footer/>
      </div>
      </Provider>
      </body>
    </html>
  );
}
