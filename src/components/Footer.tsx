import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Terminal size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg">NetAdmin.</span>
        </div>

        <div className="text-slate-500 text-sm flex items-center">
          Handcrafted with <Heart size={14} className="mx-1 text-red-500" /> & Optimized for Uptime
        </div>

        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Cookies</a>
          <span className="text-slate-600">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;