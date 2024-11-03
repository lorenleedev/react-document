import Navigation from "../Navigation";
import React from "react";
import './Layout.css';
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({children, className = ''}: LayoutProps) => {
  return(
    <>
      <Navigation/>
      <div className={`main ${className}`}>
        <div>
          {children}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Layout;