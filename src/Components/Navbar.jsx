import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

// Logo Component
const Logo = () => <div className="text-xl font-bold text-white">Farhan</div>;

// Single Menu Item Component
const MenuItem = ({ item }) => (
  <Link
    spy={true}
    smooth={true}
    to={item}
    className="px-3 py-1 uppercase border border-purple-600 rounded-lg hover:bg-purple-800 hover:scale-105 transition-transform duration-300 cursor-pointer"
  >
    {item}
  </Link>
);

// Desktop Menu Component
const DesktopMenu = () => (
  <ul className="hidden lg:flex gap-4 text-white">
    {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
      <MenuItem key={item} item={item} />
    ))}
  </ul>
);

// Mobile Menu Toggle Button Component
const MobileMenuToggle = ({ isMenuOpen, onToggleMenu }) => (
  <div className="lg:hidden text-white cursor-pointer" onClick={onToggleMenu}>
    {isMenuOpen ? <FaTimes size={22} /> : <CiMenuFries size={22} />}
  </div>
);

// Mobile Dropdown Menu Component
const MobileDropdownMenu = ({ isMenuOpen }) =>
  isMenuOpen && (
    <ul className="lg:hidden flex flex-col items-center bg-slate-900 bg-opacity-90 text-white text-lg py-6 space-y-3">
      {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
        <MenuItem key={item} item={item} />
      ))}
    </ul>
  );

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900 bg-opacity-50 backdrop-blur-md py-3">
      <div className="flex justify-between items-center px-4 md:px-12">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <DesktopMenu />

        {/* Mobile Menu Toggle Button */}
        <MobileMenuToggle isMenuOpen={isMenuOpen} onToggleMenu={handleMenuToggle} />
      </div>

      {/* Mobile Dropdown Menu */}
      <MobileDropdownMenu isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;
