import { motion } from 'motion/react';
import { Code2, Cpu, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am an Embedded Software Engineer with over 2 years of experience developing and testing automotive firmware on ARM-based SoCs. My expertise lies in C/C++, AUTOSAR, and real-time debugging.
              </p>
              <p>
                I have hands-on experience in functional safety and communication protocols like CAN, UDS, and I2C. I am passionate about building robust, safe, and compliant systems that power modern vehicles.
              </p>
              <p>
                Currently, I am working on the Nissan ADCU Project at AUMOVIO SE, where I implement critical safety features and low-level drivers, ensuring seamless hardware-software interaction.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <div className="text-indigo-600 font-bold text-3xl mb-1">2+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <div className="text-emerald-600 font-bold text-3xl mb-1">8.2</div>
                <div className="text-sm text-slate-600 font-medium">CGPA (B.E.)</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Cpu size={24} className="text-indigo-600" />,
                title: 'Embedded Systems',
                desc: 'ARM Cortex-M/R, TI SoCs, Hardware-Software Integration',
              },
              {
                icon: <ShieldCheck size={24} className="text-emerald-600" />,
                title: 'Functional Safety',
                desc: 'ISO 26262 compliance, AUTOSAR standards, Diagnostics',
              },
              {
                icon: <Code2 size={24} className="text-purple-600" />,
                title: 'Firmware Dev',
                desc: 'C/C++, Python automation, Low-level drivers',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow ${
                  i === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
