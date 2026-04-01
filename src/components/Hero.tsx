import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Home } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/0da801a8-d0bb-4edf-a4fe-ccc1cee803bc/luxury-property-hero-ec868829-1775076173747.webp')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold mb-6 backdrop-blur-md">
              <Home size={16} className="mr-2" />
              Premier Property Management in Kenya
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Unlock Your <span className="text-amber-500">Property's</span> <br />
              Full Potential.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Eneo Capital Limited provides innovative financial solutions and comprehensive property management tailored for modern landlords and property owners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a 
                href="#services" 
                className="flex items-center justify-center px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-2xl shadow-amber-900/40"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center px-10 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold transition-all border border-white/20"
              >
                Get a Quote
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span className="text-white/80 text-sm font-medium">Land Rent Advances</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span className="text-white/80 text-sm font-medium">Rental Collection Loans</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span className="text-white/80 text-sm font-medium">Expert Management</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-amber-600/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Hero;