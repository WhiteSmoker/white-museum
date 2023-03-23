import { type ReactNode } from "react";
import { Roboto_Mono } from "next/font/google";

import Header from "~/containers/Navbar";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={`${robotoMono.variable} font-sans`}>
        <Header />
      </div>
      <main className={`${robotoMono.variable} font-sans`}>{children}</main>
    </>
  );
};

export default MainLayout;
