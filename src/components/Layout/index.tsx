import React, { FC, ReactNode } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="bg-appBackgroundColor min-h-[100vh]">
      <Header />
      <div className="max-w-[1520px] mx-auto relative lg:pl-[300px] pb-[20px]">
        <Navigation />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
