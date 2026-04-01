import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message received! I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Connectivity Starts Here</h2>
            <p className="text-slate-400 text-lg mb-12">
              Looking to scale your infrastructure or need expert consultation on network security? Let's connect and build something reliable.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 mr-4 border border-blue-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-slate-400">admin@net-engineer.io</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-cyan-600/10 rounded-xl flex items-center justify-center text-cyan-400 mr-4 border border-cyan-500/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone / Signal</h4>
                  <p className="text-slate-400">+1 (555) 010-8899</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 mr-4 border border-blue-500/20">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Availability</h4>
                  <p className="text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="#" className="p-3 bg-slate-800 text-slate-300 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="p-3 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 hover:text-white transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/40 p-8 md:p-10 rounded-3xl border border-slate-700 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Network Consulting"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;