import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                <Mail className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                <a
                  href="mailto:nikhilshetty0014@outlook.com"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  nikhilshetty0014@outlook.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                <Phone className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                <a
                  href="tel:+919353633186"
                  className="text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  +91 93536 33186
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Location</h3>
                <p className="text-slate-600">Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect Online</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Feel free to reach out on LinkedIn or check out my code on GitHub. I'm always excited to discuss embedded systems, automotive software, and new technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/nikhil-shetty-76a7021a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full font-medium hover:bg-[#004182] transition-colors shadow-sm hover:shadow-md"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/nikhilshetty5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
