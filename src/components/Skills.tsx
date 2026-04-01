import React from 'react';
import { motion } from 'framer-motion';
import { Network, ShieldCheck, Cloud, Cpu, Server, Terminal, Lock, Wifi } from 'lucide-react';

const skills = [
  {
    category: "Network Infrastructure",
    icon: <Network className="text-blue-400" />,
    items: ["Cisco Routing & Switching", "BGP/OSPF/EIGRP", "SD-WAN Implementation", "VLAN/STP Configuration"]
  },
  {
    category: "Security & Firewalls",
    icon: <ShieldCheck className="text-cyan-400" />,
    items: ["Palo Alto / Fortinet", "VPN (IPsec/SSL)", "IDS/IPS Systems", "Network Access Control (ISE)"]
  },
  {
    category: "Cloud & Virtualization",
    icon: <Cloud className="text-blue-400" />,
    items: ["AWS Networking (VPC, Direct Connect)", "Azure ExpressRoute", "VMware ESXi / NSX", "Hyper-V Management"]
  },
  {
    category: "Monitoring & Tools",
    icon: <Terminal className="text-cyan-400" />,
    items: ["SolarWinds / PRTG", "Wireshark Analysis", "Nagios / Zabbix", "Ansible / Python (NetDevOps)"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive suite of tools and protocols I use to build, secure, and manage global network environments.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-slate-400 flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos Placeholder */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
           {['Cisco', 'Juniper', 'Fortinet', 'AWS', 'VMware', 'Palo Alto'].map(brand => (
             <span key={brand} className="text-2xl font-bold text-white font-mono">{brand}</span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;