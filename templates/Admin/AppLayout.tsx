import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex overflow-hidden h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
      <div className="relative overflow-y-auto flex-1 scroll-bar">
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className="h-full px-4 mt-8">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
