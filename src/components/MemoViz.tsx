import React from 'react';

export function getMemoViz(vizId: string): React.ReactNode | null {
  switch (vizId) {
    case 'current-workflow':
      return <CurrentWorkflowViz />;
    case 'ga-workflow':
      return <GaWorkflowViz />;
    default:
      return null;
  }
}

const label: React.CSSProperties = {
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
  fontWeight: 'bold',
};

const sub: React.CSSProperties = {
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
};

// ─── Grid constants ───
const G = {
  PAD: 10,
  LEFT_X: 10,
  LEFT_W: 130,
  RIGHT_X: 330,
  RIGHT_W: 180,
  MID_X: 235,
  ROW_H: 90,
  ROW_GAP: 20,
  rowY: (i: number) => 10 + i * (90 + 20), // 10, 120, 230
  TOTAL_H: 310, // 3 rows: 3*90 + 2*20
};

// ─── Reusable icon components ───

const ScientistWithLaptop: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Person */}
    <circle cx="26" cy="14" r="12" fill="black" />
    <rect x="14" y="29" width="24" height="22" rx="3" fill="black" />
    {/* Laptop */}
    <rect x="0" y="62" width="52" height="28" rx="2" stroke="black" strokeWidth="2" fill="white" />
    <line x1="7" y1="70" x2="39" y2="70" stroke="#ddd" strokeWidth="1.5" />
    <line x1="7" y1="76" x2="33" y2="76" stroke="#ddd" strokeWidth="1.5" />
    <line x1="7" y1="82" x2="37" y2="82" stroke="#ddd" strokeWidth="1.5" />
    <rect x="-5" y="90" width="62" height="5" rx="1" fill="black" />
  </g>
);

const PersonInLab: React.FC<{ x: number; y: number; bodyFill?: string }> = ({ x, y, bodyFill = 'black' }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Person */}
    <circle cx="0" cy="0" r="10" fill="black" />
    <rect x="-10" y="12" width="20" height="18" rx="2" fill={bodyFill} />
    {/* Arm + pipette */}
    <rect x="10" y="15" width="12" height="4" rx="1" fill="black" />
    <rect x="22" y="6" width="3" height="18" rx="1" fill="#ff4d00" />
    {/* Bench */}
    <rect x="-18" y="34" width="56" height="4" rx="1" fill="black" />
  </g>
);


const EnvelopeIcon: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <rect x="0" y="0" width="42" height="30" rx="3" stroke="black" strokeWidth="2" fill="white" />
    <polyline points="0,0 21,20 42,0" stroke="black" strokeWidth="2" fill="none" />
  </g>
);

const GearIcon: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <circle cx="0" cy="0" r="8" stroke="black" strokeWidth="2" fill="white" />
    <circle cx="0" cy="0" r="3" stroke="black" strokeWidth="1.5" fill="white" />
    {/* 8 teeth */}
    <rect x="-2" y="-12" width="4" height="4" rx="0.5" fill="black" />
    <rect x="-2" y="8" width="4" height="4" rx="0.5" fill="black" />
    <rect x="-12" y="-2" width="4" height="4" rx="0.5" fill="black" />
    <rect x="8" y="-2" width="4" height="4" rx="0.5" fill="black" />
    <rect x="5" y="-9" width="3" height="3" rx="0.5" fill="black" />
    <rect x="-8" y="-9" width="3" height="3" rx="0.5" fill="black" />
    <rect x="5" y="6" width="3" height="3" rx="0.5" fill="black" />
    <rect x="-8" y="6" width="3" height="3" rx="0.5" fill="black" />
  </g>
);

const ChatBubbleCode: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Bubble */}
    <rect x="-30" y="-25" width="60" height="40" rx="4" stroke="black" strokeWidth="2" fill="white" />
    <polygon points="-5,15 0,23 5,15" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    <line x1="-4" y1="15" x2="4" y2="15" stroke="white" strokeWidth="2.5" />
    {/* Code lines */}
    <line x1="-22" y1="-17" x2="12" y2="-17" stroke="#ff4d00" strokeWidth="2" />
    <line x1="-22" y1="-10" x2="22" y2="-10" stroke="#ff4d00" strokeWidth="2" />
    <line x1="-22" y1="-3" x2="8" y2="-3" stroke="#ff4d00" strokeWidth="2" />
    <line x1="-22" y1="4" x2="18" y2="4" stroke="#ff4d00" strokeWidth="2" />
  </g>
);

