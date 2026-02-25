import { useState } from 'react'
import { Dna } from 'lucide-react'
import { TabNav, type TabId } from './components/TabNav'
import { PitchDeck } from './components/PitchDeck'
import { MemoView } from './components/MemoView'
import { EssayView } from './components/EssayView'
import { essay01, essay02, essay03 } from './data/essay_content'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('deck')

  return (
    <div className="h-screen w-full relative bg-[#f2f0e9] text-black font-mono overflow-hidden flex">

      {/* Brutalist Left Sidebar */}
      <aside className="h-full w-56 shrink-0 border-r-2 border-black bg-white z-40 flex flex-col">
         <div className="h-16 border-b-2 border-black flex items-center px-4 gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center text-white border-2 border-black shadow-[2px_2px_0px_0px_white] shrink-0">
               <Dna size={24} />
            </div>
            <span className="font-bold tracking-tight text-black text-sm uppercase leading-tight">GENETIC_ASSEMBLIES</span>
         </div>

         <div className="p-4 flex-1">
            <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
         </div>
      </aside>

      {/* Main Viewport */}
      <main className="h-full flex-1 relative z-0">
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
