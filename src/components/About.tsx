import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0da801a8-d0bb-4edf-a4fe-ccc1cee803bc/about-us-team-583ec2d7-1775076177232.webp" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-amber-900/10"></div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-10 -right-10 bg-slate-900 p-10 rounded-3xl text-white shadow-2xl hidden md:block">
              <div className="text-5xl font-bold text-amber-500 mb-2">12+</div>
              <div className="text-sm font-semibold uppercase tracking-widest">Years of <br />Market Expertise</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-amber-50 text-amber-700 font-bold text-sm mb-6">
              ABOUT ENEO CAPITAL LIMITED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Empowering Property Owners with <span className="text-amber-600">Innovative Capital</span> Solutions.
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Founded on the principles of transparency and reliability, Eneo Capital Limited has grown into a leader in the real estate sector. We bridge the gap between property ownership and financial liquidity, ensuring your investments work harder for you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <Target className="text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-slate-500">To provide seamless financial accessibility and world-class management services that maximize property value and owner peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <Eye className="text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-slate-500">To be the most trusted partner for property owners in East Africa, known for innovation, integrity, and exceptional service.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              {['Professional Team', 'Legal Compliance', 'Market Analysis', 'Client First Focus'].map((item) => (
                <div key={item} className="flex items-center space-x-2 text-slate-700 font-medium italic">
                  <CheckCircle size={18} className="text-amber-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;