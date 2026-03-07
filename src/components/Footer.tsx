import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-400 text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} Nikhil Shetty. All rights reserved.</p>
          <p className="mt-1">Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-indigo-600 hover:text-white transition-colors shadow-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
