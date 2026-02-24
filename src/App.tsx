import { useState, useEffect } from 'react'
import { DesktopLayout } from './components/DesktopLayout'
import { MobileLayout } from './components/MobileLayout'
import { courseContent } from './data/course_content'
import { Dna, BookOpen, Map, Microscope, Box, ShieldAlert, AlignLeft, Activity, Palette, Scissors, Zap, Filter, Leaf, Focus, Dice5, Calculator, GitMerge, Lock, Thermometer, PenTool, Fingerprint } from 'lucide-react'
import ReviewMode from './components/ReviewMode'

function App() {
  const [activeSection, setActiveSection] = useState(courseContent[0].id)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSection = courseContent.find(c => c.id === activeSection) || courseContent[0];

  const getIcon = (widget: string) => {
    switch(widget) {
      case 'aligner': return <AlignLeft size={16} />;
      case 'trimming': return <Scissors size={16} />;
      case 'vcf': return <BookOpen size={16} />;
      case 'pca': return <Map size={16} />;
      case 'painting': return <Palette size={16} />;
      case 'drift': return <Activity size={16} />;
      case 'central_dogma': return <Microscope size={16} />;
      case 'volcano': return <Filter size={16} />;
      case 'protein': return <Box size={16} />;
      case 'gwas': return <Activity size={16} />;
      case 'risk': return <Activity size={16} />;
      case 'crispr': return <Zap size={16} />;
      case 'microbiome': return <Leaf size={16} />;
      case 'single_cell': return <Focus size={16} />;
      case 'phacking': return <Dice5 size={16} />;
      case 'bayes': return <Calculator size={16} />;
      case 'phylogeny': return <GitMerge size={16} />;
      case 'epigenetics': return <Lock size={16} />;
      case 'pcr': return <Thermometer size={16} />;
      case 'plasmid': return <PenTool size={16} />;
      case 'codis': return <Fingerprint size={16} />;
      default: return <ShieldAlert size={16} />;
    }
  }

  return (
    <div className="h-screen w-full relative bg-[#f2f0e9] text-black font-mono overflow-hidden">
      
      {/* Brutalist Header */}
      <header className="h-16 border-b-2 border-black flex items-center px-8 z-40 bg-white relative">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center text-white border-2 border-black shadow-[2px_2px_0px_0px_white]">
               <Dna size={24} />
            </div>
            <span className="font-bold tracking-tight text-black text-xl uppercase">GENOME_ACADEMY_v2.0</span>
         </div>
         
         <div className="ml-auto">
            <button 
              onClick={() => setNavOpen(!navOpen)}
              className="px-6 py-2 bg-black text-white hover:bg-zinc-800 transition-colors"
            >
               {navOpen ? "CLOSE_curriculum" : "MENU_browse"}
            </button>
         </div>
      </header>

      {/* Brutalist Slide-over */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-300 ${navOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
         <div className="absolute inset-0 bg-black/40" onClick={() => setNavOpen(false)} />
         <nav className={`absolute inset-y-0 right-0 w-full max-w-md bg-white border-l-4 border-black p-12 shadow-[-8px_0px_0px_0px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <h2 className="text-2xl font-black uppercase mb-10 border-b-4 border-black pb-2">Course_Curriculum</h2>
            <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar">
               {courseContent.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => { setActiveSection(item.id); setNavOpen(false); }}
                    className={`
                      w-full flex items-center gap-4 py-3 border-2 border-black text-left px-4 shadow-[4px_4px_0px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 mb-4 transition-all
                      ${activeSection === item.id ? 'bg-[#ff4d00] text-white' : 'bg-white text-black hover:bg-zinc-50'}
                    `}
                  >
                    {getIcon(item.widget || 'default')}
                    <span className="text-sm font-bold uppercase">{item.title}</span>
                  </button>
               ))}
            </div>
         </nav>
      </div>

      {/* Main Viewport */}
      <main className="h-[calc(100vh-64px)] w-full relative z-0">
         {isMobile ? (
            <MobileLayout section={currentSection} />
         ) : (
            <DesktopLayout section={currentSection} />
         )}
      </main>

      <ReviewMode />
    </div>
  )
}

export default App