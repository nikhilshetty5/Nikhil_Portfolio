import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Embedded Software Engineer – Nissan ADCU Project',
    company: 'AUMOVIO SE',
    location: 'Bengaluru, Karnataka, India',
    date: 'Oct 2025 - Present',
    points: [
      'Implemented Deadman Switch functionality and Camera Switch input for the Nissan ADCU based on customer requirements.',
      'Designed and implemented the shutdown concept for the Nissan ADCU, ensuring safe, reliable, and compliant system behavior.',
      'Developed and integrated low-level drivers for IR LED, Deadman Switch, and Camera Switch modules, enabling seamless hardware-software interaction and compliance with AUTOSAR standards.',
      'Worked onsite at AUMOVIO Japan, supporting IR LED, Deadman Switch, Camera Switch, and Shutdown development, along with vehicle-level testing, debugging, and integration.',
      'Developed a Python automation script to update NVM and FEE contents using the DaVinci tool, reducing 95% of manual effort and completing updates within minutes.',
    ],
  },
  {
    role: 'Embedded Software Engineer – TATA & Nissan ADCU Projects',
    company: 'Continental Autonomous Mobility',
    location: 'Bengaluru, Karnataka, India',
    date: 'Aug 2024 - Sep 2025',
    points: [
      'Worked on the TATA ADCU project, performing vehicle-level debugging at TATA TML Pune plant to investigate ADCU resets and data corruption issues, developing a debug software to monitor core status using DID and Canoe, providing real-time insights of ADCU cores.',
      'Configured and implemented NVM blocks for application components, enabling application teams to utilize RAM and ROM memory effectively and assisting in NVM memory usage and integration.',
      'Transitioned to the Nissan ADCU project using the same controller base; implemented NVM configurations, supported application teams with NVM block usage, and debugged complex inter-core issues.',
      'Designed and delivered IR LED functionality for night vision input on the Nissan ADCU, from development to customer delivery.',
      'Contributed to ADCU shutdown mechanisms and Multi-Core Database (MDB) configuration, ensuring robust inter-core communication and safe shutdown procedures in heterogeneous ADCU architecture.',
    ],
  },
  {
    role: 'Graduate Engineering Trainee – TATA ADCU Project',
    company: 'Continental Autonomous Mobility',
    location: 'Bengaluru, Karnataka, India',
    date: 'Jul 2023 - Jul 2024',
    points: [
      'Contributed to the TATA ADCU project based on TI Jacinto TDAV4M SoC, performing DID Implementation, unit testing, QAC static analysis, and detailed design documentation using XML, while gaining hands-on expertise in UDS protocol, DID configuration, CANoe, Trace32, Google Test, and DaVinci tools.',
      'Developed a robust callback function for I2C data transfer between ARM Cortex R5F and Cortex A72 cores in a heterogeneous ADCU architecture, enabling processing of touch coordinates from a Harman Head Unit ECU, with built-in error handling for connection loss and leveraging Multi-Core Database (MDB) shared DDRAM memory for inter-core communication.',
      'Conducted reset analysis for FS Safe section to investigate and resolve ADCU reset issues, ensuring compliance with ISO 26262 functional safety standards.',
    ],
  },
  {
    role: 'Research And Development Intern',
    company: 'Velasco Systems',
    location: 'Mangaluru, Karnataka, India',
    date: 'Feb 2023 - May 2023',
    points: [
      'Worked on home automation development, including circuit design, PCB layout using KiCad, and simulation/testing with Proteus.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A track record of delivering robust embedded software solutions for autonomous mobility.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-3rem] w-px bg-slate-200 -translate-x-1/2 last:bottom-0"></div>
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-2 md:top-6 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm md:-translate-x-1/2 z-10"></div>
                
                {/* Content Card */}
                <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-indigo-600 font-medium mb-4">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
