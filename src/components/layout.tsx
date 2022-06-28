import React from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main className="my-4 flex justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
