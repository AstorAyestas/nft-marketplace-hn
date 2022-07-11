import React from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="my-4 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
