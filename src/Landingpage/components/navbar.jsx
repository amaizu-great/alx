import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const HamBurger = () => {
    return (
      <button onClick={toggleMenu} className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 md:hidden focus:outline-none" >
        <span className={`w-6 h-0.5 bg-Leo transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-Leo transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-Leo transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
    )
  }
  

  return (
    <nav className="relative flex gap-[10%] items-center justify-between px-[5%] py-2 w-full border-b border-gray-200 md:py-4 md:gap-[5%]">
      <Link to="/">
        <h1 className="text-[20px] md:text-[30px] font-semibold text-Leo font-DM-Sans">CHATTER</h1>
      </Link>

      {/* Hamburger Menu Button */}
      <HamBurger />

      {/* Desktop Navigation */}
      <div className="hidden transition-all duration-300 items-center w-[75%] justify-between lg:w-[65%] md:flex">

        <div className="flex items-center space-x-8 ">
          <Link to="/" className="hover:text-Leo transition-colors">Home</Link>
          <Link to="/#about" className="hover:text-Leo transition-colors">About Us</Link>
          <Link to="/#contact" className="hover:text-Leo transition-colors">Contact</Link>
          <Link to="/#blogs" className="hover:text-Leo transition-colors">Blogs</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-Leo hover:text-Leo/80 transition-colors">Log in</button>
          <button className="bg-Leo text-white px-6 py-2 rounded-md hover:bg-Leo/90 transition-colors">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`absolute top-full z-20 left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" className="hover:text-[#543EE0] transition-colors">Home</Link>
          <Link to="#about" className="hover:text-[#543EE0] transition-colors">About Us</Link>
          <Link to="#contact" className="hover:text-[#543EE0] transition-colors">Contact</Link>
          <Link to="#blogs" className="hover:text-[#543EE0] transition-colors">Blogs</Link>
          <hr className="border-gray-200" />

          <button className="text-[#543EE0] hover:text-[#543EE0]/80 transition-colors">Log in</button>
          <button className="bg-[#543EE0] text-white px-6 py-2 rounded-md hover:bg-[#543EE0]/90 transition-colors text-center">
            Sign up
          </button>
        </div>
      </div>

    </nav>
  );
}

export default Header;
