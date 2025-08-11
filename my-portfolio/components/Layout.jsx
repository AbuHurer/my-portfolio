import Footer from './Footer';

export default function Layout({ children }){
  return (
    <div className="min-h-screen text-silver relative overflow-x-hidden">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-moon-700 to-moon-900 flex items-center justify-center text-white font-semibold">AH</div>
          <div>
            <h1 className="text-sm uppercase tracking-wide text-slate-300">Mohammed Abu Hurer</h1>
            <p className="text-xs text-slate-400">AI Engineer • ML Innovator • Data Storyteller</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 items-center text-sm text-slate-300">
          <a href="/projects" className="hover:text-white transition">Projects</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
          <a href="https://github.com/AbuHurer" target="_blank" rel="noreferrer" className="px-3 py-1 border border-slate-700 rounded">GitHub</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}
