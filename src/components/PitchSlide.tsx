import { motion } from 'framer-motion';
import type { PitchSlide as PitchSlideData } from '../data/pitch_content';
import { VisualizationPlaceholder } from './VisualizationPlaceholder';

interface PitchSlideProps {
  slide: PitchSlideData;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.5 },
};

export const PitchSlide: React.FC<PitchSlideProps> = ({ slide }) => {
  switch (slide.layout) {
    case 'hook':
      return <HookSlide slide={slide} />;
    case 'bullets':
      return <BulletsSlide slide={slide} />;
    case 'visualization':
      return <VizSlide slide={slide} />;
    case 'steps':
      return <StepsSlide slide={slide} />;
    case 'insights':
      return <InsightsSlide slide={slide} />;
    case 'strategy':
      return <StrategySlide slide={slide} />;
    case 'team':
      return <TeamSlide slide={slide} />;
    case 'placeholder':
      return <PlaceholderSlide slide={slide} />;
    default:
      return null;
  }
};

const HookSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex items-center justify-center px-4 md:px-8 py-10 md:py-0">
    <motion.div {...fadeUp} className="max-w-[900px] text-center">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-black leading-[0.95] uppercase mb-6">
        {slide.headline}
      </h1>
      {slide.subheadline && (
        <p className="text-lg md:text-xl font-mono text-slate-700 max-w-[600px] mx-auto">
          {slide.subheadline}
        </p>
      )}
    </motion.div>
  </div>
);

const BulletsSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex items-center px-4 md:px-8 py-10 md:py-0">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-[1200px] mx-auto w-full items-center">
      <motion.div {...fadeUp} className="flex-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-4">
          {slide.headline}
        </h2>
        {slide.subheadline && (
          <p className="text-base font-mono text-slate-600 mb-8">{slide.subheadline}</p>
        )}
        {slide.bullets && (
          <ul className="space-y-4">
            {slide.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="flex gap-3 text-sm font-mono text-slate-800"
              >
                <span className="text-[#ff4d00] font-bold shrink-0">//</span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
      {slide.vizId && slide.vizLabel && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex-1 w-full"
        >
          <VisualizationPlaceholder label={slide.vizLabel} className="h-[180px] md:h-[250px]" />
        </motion.div>
      )}
    </div>
  </div>
);

const VizSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex items-center px-4 md:px-8 py-10 md:py-0">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-[1200px] mx-auto w-full items-center">
      <motion.div {...fadeUp} className="flex-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-4">
          {slide.headline}
        </h2>
        {slide.subheadline && (
          <p className="text-base font-mono text-slate-600 mb-6">{slide.subheadline}</p>
        )}
        {slide.bullets && (
          <ul className="space-y-3">
            {slide.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm font-mono text-slate-800">
                <span className="text-[#ff4d00] font-bold shrink-0">//</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
      {slide.vizId && slide.vizLabel && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex-1 w-full"
        >
          <VisualizationPlaceholder label={slide.vizLabel} className="h-[180px] md:h-[300px]" />
        </motion.div>
      )}
    </div>
  </div>
);

const StepsSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex flex-col items-center md:justify-center px-4 md:px-8 py-10 md:py-0">
    <motion.h2
      {...fadeUp}
      className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-6 md:mb-12 text-center"
    >
      {slide.headline}
    </motion.h2>
    <div className="flex flex-col md:flex-row gap-6 max-w-[1100px] w-full">
      {slide.steps?.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
          className="flex-1 border-2 border-black bg-white p-6 shadow-hard"
        >
          <div className="w-10 h-10 bg-[#ff4d00] text-white flex items-center justify-center font-black text-lg mb-4 border-2 border-black">
            {step.number}
          </div>
          <h3 className="text-xl font-black uppercase mb-2">{step.title}</h3>
          <p className="text-sm font-mono text-slate-700">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const InsightsSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex flex-col items-center md:justify-center px-4 md:px-8 py-10 md:py-0">
    <motion.h2
      {...fadeUp}
      className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-8 md:mb-14 text-center"
    >
      {slide.headline}
    </motion.h2>
    <div className="flex flex-col gap-0 max-w-[900px] w-full">
      {slide.steps?.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
          className="flex items-stretch border-b-2 border-black last:border-b-0"
        >
          <div className="w-14 md:w-20 lg:w-28 shrink-0 bg-[#ff4d00] flex items-center justify-center border-r-2 border-black">
            <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">{step.number}</span>
          </div>
          <div className="flex-1 py-6 px-6 md:px-8 bg-white">
            <h3 className="text-lg md:text-xl font-black uppercase mb-1">{step.title}</h3>
            <p className="text-sm font-mono text-slate-600 leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

type PyToken = { text: string; color: string };

function highlightPython(line: string): PyToken[] {
  const tokens: PyToken[] = [];
  const re = /(\w+(?=\())|(\w+\.\w+(?=\())|([a-zA-Z_]\w*)|([().,=])|(\s+)/g;
  let match: RegExpExecArray | null;
  let last = 0;
  while ((match = re.exec(line)) !== null) {
    if (match.index > last) {
      tokens.push({ text: line.slice(last, match.index), color: 'text-slate-300' });
    }
    const text = match[0];
    let color: string;
    if (match[2]) {
      // method call like ws.pipette
      const [obj, method] = text.split('.');
      tokens.push({ text: obj, color: 'text-slate-300' });
      tokens.push({ text: '.', color: 'text-slate-500' });
      tokens.push({ text: method, color: 'text-yellow-300' });
      last = re.lastIndex;
      continue;
    } else if (match[1]) {
      // function call
      color = 'text-yellow-300';
    } else if (/^[().,]$/.test(text)) {
      color = 'text-slate-500';
    } else if (text === '=') {
      color = 'text-sky-400';
    } else if (/^\s+$/.test(text)) {
      color = '';
    } else {
      color = 'text-slate-300';
    }
    tokens.push({ text, color });
    last = re.lastIndex;
  }
  if (last < line.length) {
    tokens.push({ text: line.slice(last), color: 'text-slate-300' });
  }
  return tokens;
}

const StrategySlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex flex-col items-center md:justify-center px-4 md:px-8 py-10 md:py-0">
    <motion.h2
      {...fadeUp}
      className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-6 md:mb-12 text-center"
    >
      {slide.headline}
    </motion.h2>
    <div className="flex flex-col md:flex-row items-stretch max-w-[1200px] w-full">
      {slide.strategyPhases?.map((phase, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center flex-1">
          {i > 0 && (
            <>
              <div className="hidden md:flex items-center px-3">
                <span className="text-3xl font-black text-[#ff4d00]">&rarr;</span>
              </div>
              <div className="flex md:hidden items-center py-3">
                <span className="text-3xl font-black text-[#ff4d00]">&darr;</span>
              </div>
            </>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
            className="border-2 border-black bg-white p-6 shadow-hard w-full"
          >
            <div className="w-10 h-10 bg-[#ff4d00] text-white flex items-center justify-center font-black text-lg mb-4 border-2 border-black">
              {phase.number}
            </div>
            <h3 className="text-xl font-black uppercase mb-2">{phase.title}</h3>
            <p className="text-sm font-mono text-slate-700 mb-4">{phase.description}</p>
            {phase.code && (
              <div className="bg-black border-2 border-black p-4">
                {phase.code.map((line, j) => (
                  <div key={j} className="font-mono text-xs leading-relaxed">
                    <span className="text-slate-500">{'>>> '}</span>
                    {highlightPython(line).map((tok, k) => (
                      <span key={k} className={tok.color}>{tok.text}</span>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

const TeamSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex flex-col items-center md:justify-center px-4 md:px-8 py-10 md:py-0">
    <motion.h2
      {...fadeUp}
      className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-6 md:mb-12 text-center"
    >
      {slide.headline}
    </motion.h2>
    <div className="flex flex-col md:flex-row gap-8 max-w-[900px] w-full">
      {slide.teamMembers?.map((member, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
          className="flex-1 border-2 border-black bg-white p-6 shadow-hard"
        >
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-lg mb-4 border-2 border-black">
            {member.name.charAt(0)}
          </div>
          <h3 className="text-xl font-black uppercase mb-1">{member.name}</h3>
          <div className="text-xs font-mono text-[#ff4d00] font-bold uppercase mb-3">{member.role}</div>
          <p className="text-sm font-mono text-slate-700 leading-relaxed">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const PlaceholderSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex items-center px-4 md:px-8 py-10 md:py-0">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-[1200px] mx-auto w-full items-center">
      <motion.div {...fadeUp} className="flex-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-4">
          {slide.headline}
        </h2>
        {slide.subheadline && (
          <p className="text-base font-mono text-slate-600 mb-6">{slide.subheadline}</p>
        )}
        {slide.bullets && (
          <ul className="space-y-3">
            {slide.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm font-mono text-slate-800">
                <span className="text-[#ff4d00] font-bold shrink-0">//</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
      {slide.vizId && slide.vizLabel && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex-1 w-full"
        >
          <VisualizationPlaceholder label={slide.vizLabel} className="h-[180px] md:h-[250px]" />
        </motion.div>
      )}
    </div>
  </div>
);
