import React from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import LogoImage from "../../src/assets/logo.png";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
    { href: "news", text: "News" },
    { href: "ticketCenter", text: "Ticket Center" },
    { href: "schedule", text: "Schedule" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  return (
    // Wrap in a div to contain the absolute positioned mobile menu if needed
    <div className="relative">
      {/* --- Original Navbar Structure --- */}
      <div className="flex justify-start items-center w-full bg-primary border-4 border-black overflow-hidden">
        {/* Left Icon/Logo Section */}
        <div>
          {/* Desktop Logo */}
          <a href="/" className="hidden md:block"> {/* Make logo clickable */}
            <img
              className="h-14 md:h-16 border-r-4 border-black p-2" // Use height for consistency
              src={LogoImage}
              alt="ZionFest Logo" // Add Alt Text
            />
          </a>
          {/* Mobile Menu Button */}
          <div className="flex justify-center items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="border-r-4 border-black p-2 text-black focus:outline-none" // Make it a button
              aria-label="Toggle menu"
              aria-expanded={isMobileMenu}
            >
              {isMobileMenu ? (
                 <IoClose className="w-8 h-8" /> // Slightly larger icon maybe
              ) : (
                 <IoMenu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Brand Name (Centered) */}
        <div className="flex justify-center w-full md:hidden">
          <a className="text-lg md:text-2xl text-black font-bold" href="/"> {/* Added font-bold */}
            ZionFest
          </a>
        </div>

        {/* Desktop Links Section */}
        <div className="hidden md:flex w-full px-5 gap-4 lg:gap-6 overflow-hidden"> {/* Added lg:gap-6 */}
          {navLinks.map((link) => (
            // Use the exact same anchor tag structure and classes
            <a
              key={link.text}
              className="hover:scale-110 transform transition-all text-black font-medium" // Added text-black, font-medium
              href={link.href}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <div
        className={`absolute left-0 w-full bg-primary border-l-4 border-r-4 border-b-4 border-black md:hidden transition-all duration-300 ease-in-out overflow-hidden z-20 ${
            isMobileMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0' // Adjust max-h as needed
        }`}
      >
        <div className="flex flex-col items-start p-4 space-y-2">
           {navLinks.map((link) => (
             // Use the exact same anchor tag structure and classes as desktop
             // But maybe adjust padding/margin for vertical layout
             <a
               key={link.text}
               className="hover:scale-105 transform transition-all text-black font-medium w-full py-1" // Adjusted hover, added w-full, py-1
               href={link.href}
               onClick={() => setIsMobileMenu(false)} // Close menu on click
             >
               {link.text}
             </a>
           ))}
        </div>
      </div>
    </div>
  );

};

export default Navbar;
