import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Globe, Lock } from 'lucide-react';

const projects = [
  {
    title: "Campus SD-WAN Overhaul",
    category: "Infrastructure",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0da801a8-d0bb-4edf-a4fe-ccc1cee803bc/project-networking-rack-34195099-1775074979487.webp",
    description: "Designed and implemented a resilient SD-WAN solution connecting 12 global offices, improving VoIP quality and reducing circuit costs by 40%.",
    tech: ["Cisco Viptela", "BGP", "Silver Peak", "Azure ExpressRoute"],
    icon: <Globe className="text-blue-400" />
  },
  {
    title: "Zero-Trust Network Access",
    category: "Security",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0da801a8-d0bb-4edf-a4fe-ccc1cee803bc/abstract-network-bg-bb765e6f-1775074978596.webp",
    description: "Deployment of identity-based access control using Cisco ISE and Duo MFA, replacing traditional VPN for 2,000+ remote employees.",
    tech: ["Cisco ISE", "Duo", "802.1X", "Palo Alto Prisma"],
    icon: <Lock className="text-cyan-400" />
  },
  {
    title: "Automated Compliance Auditing",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    description: "Custom Python framework for auditing network configurations against security benchmarks and auto-remediating unauthorized changes.",
    tech: ["Python", "Netmiko", "Ansible", "GitLab CI"],
    icon: <Database className="text-blue-400" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Projects</h2>
            <p className="text-slate-400 max-w-xl">Technical implementations and architectural designs that solved complex connectivity challenges.</p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group text-sm md:text-base">
            View All Documentation
            <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {project.icon}
                  <span className="text-white text-xs font-semibold ml-2 uppercase tracking-widest">{project.category}</span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-blue-400 text-xs rounded-md border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-white text-sm font-bold bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors w-full cursor-pointer">
                    Case Study
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

export default Projects;