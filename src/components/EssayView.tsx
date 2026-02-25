import { motion } from 'framer-motion';
import type { Essay } from '../data/essay_content';

interface EssayViewProps {
  essay: Essay;
}

export const EssayView: React.FC<EssayViewProps> = ({ essay }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[750px] mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-6">
            {essay.subtitle}
          </div>
          <h1 className="text-5xl font-black text-black mb-12 leading-[0.95] uppercase">
            {essay.title}
          </h1>
        </motion.div>

        <div className="space-y-8">
          {essay.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              {section.heading && (
                <h2 className="text-2xl font-black text-black mb-4 uppercase">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-slate-800 font-mono mb-4">
                  {p}
                </p>
              ))}

              {section.bullets && (
                <ul className="space-y-2 mb-4 ml-4">
                  {section.bullets.map((bullet, k) => (
                    <li key={k} className="flex gap-3 text-sm font-mono text-slate-800">
                      <span className="text-[#ff4d00] font-bold shrink-0">//</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
