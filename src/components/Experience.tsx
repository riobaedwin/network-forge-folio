import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Network Engineer",
    company: "Global Tech Solutions",
    period: "2021 - Present",
    location: "San Francisco, CA",
    description: "Lead architect for multi-site MPLS and SD-WAN migrations. Responsible for managing core backbone infrastructure serving 50,000+ users.",
    achievements: [
      "Reduced network latency by 35% through routing optimization",
      "Implemented zero-trust architecture using Cisco ISE",
      "Led migration of local data centers to AWS Hybrid Cloud"
    ]
  },
  {
    title: "Network Administrator",
    company: "DataDynamics Inc.",
    period: "2018 - 2021",
    location: "Austin, TX",
    description: "Managed day-to-day network operations, firewall policies, and wireless infrastructure across 5 corporate campuses.",
    achievements: [
      "Achieved 99.99% uptime through redundant circuit implementation",
      "Automated routine configuration tasks using Python and Ansible",
      "Managed successful upgrade of end-of-life core switches"
    ]
  },
  {
    title: "Junior Systems Admin",
    company: "NexGen Networks",
    period: "2016 - 2018",
    location: "Remote",
    description: "Provided Tier 2 support for network and server-related issues. Monitored network health using SolarWinds.",
    achievements: [
      "Streamlined helpdesk ticket resolution time by 20%",
      "Maintained detailed network documentation and topology maps",
      "Coordinated with ISPs for circuit provisioning and troubleshooting"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Journey</h2>
            <p className="text-slate-400">My evolution through the layers of the OSI model.</p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-blue-500/30 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-blue-400 font-mono text-sm">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center text-slate-400 mb-6 space-x-4">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achieve, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        <span className="text-slate-400 text-sm">{achieve}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;