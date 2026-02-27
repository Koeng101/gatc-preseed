import React from 'react';
import { motion } from 'framer-motion';
import type { PitchSlide as PitchSlideData } from '../data/pitch_content';
import { VisualizationPlaceholder } from './VisualizationPlaceholder';
import { GaIcon } from './GaIcon';
import plateGif from '../assets/plate0_magsep.gif';
import problemImg from '../assets/problem.png';
import solutionImg from '../assets/solution.png';

const vizImages: Record<string, string> = {
  'problem.png': problemImg,
  'solution.png': solutionImg,
};

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
    case 'progress':
      return <ProgressSlide slide={slide} />;
    case 'team':
      return <TeamSlide slide={slide} />;
    case 'ask':
      return <AskSlide slide={slide} />;
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mt-8">
        <GaIcon size={128} />
        <span className="font-mono font-bold text-xl md:text-3xl tracking-tight uppercase">GENETIC_ASSEMBLIES</span>
      </div>
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
          {slide.vizImage ? (
            <img src={vizImages[slide.vizImage]} alt={slide.vizLabel} className="w-[85%] mx-auto border-2 border-black" />
          ) : (
            <VisualizationPlaceholder label={slide.vizLabel} className="h-[180px] md:h-[250px]" />
          )}
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
          {slide.vizImage ? (
            <img src={vizImages[slide.vizImage]} alt={slide.vizLabel} className="w-[85%] mx-auto border-2 border-black" />
          ) : (
            <VisualizationPlaceholder label={slide.vizLabel} className="h-[180px] md:h-[300px]" />
          )}
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
          {step.code && (
            <div className="bg-black border-2 border-black p-3 mt-3">
              {step.code.map((line, j) => (
                <div key={j} className="font-mono text-xs leading-relaxed">
                  {!line.startsWith('#') && <span className="text-slate-500">{'>>> '}</span>}
                  {highlightPython(line).map((tok, k) => (
                    <span key={k} className={tok.color}>{tok.text}</span>
                  ))}
                </div>
              ))}
            </div>
          )}
          {step.image && (
            <img
              src={plateGif}
              alt="Automated lab in action"
              className="border-2 border-black mt-3 w-full"
            />
          )}
          {step.table && (
            <table className="border-2 border-black mt-3 w-full text-xs font-mono">
              <thead>
                <tr className="bg-black text-white">
                  {step.table.headers.map((h, j) => (
                    <th key={j} className="px-2 py-1 text-left font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {step.table.rows.map((row, j) => (
                  <tr key={j} className="bg-white">
                    {row.map((cell, k) => (
                      <td key={k} className="px-2 py-1 border-t border-slate-200">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
  // Comments get teal color
  const commentIdx = line.indexOf('#');
  if (commentIdx === 0) {
    return [{ text: line, color: 'text-teal-400' }];
  }
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
                    {!line.startsWith('#') && <span className="text-slate-500">{'>>> '}</span>}
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

const HumanSvg = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Enclosure / room box */}
    <rect x="5" y="10" width="110" height="100" rx="3" stroke="black" strokeWidth="4" fill="white" />
    {/* Head */}
    <circle cx="42" cy="30" r="10" fill="black" />
    {/* Body */}
    <rect x="33" y="42" width="18" height="30" rx="2" fill="black" />
    {/* Left arm — resting */}
    <rect x="19" y="46" width="14" height="5" rx="2" fill="black" />
    {/* Right arm — holding pipette */}
    <rect x="51" y="46" width="14" height="5" rx="2" fill="black" />
    {/* Pipette */}
    <rect x="65" y="38" width="4" height="22" rx="1" fill="#ff4d00" />
    <rect x="66" y="60" width="2" height="7" fill="#ff4d00" />
    {/* Legs */}
    <rect x="35" y="72" width="6" height="22" rx="2" fill="black" />
    <rect x="43" y="72" width="6" height="22" rx="2" fill="black" />
    {/* Feet */}
    <rect x="32" y="92" width="10" height="5" rx="2" fill="black" />
    <rect x="42" y="92" width="10" height="5" rx="2" fill="black" />
    {/* Table */}
    <rect x="70" y="62" width="36" height="4" rx="1" fill="black" />
    <rect x="74" y="66" width="4" height="30" rx="1" fill="black" />
    <rect x="98" y="66" width="4" height="30" rx="1" fill="black" />
    {/* Plate on table */}
    <rect x="76" y="50" width="24" height="12" rx="2" stroke="black" strokeWidth="2" fill="white" />
    {/* Plate wells */}
    <circle cx="83" cy="54" r="2" fill="#ff4d00" />
    <circle cx="88" cy="54" r="2" fill="black" />
    <circle cx="93" cy="54" r="2" fill="black" />
    <circle cx="83" cy="59" r="2" fill="black" />
    <circle cx="88" cy="59" r="2" fill="black" />
    <circle cx="93" cy="59" r="2" fill="black" />
  </svg>
);

const RobotSvg = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Enclosure frame */}
    <rect x="5" y="10" width="110" height="100" rx="3" stroke="black" strokeWidth="4" fill="white" />
    {/* Top rail (X gantry) */}
    <rect x="10" y="18" width="100" height="5" rx="1" fill="black" />
    {/* Pipette assembly — outer group moves horizontally along X gantry */}
    <g style={{ animation: 'pipetteShuttleX 5s ease-in-out infinite' }}>
      {/* Vertical rail (Y gantry) */}
      <rect x="68" y="18" width="5" height="50" rx="1" fill="black" />
      {/* Inner group dips vertically into wells */}
      <g style={{ animation: 'pipetteShuttleY 5s ease-in-out infinite' }}>
        {/* Pipette head */}
        <rect x="65" y="52" width="11" height="14" rx="2" fill="black" />
        {/* Pipette tip */}
        <rect x="69" y="66" width="3" height="16" rx="1" fill="#ff4d00" />
      </g>
    </g>
    {/* Plate gripper arm — hangs from gantry */}
    <rect x="30" y="18" width="5" height="42" rx="1" fill="black" /> {/* vertical rail from gantry */}
    <rect x="24" y="56" width="17" height="6" rx="1" fill="black" /> {/* crossbar */}
    {/* Gripper paddles — wide enough to grab a plate */}
    <rect x="22" y="60" width="4" height="14" rx="1" fill="black" /> {/* left paddle */}
    <rect x="39" y="60" width="4" height="14" rx="1" fill="black" /> {/* right paddle */}
    {/* Deck plate 1 */}
    <rect x="14" y="88" width="28" height="16" rx="2" stroke="black" strokeWidth="2" fill="white" />
    {/* Plate 1 wells */}
    <circle cx="22" cy="93" r="2" fill="black" />
    <circle cx="28" cy="93" r="2" fill="black" />
    <circle cx="34" cy="93" r="2" fill="black" />
    <circle cx="22" cy="99" r="2" fill="black" />
    <circle cx="28" cy="99" r="2" fill="black" />
    <circle cx="34" cy="99" r="2" fill="black" />
    {/* Deck plate 2 (under pipette) */}
    <rect x="56" y="88" width="28" height="16" rx="2" stroke="black" strokeWidth="2" fill="white" />
    {/* Plate 2 wells — some filled with orange (in progress) */}
    <circle cx="64" cy="93" r="2" fill="#ff4d00" />
    <circle cx="70" cy="93" r="2" fill="black" />
    <circle cx="76" cy="93" r="2" fill="#ff4d00" />
    <circle cx="64" cy="99" r="2" fill="black" />
    <circle cx="70" cy="99" r="2" fill="black" />
    <circle cx="76" cy="99" r="2" fill="black" />
    {/* Status LED */}
    <circle cx="104" cy="28" r="3" fill="#ff4d00" />
  </svg>
);

const ProgressSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex flex-col items-center md:justify-center px-4 md:px-8 py-10 md:py-0">
    <motion.h2
      {...fadeUp}
      className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-8 md:mb-14 text-center"
    >
      {slide.headline}
    </motion.h2>
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 max-w-[900px] w-full">
      {slide.progressPanels?.map((panel, i) => {
        const Svg = i === 0 ? HumanSvg : RobotSvg;
        return (
          <React.Fragment key={i}>
            {i > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="shrink-0"
              >
                <span className="hidden md:block text-5xl font-black text-[#ff4d00]">&rarr;</span>
                <span className="block md:hidden text-5xl font-black text-[#ff4d00]">&darr;</span>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.2 }}
              className="flex-1 flex flex-col items-center text-center px-6"
            >
              <div className="mb-6">
                <Svg />
              </div>
              <h3 className="text-2xl font-black uppercase mb-3 tracking-wide">{panel.label}</h3>
              <div className="space-y-1 font-mono text-sm text-slate-700">
                {panel.lines.map((line, j) => {
                  const boldMatch = line.match(/^\*\*(.+)\*\*$/);
                  return boldMatch
                    ? <p key={j} className="font-bold text-black">{boldMatch[1]}</p>
                    : <p key={j}>{line}</p>;
                })}
              </div>
            </motion.div>
          </React.Fragment>
        );
      })}
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

const AskSlide: React.FC<PitchSlideProps> = ({ slide }) => (
  <div className="min-h-full md:h-full flex items-center px-4 md:px-8 py-10 md:py-0">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-[1200px] mx-auto w-full items-start">
      <motion.div {...fadeUp} className="flex-1 lg:sticky lg:top-1/3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[0.95] uppercase mb-4">
          {slide.headline}
        </h2>
        {slide.subheadline && (
          <p className="text-base font-mono text-slate-600 mb-4">{slide.subheadline}</p>
        )}
        {slide.bullets && (
          <ul className="space-y-2">
            {slide.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm font-mono text-slate-800">
                <span className="text-[#ff4d00] font-bold shrink-0">//</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
      <div className="flex-1 w-full">
        <div className="flex flex-col">
          {slide.milestones?.map((milestone, i, arr) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
              className="flex gap-3 md:gap-4"
            >
              {/* Month label */}
              <div className="w-10 md:w-12 shrink-0 pt-4 text-right">
                <span className="text-xs font-mono font-bold text-[#ff4d00]">{milestone.month}mo</span>
              </div>
              {/* Dot + line segment */}
              <div className="flex flex-col items-center shrink-0 w-3 md:w-4">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff4d00] mt-4 shrink-0" />
                {i < arr.length - 1 && <div className="flex-1 w-0.5 bg-[#ff4d00]" />}
              </div>
              {/* Card */}
              <div className="flex-1 pb-6">
                <div className="border-2 border-black bg-white shadow-hard p-4">
                  <h3 className="text-lg font-black uppercase mb-1">{milestone.title}</h3>
                  <p className="text-sm font-mono text-slate-700">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {slide.footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-4 text-xs font-mono text-slate-500 pl-14 md:pl-16"
          >
            {slide.footnote}
          </motion.p>
        )}
      </div>
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
