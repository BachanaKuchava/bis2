import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(prev => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileDrawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setMobileDrawerOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileDrawerOpen]);

  // Lock scroll on html/body
  useEffect(() => {
    const overflowValue = mobileDrawerOpen ? "hidden" : "auto";
    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [mobileDrawerOpen]);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex items-center flex-shrink-0 transition-transform duration-200 ease-in-out group-hover:scale-110">
              <img className="h-[20px] w-[20px] mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">BI Solutions</span>
            </div>
          </Link>

          {/* Desktop nav items with active underline */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ease-in-out hover:text-[#12556b] ${
                      isActive
                        ? "underline decoration-2 underline-offset-4 decoration-[#12556b]"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Us button */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="contacts"
              className="bg-[#12556b] text-white py-2 px-3 rounded-md transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#12556b] hover:border hover:border-[#12556b]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile burger toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle menu">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile drawer with active underline */}
        {mobileDrawerOpen && (
          <div
            ref={drawerRef}
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-start lg:hidden"
          >
            <ul>
              {navItems.map((item, i) => (
                <li key={i} className="py-4 w-full">
                  <NavLink
                    to={item.href}
                    onClick={toggleNavbar}
                    className={({ isActive }) =>
                      `block text-white transition-colors duration-200 ease-in-out hover:text-[#12556b] ${
                        isActive
                          ? "underline decoration-2 underline-offset-4 decoration-[#12556b]"
                          : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              {/* Contacts only in mobile drawer */}
              <li className="py-4 w-full">
                <NavLink
                  to="/contacts"
                  onClick={toggleNavbar}
                  className={({ isActive }) =>
                    `block text-white transition-colors duration-200 ease-in-out hover:text-[#12556b] ${
                      isActive
                        ? "underline decoration-2 underline-offset-4 decoration-[#12556b]"
                        : ""
                    }`
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
