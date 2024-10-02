import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function AppLayout() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleOverlay() {
    setIsOverlayOpen((is) => !is);
  }
  function handleMenu() {
    setIsMenuOpen((is) => !is);
  }
  function handleBoth() {
    setIsOverlayOpen(false);
    setIsMenuOpen(false);
  }
  function handleOverlayMenu() {
    setIsMenuOpen(false);
    setIsOverlayOpen(true);
  }

  return (
    <>
      <div className="relative">
        <ScrollRestoration />
        <Header
          isMenuOpen={isMenuOpen}
          onMenu={handleMenu}
          isOverlayOpen={isOverlayOpen}
          onOverlay={handleOverlay}
          onMenuOverlay={handleOverlayMenu}
        />
        <Outlet />
        <Footer />
        {(isOverlayOpen || isMenuOpen) && (
          <div
            onClick={handleBoth}
            className={`absolute z-20 object-cover bg-center bg-no-repeat bg-contain bg-[#ffffffcc] h-full top-0 left-0 bottom-0 right-0 w-full`}
          ></div>
        )}
      </div>
    </>
  );
}

export default AppLayout;
