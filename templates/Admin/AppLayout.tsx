import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-slate-300">
      <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
      <div className="scroll-bar relative flex-1 overflow-y-auto">
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className="mb-4 mt-8 px-4">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
