import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, ShieldCheck, PieChart } from 'lucide-react';

const stats = [
  { label: "Properties Managed", value: "500+", icon: <Building className="text-amber-600" /> },
  { label: "Satisfied Clients", value: "1.2k", icon: <Users className="text-amber-600" /> },
  { label: "Total Asset Value", value: "$50M+", icon: <PieChart className="text-amber-600" /> },
  { label: "Years of Excellence", value: "12+", icon: <ShieldCheck className="text-amber-600" /> },
];

const Stats = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;