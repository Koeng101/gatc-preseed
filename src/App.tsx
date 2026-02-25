import { useState } from 'react'
import { GaIcon } from './components/GaIcon'
import { TabNav, type TabId } from './components/TabNav'
import { PitchDeck } from './components/PitchDeck'
import { MemoView } from './components/MemoView'
import { EssayView } from './components/EssayView'
import { essay01, essay02, essay03 } from './data/essay_content'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('deck')

  return (
    <div className="h-screen w-full relative bg-[#f2f0e9] text-black font-mono overflow-hidden flex flex-col md:flex-row">

      {/* Mobile Top Bar */}
      <header className="flex md:hidden flex-col border-b-2 border-black bg-white z-40 shrink-0">
        <div onClick={() => setActiveTab('deck')} className="h-12 border-b-2 border-black flex items-center px-3 gap-2 cursor-pointer">
          <GaIcon size={32} />
          <span className="font-bold tracking-tight text-black text-xs uppercase leading-tight">GENETIC_ASSEMBLIES</span>
        </div>
        <div className="overflow-x-auto px-2 py-2">
          <TabNav activeTab={activeTab} onTabChange={setActiveTab} horizontal />
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-full w-56 shrink-0 border-r-2 border-black bg-white z-40 flex-col">
         <div onClick={() => setActiveTab('deck')} className="h-16 border-b-2 border-black flex items-center px-4 gap-3 cursor-pointer">
            <GaIcon size={36} />
            <span className="font-bold tracking-tight text-black text-sm uppercase leading-tight">GENETIC_ASSEMBLIES</span>
         </div>

         <div className="p-4 flex-1">
            <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
         </div>
      </aside>

      {/* Main Viewport */}
      <main className="flex-1 min-h-0 relative z-0">
         {activeTab === 'deck' && <PitchDeck />}
         {activeTab === 'memo' && <MemoView />}
         {activeTab === 'essay_01' && <EssayView essay={essay01} />}
         {activeTab === 'essay_02' && <EssayView essay={essay02} />}
         {activeTab === 'essay_03' && <EssayView essay={essay03} />}
      </main>
    </div>
  )
}

export default App
