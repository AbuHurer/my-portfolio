import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  { id: 'dr', title: 'Diabetic Retinopathy Detection', tags: ['AI','Docker','CV'], desc: 'InceptionV3 classifier, Docker deployment, web API.'},
  { id: 'lunar', title: 'Lunar Anomaly Explorer', tags: ['NLP','Viz','Interactive'], desc: 'NLP on NASA R-277 + interactive moon map & PCA explorer.'},
  { id: 'personality', title: 'Personality Prediction', tags: ['ML','NLP'], desc: 'End-to-end pipeline to predict personality types from text.'},
  { id: 'epilepsy', title: 'Epileptic Seizure Detection', tags: ['ML','Signal'], desc: 'EEG time-series model for seizure classification.'},
  { id: 'mines', title: 'Mine & Rock Identification', tags: ['CV','ML'], desc: 'Object detection + segmentation for terrain analysis.'}
];

const filters = ['All','AI','ML','CV','NLP','Docker','Viz','Interactive','Signal'];

export default function Projects(){
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const filtered = PROJECTS.filter(p =>
    (filter === 'All' || p.tags.includes(filter)) &&
    (p.title.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section id="projects" className="py-10">
      <h2 className="text-2xl text-white font-bold">Featured Projects</h2>

      <div className="mt-4 flex flex-wrap gap-2 items-center">
        {filters.map(f => (
          <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1 text-sm rounded ${filter===f ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'}`}>{f}</button>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search projects..." className="px-3 py-1 bg-slate-800 text-slate-200 rounded text-sm" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map(p => (
            <motion.article key={p.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} className="p-4 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-800/30 border border-slate-700">
              <h3 className="text-lg text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800/60">{t}</span>)}
                </div>
                <div>
                  <a href={`https://github.com/AbuHurer`} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded border border-slate-700">View Repo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