const ChatBubbleData: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Bubble */}
    <rect x="-30" y="-25" width="60" height="40" rx="4" stroke="black" strokeWidth="2" fill="white" />
    <polygon points="-5,15 0,23 5,15" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    <line x1="-4" y1="15" x2="4" y2="15" stroke="white" strokeWidth="2.5" />
    {/* Data bars */}
    <rect x="-20" y="-3" width="10" height="16" rx="1" fill="black" />
    <rect x="-6" y="3" width="10" height="10" rx="1" fill="black" />
    <rect x="8" y="-9" width="10" height="22" rx="1" fill="#ff4d00" />
  </g>
);

// ─── Lab equipment icons ───

/** Mini gantry liquid handler — enclosure box matching PitchSlide RobotSvg */
const PipetteIcon: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Enclosure frame */}
    <rect x="-15" y="-12" width="30" height="24" rx="2" stroke="black" strokeWidth="2" fill="white" />
    {/* Top rail (X gantry) */}
    <rect x="-12" y="-9" width="24" height="2.5" rx="1" fill="black" />
    {/* Pipette vertical rail */}
    <rect x="4" y="-9" width="2.5" height="14" rx="1" fill="black" />
    {/* Pipette head */}
    <rect x="2" y="2" width="5" height="5" rx="1" fill="black" />
    {/* Pipette tip (orange) */}
    <rect x="3.5" y="7" width="2" height="5" rx="0.5" fill="#ff4d00" />
    {/* Gripper arm vertical rail */}
    <rect x="-6" y="-9" width="2.5" height="12" rx="1" fill="black" />
    {/* Gripper crossbar */}
    <rect x="-9" y="1" width="8" height="2.5" rx="1" fill="black" />
    {/* Gripper paddles */}
    <rect x="-10" y="2.5" width="2" height="5" rx="0.5" fill="black" />
    <rect x="-3" y="2.5" width="2" height="5" rx="0.5" fill="black" />
    {/* Status LED */}
    <circle cx="12" cy="-6" r="1.5" fill="#ff4d00" />
  </g>
);

const PlateReaderIcon: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Box */}
    <rect x="-18" y="-10" width="36" height="20" rx="2" stroke="black" strokeWidth="1.5" fill="white" />
    {/* Slot with plate */}
    <rect x="-14" y="-4" width="28" height="3" rx="1" fill="#eee" stroke="black" strokeWidth="0.75" />
    {/* Indicator LEDs */}
    <circle cx="-7" cy="5" r="1.5" fill="black" />
    <circle cx="0" cy="5" r="1.5" fill="#ff4d00" />
    <circle cx="7" cy="5" r="1.5" fill="black" />
  </g>
);

const CentrifugeIcon: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <circle cx="0" cy="0" r="11" stroke="black" strokeWidth="1.5" fill="white" />
    <circle cx="0" cy="0" r="2.5" fill="black" />
    {/* 4 rotor tubes */}
    <rect x="-1.5" y="-9.5" width="3" height="5" rx="1" fill="#ff4d00" transform="rotate(45)" />
    <rect x="-1.5" y="-9.5" width="3" height="5" rx="1" fill="black" transform="rotate(135)" />
    <rect x="-1.5" y="-9.5" width="3" height="5" rx="1" fill="#ff4d00" transform="rotate(225)" />
    <rect x="-1.5" y="-9.5" width="3" height="5" rx="1" fill="black" transform="rotate(315)" />
  </g>
);

const IncubatorIcon: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Box */}
    <rect x="-18" y="-10" width="36" height="20" rx="2" stroke="black" strokeWidth="1.5" fill="white" />
    {/* Door line */}
    <line x1="0" y1="-8" x2="0" y2="8" stroke="black" strokeWidth="0.75" />
    {/* Handle */}
    <rect x="1.5" y="-1.5" width="2.5" height="3" rx="0.5" fill="black" />
    {/* Temperature */}
    <text x="-10" y="2" style={{ fontSize: '6px', fontFamily: 'monospace', fontWeight: 'bold' }} fill="black">37°</text>
  </g>
);

