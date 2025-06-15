import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About Us", to: "/about" },
    {name: "Book Us", to: "/Book"}
  ];

  return (
    <header className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="NAS Medical Logo" className="h-10 w-auto" />
          </Link>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-bold text-xl text-green-200 drop-shadow-lg"
          >
            NAS Medical Centre
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-green-200 hover:text-green-400 transition duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <nav
          className={`md:flex md:items-center md:space-x-8 ${
            isOpen ? "block mt-4" : "hidden"
          } md:mt-0`}
        >
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              onClick={() => setIsOpen(false)} // close menu on click
              className="block py-2 md:py-0 text-green-300 font-semibold tracking-wide hover:text-green-100 transition duration-300 ease-in-out drop-shadow-[0_0_8px_rgba(134,239,172,0.8)]"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
