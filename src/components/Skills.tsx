import { motion } from 'motion/react';
import { Code, Cpu, Wrench, TestTube, Terminal, GitBranch, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code size={20} className="text-indigo-600" />,
    skills: ['Embedded C', 'C++', 'Python'],
  },
  {
    title: 'Microcontrollers & SoCs',
    icon: <Cpu size={20} className="text-emerald-600" />,
    skills: ['TI SoCs (TDAV4M, L-Series)', 'ARM Cortex-M/R'],
  },
  {
    title: 'AUTOSAR Tools',
    icon: <Wrench size={20} className="text-purple-600" />,
    skills: ['DaVinci Configurator', 'DaVinci Developer', 'AUTOSAR Builder'],
  },
  {
    title: 'Communication Protocols',
    icon: <Terminal size={20} className="text-blue-600" />,
    skills: ['CAN', 'UDS', 'I2C', 'UART'],
  },
  {
    title: 'Testing & Code Quality',
    icon: <TestTube size={20} className="text-rose-600" />,
    skills: ['Google Test', 'QAC'],
  },
  {
    title: 'Debugging Tools',
    icon: <Terminal size={20} className="text-amber-600" />,
    skills: ['CANoe', 'Trace32', 'QNX Momentics', 'PuTTY'],
  },
  {
    title: 'Build & CI Tools',
    icon: <GitBranch size={20} className="text-cyan-600" />,
    skills: ['Git', 'Jenkins', 'Vector Tools', 'Doxygen XML'],
  },
  {
    title: 'Soft Skills',
    icon: <Users size={20} className="text-orange-600" />,
    skills: ['Problem Solving', 'Time Management', 'Teamwork', 'Leadership'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building reliable embedded systems and automotive software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
