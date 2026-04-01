import React from 'react';
import { Building2, Mail, Phone, Globe, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold text-white tracking-tight">
                  ENEO <span className="text-amber-600">CAPITAL</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Limited</span>
              </div>
            </div>
            <p className="mb-8 text-sm leading-relaxed">
              Providing innovative financial solutions and comprehensive property management services across East Africa since 2012.
            </p>
            <div className="flex space-x-4">
              {[Mail, Phone, Globe, MapPin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About Us', 'Our Services', 'Properties', 'Contact Us'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-amber-500 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              {['Land Rent Advances', 'Rental Collection Loans', 'Property Management', 'Real Estate Consultancy'].map(service => (
                <li key={service}><a href="#services" className="hover:text-amber-500 transition-colors">{service}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get the latest real estate market insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button className="absolute right-2 top-2 bg-amber-600 text-white p-1.5 rounded-lg hover:bg-amber-700">
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs">
            © {new Date().getFullYear()} Eneo Capital Limited. All rights reserved.
          </div>
          <div className="flex space-x-8 text-xs">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-slate-900 p-3 rounded-full hover:bg-amber-600 transition-all text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;