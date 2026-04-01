import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Landmark, Home, Key, ClipboardCheck, TrendingUp } from 'lucide-react';

const services = [
  {
    title: "Land Rent Advances",
    icon: <Wallet size={32} />,
    description: "Access immediate capital against your future land rent income. Perfect for development, personal needs, or reinvestment.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0da801a8-d0bb-4edf-a4fe-ccc1cee803bc/financial-services-rent-advance-5528e977-1775076175776.webp",
    features: ["Up to 12 months advance", "Low interest rates", "Quick approval within 48h"]
  },
  {
    title: "Loan on Rental Collection",
    icon: <Landmark size={32} />,
    description: "Unlock the value of your monthly rental collections. We provide business loans backed by your reliable tenant payments.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0da801a8-d0bb-4edf-a4fe-ccc1cee803bc/property-management-neighborhood-3b7d366a-1775076170921.webp",
    features: ["Flexible repayment terms", "No collateral needed", "Streamlined process"]
  },
  {
    title: "Full Property Management",
    icon: <Home size={32} />,
    description: "End-to-end management from tenant screening to maintenance. We handle the stress, you enjoy the returns.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    features: ["Tenant screening", "Rent collection", "24/7 maintenance"]
  },
  {
    title: "Real Estate Consultancy",
    icon: <ClipboardCheck size={32} />,
    description: "Expert advice on property acquisition, valuation, and market trends to ensure your portfolio remains profitable.",
    image: "https://images.unsplash.com/photo-1454165833767-131f4a961ca4?auto=format&fit=crop&q=80&w=800",
    features: ["Market research", "Valuation services", "Legal advisory"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We offer a comprehensive suite of financial and management solutions designed to solve the unique challenges of property owners.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all"
            >
              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-300">
                        <TrendingUp size={14} className="text-amber-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;