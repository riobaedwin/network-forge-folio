import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Shield, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/0da801a8-d0bb-4edf-a4fe-ccc1cee803bc/hero-background-e261bc8e-1775074979454.webp')` }}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Activity size={16} className="mr-2 animate-pulse" />
            Senior Network Administrator
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Resilient Networks
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg">
            Specializing in enterprise infrastructure, cloud integration, and cybersecurity. Ensuring 99.99% uptime for global operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-900/40"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Server className="text-blue-400" size={20} />
              <span className="text-white text-sm">Cisco Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-blue-400" size={20} />
              <span className="text-white text-sm">Security Specialist</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl border border-white/10 flex items-center justify-center p-8 backdrop-blur-3xl overflow-hidden group">
             <img 
               src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0da801a8-d0bb-4edf-a4fe-ccc1cee803bc/abstract-network-bg-bb765e6f-1775074978596.webp" 
               className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
               alt="Network Visualization"
             />
             <div className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
                  <Activity size={48} className="text-blue-400" />
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white tracking-widest">SYSTEM ONLINE</div>
                  <div className="flex gap-1 justify-center">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-2 h-4 bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-slate-900/90 border border-slate-700 p-4 rounded-2xl shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300 font-mono">Status: All Nodes Active</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;