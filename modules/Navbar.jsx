import NavbarDesktop from "@/components/NavbarDesktop";
import NavbarMobile from "@/components/NavbarMobile";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}

export default Navbar;
