import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-slate-100' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/20">
            <Building2 className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              ENEO <span className="text-amber-600">CAPITAL</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Limited</span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-amber-600 transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center bg-slate-900 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-slate-900/10"
          >
            <Phone size={14} className="mr-2" />
            Consult Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 hover:text-amber-600 text-lg font-bold"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-amber-600 text-white text-center py-3 rounded-xl font-bold"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;