/** Animated SCARA arm — two segments, elbow joint, gripper holding a plate */
const CentralArm: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Base hub */}
    <rect x="-4" y="-4" width="8" height="8" rx="2" fill="black" />
    {/* Rotating arm */}
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="180;180;230;230;310;310;360;360;540"
        keyTimes="0;0.18;0.25;0.43;0.5;0.68;0.75;0.93;1"
        keySplines="0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1"
        calcMode="spline"
        dur="6s"
        repeatCount="indefinite"
      />
      {/* Upper arm */}
      <rect x="4" y="-2.5" width="17" height="5" rx="1" fill="black" />
      {/* Elbow position */}
      <g transform="translate(22, 0)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0;0;40;40;-40;-40;0;0;0"
          keyTimes="0;0.18;0.25;0.43;0.5;0.68;0.75;0.93;1"
          keySplines="0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1"
          calcMode="spline"
          dur="6s"
          repeatCount="indefinite"
          additive="sum"
        />
        {/* Elbow joint */}
        <rect x="-3" y="-3" width="6" height="6" rx="1" fill="#555" />
        {/* Forearm */}
        <rect x="3" y="-2" width="11" height="4" rx="1" fill="black" />
        {/* Gripper paddles */}
        <rect x="13" y="-6" width="3" height="3" rx="1" fill="black" />
        <rect x="13" y="3" width="3" height="3" rx="1" fill="black" />
        {/* Plate */}
        <rect x="15" y="-4.5" width="14" height="9" rx="2" stroke="black" strokeWidth="1.5" fill="white" />
        {/* Wells (2×2) */}
        <circle cx="19" cy="-1.5" r="1.5" fill="#ff4d00" />
        <circle cx="24" cy="-1.5" r="1.5" fill="black" />
        <circle cx="19" cy="1.5" r="1.5" fill="black" />
        <circle cx="24" cy="1.5" r="1.5" fill="#ff4d00" />
      </g>
    </g>
  </g>
);

/** Left scientist box — identical icon placement in both diagrams, only subtitle varies */
const ScientistBox: React.FC<{ subtextLines: string[] }> = ({ subtextLines }) => {
  const cx = G.LEFT_X + G.LEFT_W / 2; // 75
  const y0 = G.rowY(0); // 10
  return (
    <>
      <rect x={G.LEFT_X} y={y0} width={G.LEFT_W} height={G.TOTAL_H} rx="4" stroke="black" strokeWidth="2.5" fill="white" />
      <ScientistWithLaptop x={cx - 26} y={y0 + 76} />
      <text x={cx} y={y0 + 185} textAnchor="middle" style={{ ...label, fontSize: '11px' }} fill="black">SCIENTIST</text>
      {subtextLines.map((line, i) => (
        <text key={i} x={cx} y={y0 + 200 + i * 13} textAnchor="middle" style={{ ...sub, fontSize: '9px' }} fill="#555">{line}</text>
      ))}
    </>
  );
};

const Arrow: React.FC<{ x1: number; y1: number; x2: number; y2: number; markerId: string }> = (p) => (
  <line x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke="black" strokeWidth="2" markerEnd={`url(#${p.markerId})`} />
);

const ArrowDefs: React.FC<{ id: string }> = ({ id }) => (
  <defs>
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0L10 5L0 10z" fill="black" />
    </marker>
  </defs>
);

// ─── Current Workflow ───

