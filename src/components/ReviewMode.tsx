import React, { useState, useEffect } from 'react';
import { MessageSquarePlus, Mic, X, Copy, Check } from 'lucide-react';

interface FeedbackItem {
  id: number;
  element: string; // "H2: 1.1 Sequencing..."
  comment: string;
}

const ReviewMode: React.FC = () => {
  const [active, setActive] = useState(false);
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [pendingComment, setPendingComment] = useState("");
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [targetName, setTargetName] = useState("");

  // Speech Recognition Setup
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setPendingComment(prev => prev + (prev ? " " : "") + transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
  }

  // Highlight effect on hover
  useEffect(() => {
    if (!active) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.review-widget')) return; // Ignore the widget itself
      target.style.outline = "2px dashed #6366f1";
      target.style.cursor = "alias";
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = "";
      target.style.cursor = "";
    };

    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('.review-widget')) return;
      e.preventDefault();
      e.stopPropagation();
      
      const target = e.target as HTMLElement;
      setTargetElement(target);
      // Generate a readable name (e.g., "BUTTON: Start Review")
      const tagName = target.tagName;
      const text = target.innerText?.slice(0, 20) || "";
      setTargetName(`${tagName}${text ? `: "${text}..."` : ""}`);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('click', handleClick, true);
      // Cleanup styles
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.outline = "";
      });
    };
  }, [active]);

  const toggleListen = () => {
    if (!recognition) {
      alert("Voice not supported in this browser (Try Chrome).");
      return;
    }
    if (isListening) recognition.stop();
    else recognition.start();
    setIsListening(!isListening);
  };

  const saveFeedback = () => {
    if (!pendingComment) return;
    setItems([...items, { id: Date.now(), element: targetName, comment: pendingComment }]);
    setTargetElement(null);
    setPendingComment("");
  };

  const copyReport = () => {
    const report = items.map(i => `- **${i.element}**: ${i.comment}`).join('\n');
    navigator.clipboard.writeText(`### UX Feedback Report\n${report}`);
    alert("Report copied to clipboard! Paste it into the chat.");
  };

  return (
    <div className="review-widget fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans">
      {/* Feedback Form Popup */}
      {targetElement && (
        <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl shadow-2xl w-80 mb-2 animate-in slide-in-from-bottom-4">
           <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-indigo-400 truncate w-60">{targetName}</span>
              <button onClick={() => setTargetElement(null)}><X size={14} className="text-zinc-500 hover:text-white"/></button>
           </div>
           
           <textarea 
             className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-2 text-sm text-white mb-2 focus:ring-2 focus:ring-indigo-500 outline-none"
             rows={3}
             placeholder="Speak or type your feedback..."
             value={pendingComment}
             onChange={(e) => setPendingComment(e.target.value)}
           />
           
           <div className="flex gap-2">
              <button 
                onClick={toggleListen}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-bold text-xs transition-colors ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
              >
                 <Mic size={14} /> {isListening ? 'Listening...' : 'Dictate'}
              </button>
              <button 
                onClick={saveFeedback}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2"
              >
                 <Check size={14} /> Save
              </button>
           </div>
        </div>
      )}

      {/* Main Controls */}
      {active && items.length > 0 && (
         <div className="bg-zinc-900 border border-zinc-700 p-2 rounded-xl mb-2 w-64 max-h-48 overflow-y-auto">
            <div className="text-xs font-bold text-zinc-500 uppercase px-2 mb-2">Collected Feedback ({items.length})</div>
            {items.map(item => (
               <div key={item.id} className="text-xs text-zinc-300 border-b border-zinc-800 pb-1 mb-1 last:border-0">
                  <span className="text-indigo-400 font-bold">{item.element.split(':')[0]}</span>: {item.comment}
               </div>
            ))}
            <button onClick={copyReport} className="w-full mt-2 bg-zinc-800 hover:bg-zinc-700 text-white py-1 rounded text-xs flex items-center justify-center gap-1">
               <Copy size={12} /> Copy Report
            </button>
         </div>
      )}

      <button 
        onClick={() => setActive(!active)}
        className={`
          flex items-center gap-2 px-4 py-3 rounded-full font-bold shadow-xl transition-all
          ${active ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700'}
        `}
      >
        {active ? <X size={20} /> : <MessageSquarePlus size={20} />}
        {active ? 'Exit Review' : 'Give Feedback'}
      </button>
    </div>
  );
};

export default ReviewMode;
