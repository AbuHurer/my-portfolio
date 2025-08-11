import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="py-12 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <motion.h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          Building intelligent systems that see, read, and reason.
        </motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-xl" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>
          I build production-ready machine learning solutions — from computer vision models deployed with Docker to interactive data visualizations and NLP explorers.
        </motion.p>

        <div className="mt-6 flex gap-3">
          <a href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700">View Projects</a>
          <a href="mailto:mohammedabuhurer@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-700">Contact Me</a>
        </div>
      </div>

      <div className="flex-1 w-full max-w-lg">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/30 border border-slate-700">
          <h3 className="text-lg text-white font-semibold">Featured — Lunar Anomaly Explorer</h3>
          <p className="mt-2 text-slate-300">Interactive map + NLP explorer correlating lunar anomaly clusters with mission timelines.</p>
        </div>
      </div>
    </section>
  );
}