const CurrentWorkflowViz: React.FC = () => {
  const r0 = G.rowY(0); // 10
  const r1 = G.rowY(1); // 120
  const r2 = G.rowY(2); // 230
  const rightCx = G.RIGHT_X + G.RIGHT_W / 2; // 420

  return (
    <svg width="100%" viewBox="0 0 520 335" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs id="cw-arr" />

      {/* ─── Left: Scientist box (spans all 3 rows) ─── */}
      <ScientistBox subtextLines={['planning work']} />

      {/* ─── Top row: does it themself ─── */}
      <Arrow x1={G.LEFT_X + G.LEFT_W} y1={r0 + 45} x2={G.RIGHT_X - 7} y2={r0 + 45} markerId="cw-arr" />
      <rect x={G.RIGHT_X} y={r0} width={G.RIGHT_W} height={G.ROW_H} rx="4" stroke="black" strokeWidth="2.5" fill="white" />
      <PersonInLab x={G.RIGHT_X + 40} y={r0 + 25} bodyFill="black" />
      <text x={G.RIGHT_X + 118} y={r0 + 33} textAnchor="middle" style={{ ...label, fontSize: '10px' }} fill="black">SCIENTIST</text>
      <text x={G.RIGHT_X + 118} y={r0 + 47} textAnchor="middle" style={{ ...sub, fontSize: '9px' }} fill="#555">does it themself</text>
      <text x={rightCx} y={r0 + 80} textAnchor="middle" style={{ ...sub, fontSize: '8px', fontStyle: 'italic' }} fill="#888">(most scientists)</text>

      {/* ─── OR #1 ─── */}
      <text x={G.MID_X} y={r0 + G.ROW_H + G.ROW_GAP / 2 + 5} textAnchor="middle" style={{ ...label, fontSize: '14px' }} fill="#ff4d00">OR</text>

      {/* ─── Middle row: different scientist ─── */}
      <Arrow x1={G.LEFT_X + G.LEFT_W} y1={r1 + 45} x2={G.MID_X - 24} y2={r1 + 45} markerId="cw-arr" />
      <EnvelopeIcon x={G.MID_X - 21} y={r1 + 30} />
      <text x={G.MID_X} y={r1 + 75} textAnchor="middle" style={{ ...sub, fontSize: '8px' }} fill="#555">email</text>
      <Arrow x1={G.MID_X + 21} y1={r1 + 45} x2={G.RIGHT_X - 7} y2={r1 + 45} markerId="cw-arr" />
      <rect x={G.RIGHT_X} y={r1} width={G.RIGHT_W} height={G.ROW_H} rx="4" stroke="black" strokeWidth="2.5" fill="white" />
      <PersonInLab x={G.RIGHT_X + 40} y={r1 + 23} bodyFill="#555" />
      <text x={G.RIGHT_X + 118} y={r1 + 33} textAnchor="middle" style={{ ...label, fontSize: '9px' }} fill="black">DIFF. SCIENTIST</text>
      <text x={G.RIGHT_X + 118} y={r1 + 47} textAnchor="middle" style={{ ...sub, fontSize: '9px' }} fill="#555">does it for them</text>

      {/* ─── OR #2 ─── */}
      <text x={G.MID_X} y={r1 + G.ROW_H + G.ROW_GAP / 2 + 5} textAnchor="middle" style={{ ...label, fontSize: '14px' }} fill="#ff4d00">OR</text>

      {/* ─── Bottom row: operating robots ─── */}
      <Arrow x1={G.LEFT_X + G.LEFT_W} y1={r2 + 45} x2={G.MID_X - 14} y2={r2 + 45} markerId="cw-arr" />
      <GearIcon x={G.MID_X} y={r2 + 45} />
      <text x={G.MID_X} y={r2 + 72} textAnchor="middle" style={{ ...sub, fontSize: '8px' }} fill="#555">maintain/handle</text>
      <Arrow x1={G.MID_X + 14} y1={r2 + 45} x2={G.RIGHT_X - 7} y2={r2 + 45} markerId="cw-arr" />
      <rect x={G.RIGHT_X} y={r2} width={G.RIGHT_W} height={G.ROW_H} rx="4" stroke="black" strokeWidth="2.5" fill="white" />
      <PersonInLab x={G.RIGHT_X + 40} y={r2 + 23} bodyFill="black" />
      {/* Robot arm structure */}
      <rect x={G.RIGHT_X + 75} y={r2 + 15} width="5" height="35" rx="1" fill="black" />
      <rect x={G.RIGHT_X + 75} y={r2 + 15} width="25" height="5" rx="1" fill="black" />
      <rect x={G.RIGHT_X + 97} y={r2 + 20} width="3" height="14" rx="1" fill="#ff4d00" />
      <text x={G.RIGHT_X + 135} y={r2 + 35} textAnchor="middle" style={{ ...label, fontSize: '10px' }} fill="black">SCIENTIST</text>
      <text x={G.RIGHT_X + 135} y={r2 + 49} textAnchor="middle" style={{ ...sub, fontSize: '8px' }} fill="#555">operating robots</text>
      <text x={G.RIGHT_X + 135} y={r2 + 61} textAnchor="middle" style={{ ...sub, fontSize: '8px' }} fill="#555">themself</text>
    </svg>
  );
};

// ─── GA Workflow ───

