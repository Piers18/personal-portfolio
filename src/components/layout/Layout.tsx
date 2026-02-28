import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="app-layout">
      {/* Global glassmorphism background blobs */}
      <div className="app-layout__bg-blob app-layout__bg-blob--1" />
      <div className="app-layout__bg-blob app-layout__bg-blob--2" />
      <div className="app-layout__bg-blob app-layout__bg-blob--3" />

      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
