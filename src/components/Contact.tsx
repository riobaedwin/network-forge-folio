import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your inquiry has been sent. Our team will contact you shortly!");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-amber-50 text-amber-700 font-bold text-sm mb-6">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Partner with the Experts.</h2>
            <p className="text-slate-600 text-lg mb-12">
              Ready to grow your real estate portfolio or need immediate financial liquidity? Our team is standing by to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mr-4 border border-slate-200 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Email Us</h4>
                  <p className="text-slate-500">info@eneocapital.co.ke</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mr-4 border border-slate-200 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Call Us</h4>
                  <p className="text-slate-500">+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mr-4 border border-slate-200 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Visit Office</h4>
                  <p className="text-slate-500">Westlands, Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <div className="flex items-center text-slate-400 text-sm">
                <Clock size={16} className="mr-2 text-amber-600" />
                Mon - Fri: 8:00 AM - 5:00 PM
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Service Interested In</label>
                <select 
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="rent-advance">Land Rent Advance</option>
                  <option value="rental-loan">Loan on Rental Collection</option>
                  <option value="property-management">Full Property Management</option>
                  <option value="consultancy">Real Estate Consultancy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your property..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-slate-900 hover:bg-amber-600 text-white font-bold py-5 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Inquiry
                    <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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