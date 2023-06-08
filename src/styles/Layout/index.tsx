import { type ReactNode } from "react";
import { Space_Mono } from "next/font/google";

import Header from "~/containers/Navbar";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={`${spaceMono.variable} font-mono`}>
        <Header />
      </div>
      <main className={`${spaceMono.variable} font-mono`}>{children}</main>
    </>
  );
};

export default MainLayout;
