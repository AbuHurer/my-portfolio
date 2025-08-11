export default function Contact(){
  return (
    <section id="contact" className="py-10">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/30 border border-slate-700">
        <h2 className="text-2xl text-white font-bold">Contact</h2>
        <p className="mt-2 text-slate-300">Want to collaborate or hire? Send a note.</p>
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{ e.preventDefault(); window.location.href = `mailto:mohammedabuhurer@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mohammed,`; }}>
          <input placeholder="Your name" className="p-3 rounded bg-slate-800 text-white" />
          <input placeholder="Your email" className="p-3 rounded bg-slate-800 text-white" />
          <textarea placeholder="Message" className="p-3 rounded bg-slate-800 text-white md:col-span-2" rows={4} />
          <button type="submit" className="md:col-span-2 px-4 py-2 rounded bg-indigo-600">Send</button>
        </form>

        <div className="mt-6 flex gap-3">
          <a href="https://github.com/AbuHurer" target="_blank" rel="noreferrer" className="text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/mohammed-abu-hurer-703b34261" target="_blank" rel="noreferrer" className="text-sm">LinkedIn</a>
          <a href="https://instagram.com/abu_hurer_" target="_blank" rel="noreferrer" className="text-sm">Instagram</a>
        </div>
      </div>
    </section>
  );
}
