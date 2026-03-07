import { motion } from 'motion/react';
import { ExternalLink, FileText, Award } from 'lucide-react';

const projects = [
  {
    title: 'Polymer-Based Optical Sensor for Fuel and Biomedical Applications',
    date: '2023',
    description: 'Developed a flexible polymer and optical fiber-based sensor to detect impurities in fuel and analyze biomedical samples. Designed experimental setups including light-to-frequency and light-to-intensity converters to measure and interpret optical sensor data.',
    tags: ['Optical Sensors', 'Biomedical', 'Hardware Design', 'Data Analysis'],
    link: 'https://ieeexplore.ieee.org/document/10367185', // Assuming IEEE link based on publication
    type: 'Research Project',
  },
];

const recognitions = [
  {
    title: 'AI Efficiency Management SPOC',
    date: '2025',
    description: 'Elected as SPOC at the department level (JKI segments) for AI Efficiency Management initiative, optimizing the use of AI tools across the Autonomous Mobility (AM) segment.',
  },
  {
    title: 'Spot Award - ADCU TATA Project',
    date: '2024',
    description: 'Received Spot Award from Group Lead for delivering best outcomes and solving complex I2C-related issues.',
  },
  {
    title: 'Fiction2Science Hackathon Winner',
    date: '2023',
    description: 'Winner of the Fiction2Science Hackathon organized by Continental Automotive, Bengaluru.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Projects & Recognitions
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Highlighting key research, academic projects, and professional achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Projects Column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <FileText className="text-indigo-600" />
              Featured Projects
            </h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 block">
                        {project.type} • {project.date}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 leading-tight">
                        {project.title}
                      </h4>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recognitions Column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Award className="text-emerald-600" />
              Awards & Activities
            </h3>
            <div className="space-y-6">
              {recognitions.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Award size={24} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-slate-900">{rec.title}</h4>
                      <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
                        {rec.date}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