const GaWorkflowViz: React.FC = () => {
  const rightCx = G.RIGHT_X + G.RIGHT_W / 2; // 420

  // AI icons float at MID_X
  const topIconY = 85;  // center of top half
  const botIconY = 245; // center of bottom half

  return (
    <svg width="100%" viewBox="0 0 520 335" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs id="ga-arr" />

      {/* ─── Left: Scientist box (identical to current-workflow) ─── */}
      <ScientistBox subtextLines={['orchestrates', 'experiment']} />

      {/* ─── Right: Automated Lab box ─── */}
      <rect x={G.RIGHT_X} y={G.rowY(0)} width={G.RIGHT_W} height={G.TOTAL_H} rx="4" stroke="black" strokeWidth="2.5" fill="white" />
      {(() => {
        const by = G.rowY(0); // box top = 10
        const lx = rightCx - 52; // bottom left column = 368
        const rx = rightCx + 52; // bottom right column = 472
        const topLx = rightCx - 35; // top left column = 385 (inset for arm range)
        const topRx = rightCx + 35; // top right column = 455
        const topR = by + 105;   // top equipment row (~53px from arm)
        const botR = by + 145;   // bottom equipment row
        const armCy = botR;      // arm sits at bottom row, between centrifuge & incubator
        const lblOff = 20;       // label offset below icon center
        return (
          <>
            {/* Top equipment (in arm range) */}
            <PipetteIcon x={topLx} y={topR} />
            <text x={topLx} y={topR + lblOff} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#555">pipette</text>
            <PlateReaderIcon x={topRx} y={topR} />
            <text x={topRx} y={topR + lblOff} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#555">plate reader</text>
            {/* Bottom equipment (flanking arm) */}
            <CentrifugeIcon x={lx} y={botR} />
            <text x={lx} y={botR + lblOff} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#555">centrifuge</text>
            <IncubatorIcon x={rx} y={botR} />
            <text x={rx} y={botR + lblOff} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#555">incubator</text>

            {/* Central animated robot arm */}
            <CentralArm x={rightCx} y={armCy} />

            {/* Title */}
            <text x={rightCx} y={by + 200} textAnchor="middle" style={{ ...label, fontSize: '10px' }} fill="black">AUTOMATED</text>
            <text x={rightCx} y={by + 214} textAnchor="middle" style={{ ...label, fontSize: '10px' }} fill="black">LAB</text>
            <text x={rightCx} y={by + 231} textAnchor="middle" style={{ ...sub, fontSize: '9px' }} fill="#555">robots execute</text>

            {/* ─── Rail space (y ≈ 250–310) — reserved for future rail ─── */}
          </>
        );
      })()}

      {/* ─── Floating AI Agent 1 (code) — top half ─── */}
      <Arrow x1={G.LEFT_X + G.LEFT_W} y1={topIconY} x2={G.MID_X - 35} y2={topIconY} markerId="ga-arr" />
      <ChatBubbleCode x={G.MID_X} y={topIconY} />
      <text x={G.MID_X} y={topIconY + 32} textAnchor="middle" style={{ ...label, fontSize: '9px' }} fill="black">AI AGENT</text>
      <text x={G.MID_X} y={topIconY + 44} textAnchor="middle" style={{ ...sub, fontSize: '8px' }} fill="#555">generates code</text>
      <Arrow x1={G.MID_X + 35} y1={topIconY} x2={G.RIGHT_X - 7} y2={topIconY} markerId="ga-arr" />

      {/* ─── Floating AI Agent 2 (data) — bottom half ─── */}
      <Arrow x1={G.RIGHT_X} y1={botIconY} x2={G.MID_X + 42} y2={botIconY} markerId="ga-arr" />
      <ChatBubbleData x={G.MID_X} y={botIconY} />
      <text x={G.MID_X} y={botIconY + 32} textAnchor="middle" style={{ ...label, fontSize: '9px' }} fill="black">AI AGENT</text>
      <text x={G.MID_X} y={botIconY + 44} textAnchor="middle" style={{ ...sub, fontSize: '8px' }} fill="#555">interprets results</text>
      <Arrow x1={G.MID_X - 42} y1={botIconY} x2={G.LEFT_X + G.LEFT_W + 7} y2={botIconY} markerId="ga-arr" />
    </svg>
  );
};
