import React from 'react';
import cloudOutlineSvg from '../assets/cloud_outline.svg';

export function getMemoViz(vizId: string): React.ReactNode | null {
  switch (vizId) {
    case 'current-workflow':
      return <CurrentWorkflowViz />;
    case 'ga-workflow':
      return <GaWorkflowViz />;
    case 'dna-pipeline':
      return <DnaPipelineViz />;
    case 'customer-pipeline':
      return <CustomerPipelineViz />;
    case 'unit-economics':
      return <UnitEconomicsViz />;
    case 'market-transition':
      return <MarketTransitionViz />;
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

/** Animated SCARA arm — two segments, elbow joint, gripper picking up / dropping off plate */
const CentralArm: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    {/* Base hub */}
    <rect x="-4" y="-4" width="8" height="8" rx="2" fill="black" />
    {/* Rotating arm */}
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="90;90;180;180;230;230;310;310;360;360;450;450"
        keyTimes="0;0.12;0.17;0.29;0.34;0.46;0.51;0.63;0.68;0.80;0.85;1"
        keySplines="0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1"
        calcMode="spline"
        dur="10s"
        repeatCount="indefinite"
      />
      {/* Upper arm */}
      <rect x="4" y="-2.5" width="17" height="5" rx="1" fill="black" />
      {/* Elbow position */}
      <g transform="translate(22, 0)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0;0;0;0;40;40;-40;-40;0;0;0;0"
          keyTimes="0;0.12;0.17;0.29;0.34;0.46;0.51;0.63;0.68;0.80;0.85;1"
          keySplines="0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1;0 0 1 1"
          calcMode="spline"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        />
        {/* Elbow joint */}
        <rect x="-3" y="-3" width="6" height="6" rx="1" fill="black" />
        {/* Forearm */}
        <rect x="3" y="-2" width="11" height="4" rx="1" fill="black" />
        {/* Gripper paddles */}
        <rect x="13" y="-6" width="3" height="3" rx="1" fill="black" />
        <rect x="13" y="3" width="3" height="3" rx="1" fill="black" />
        {/* Plate + wells (visible only while carrying) */}
        <g>
          <animate attributeName="opacity" values="0;1;0"
            keyTimes="0;0.12;0.86" calcMode="discrete" dur="10s" repeatCount="indefinite" />

          <rect x="15" y="-4.5" width="14" height="9" rx="2" stroke="black" strokeWidth="1.5" fill="white" />
          <circle cx="19" cy="-1.5" r="1.5" fill="#ff4d00" />
          <circle cx="24" cy="-1.5" r="1.5" fill="black" />
          <circle cx="19" cy="1.5" r="1.5" fill="black" />
          <circle cx="24" cy="1.5" r="1.5" fill="#ff4d00" />
        </g>
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
    <svg width="100%" viewBox="0 0 520 470" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs id="cw-arr" />

      {/* ─── Title ─── */}
      <text x={260} y={30} textAnchor="middle" style={{ ...label, fontSize: '28px' }} fill="black">Current Workflows</text>

      {/* offset everything down */}
      <g transform="translate(0, 55)">

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
      </g>

      {/* ─── Bottom label ─── */}
      <text x={260} y={448} textAnchor="middle" style={{ ...label, fontSize: '22px' }}>
        <tspan fill="#cc0000">BAD</tspan>
        <tspan fill="black">: REQUIRES HUMAN LABOR</tspan>
      </text>
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
    <svg width="100%" viewBox="0 0 520 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ArrowDefs id="ga-arr" />

      {/* ─── Title ─── */}
      <text x={260} y={30} textAnchor="middle" style={{ ...label, fontSize: '28px' }} fill="black">Genetic Assemblies Workflow</text>

      {/* offset everything down */}
      <g transform="translate(0, 55)">

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
        const railY = armCy + 45;
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

            {/* Title */}
            <text x={rightCx} y={by + 250} textAnchor="middle" style={{ ...label, fontSize: '10px' }} fill="black">AUTOMATED</text>
            <text x={rightCx} y={by + 264} textAnchor="middle" style={{ ...label, fontSize: '10px' }} fill="black">LAB</text>
            <text x={rightCx} y={by + 281} textAnchor="middle" style={{ ...sub, fontSize: '9px' }} fill="#555">robots execute</text>

            {/* Transport rail — train track */}
            <line x1={G.RIGHT_X + 15} y1={railY - 3} x2={G.RIGHT_X + G.RIGHT_W - 15} y2={railY - 3}
              stroke="black" strokeWidth="1.5" />
            <line x1={G.RIGHT_X + 15} y1={railY + 3} x2={G.RIGHT_X + G.RIGHT_W - 15} y2={railY + 3}
              stroke="black" strokeWidth="1.5" />
            {/* Rail plate (slides in, picked up, dropped off, slides out) */}
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`${G.RIGHT_X + 15} ${railY};${rightCx} ${railY};${rightCx} ${railY};${G.RIGHT_X + G.RIGHT_W - 15} ${railY}`}
                keyTimes="0;0.10;0.86;1"
                keySplines="0.25 0.1 0.25 1;0 0 1 1;0.25 0.1 0.25 1"
                calcMode="spline"
                dur="10s"
                repeatCount="indefinite"
              />
              <animate attributeName="opacity" values="1;0;1"
                keyTimes="0;0.12;0.86" calcMode="discrete" dur="10s" repeatCount="indefinite" />
              <rect x="-4.5" y="-7" width="9" height="14" rx="2" stroke="black" strokeWidth="1.5" fill="white" />
              <circle cx="-1.5" cy="-3" r="1.5" fill="black" />
              <circle cx="1.5" cy="-3" r="1.5" fill="#ff4d00" />
              <circle cx="-1.5" cy="3" r="1.5" fill="#ff4d00" />
              <circle cx="1.5" cy="3" r="1.5" fill="black" />
            </g>

            {/* Central animated robot arm (after rail so it renders on top) */}
            <CentralArm x={rightCx} y={armCy} />
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
      </g>

      {/* ─── Bottom label ─── */}
      <text x={260} y={458} textAnchor="middle" style={{ ...label, fontSize: '22px' }}>
        <tspan fill="#22863a">GOOD</tspan>
        <tspan fill="black">: HUMANS ONLY COMMAND MACHINES</tspan>
      </text>
      <text x={260} y={485} textAnchor="middle" style={{ ...sub, fontSize: '10px' }} fill="#999">*human labor minimized through central logistics</text>
    </svg>
  );
};

// ─── DNA Pipeline ───

const DnaPipelineViz: React.FC = () => {
  const cx = 130;

  return (
    <svg width="100%" viewBox="0 0 260 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ─── Title ─── */}
      <text x={cx} y="16" textAnchor="middle" style={{ ...label, fontSize: '14px' }} fill="black">Our first service:</text>
      <text x={cx} y="34" textAnchor="middle" style={{ ...label, fontSize: '14px' }} fill="black">DNA assembly</text>
      <defs>
        <marker id="pipe-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="black" />
        </marker>
        <marker id="pipe-arr-o" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#ff4d00" />
        </marker>
      </defs>

      {/* ─── Oligo Pool ─── */}
      <g transform={`translate(${cx}, 70)`}>
        {/* Tube body */}
        <path d="M-8,-14 L-8,6 Q-8,14 0,14 Q8,14 8,6 L8,-14" stroke="black" strokeWidth="1.5" fill="white" />
        {/* Cap */}
        <rect x="-9" y="-18" width="18" height="5" rx="1.5" fill="black" stroke="black" strokeWidth="1.5" />
        {/* Small lines (oligos) */}
        {[-8, -4, 0, 4, 8].map((dy, i) => (
          <line key={i} x1={-4 + (i % 2) * 2} y1={dy} x2={2 - (i % 2) * 2} y2={dy}
            stroke="#ff4d00" strokeWidth="1" opacity={0.6 + (i % 2) * 0.4} />
        ))}
        <text x="0" y="28" textAnchor="middle" style={{ ...label, fontSize: '9px' }} fill="black">OLIGO POOL</text>
      </g>

      {/* Arrow ↓ */}
      <line x1={cx} y1={105} x2={cx} y2={140} stroke="black" strokeWidth="2" markerEnd="url(#pipe-arr)" />

      {/* ─── Genetic Assemblies box ─── */}
      <rect x={cx - 105} y={145} width={210} height="72" rx="4" fill="black" />
      <text x={cx} y={170} textAnchor="middle" style={{ ...label, fontSize: '12px', letterSpacing: '1px' }} fill="white">GENETIC</text>
      <text x={cx} y={186} textAnchor="middle" style={{ ...label, fontSize: '12px', letterSpacing: '1px' }} fill="white">ASSEMBLIES</text>
      <text x={cx} y={204} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#aaa">(with many cloning optimizations)</text>

      {/* Arrow ↓ */}
      <line x1={cx} y1={222} x2={cx} y2={257} stroke="#ff4d00" strokeWidth="2.5" markerEnd="url(#pipe-arr-o)" />

      {/* ─── Plasmid ─── */}
      <g transform={`translate(${cx}, 282)`}>
        <circle cx="0" cy="0" r="18" stroke="black" strokeWidth="2" fill="white" />
        <path d={`M0,-18 A18,18 0 0,1 ${18 * Math.sin(Math.PI / 3)},${-18 * Math.cos(Math.PI / 3)}`} stroke="#ff4d00" strokeWidth="3" fill="none" />
        <circle cx="0" cy="0" r="3" fill="black" />
        <text x="0" y="32" textAnchor="middle" style={{ ...label, fontSize: '9px' }} fill="black">PLASMID TO CUSTOMER</text>
      </g>
    </svg>
  );
};

// ─── Customer Pipeline ───

const customers = [
  {
    label: 'CUSTOMER A',
    product: 'Cloned Plasmids',
    use: 'animal testing',
    constructs: 120,
    price: 100,
    revenue: 12_000,
    market: '~$2B',
  },
  {
    label: 'CUSTOMER B',
    product: 'Cloned Plasmids',
    use: 'AI protein testing',
    constructs: 192,
    price: 60,
    revenue: 12_000,
    market: '~$2B',
  },
  {
    label: 'CUSTOMER C',
    product: 'Linear DNA',
    use: 'AI protein testing',
    constructs: 1_000,
    price: 10,
    revenue: 10_000,
    market: '$10M–$100M',
  },
] as const;

const mono: React.CSSProperties = {
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
};

const CustomerPipelineViz: React.FC = () => {
  const totalConstructs = customers.reduce((s, c) => s + c.constructs, 0);
  const totalRevenue = customers.reduce((s, c) => s + c.revenue, 0);

  return (
    <div style={mono} className="overflow-y-auto text-sm leading-tight">
      {/* Header */}
      <div className="border-b-2 border-black pb-2 mb-3">
        <div className="font-bold text-xl tracking-widest text-center">DELIVERED TO DATE</div>
        <div className="text-xs text-gray-500 mt-1 text-center">Constructs built & shipped to customers</div>
      </div>

      {/* Customer cards */}
      {customers.map((c, i) => (
        <div key={i} className="border-2 border-black mb-3 p-3">
          <div className="font-bold text-xs tracking-wide mb-1">{c.label}</div>
          <div className="text-xs text-gray-600 mb-2">
            {c.product} — {c.use}
          </div>
          <div className="flex justify-between text-xs mb-1">
            <span>{c.constructs.toLocaleString()} constructs @ ${c.price}</span>
            <span className="font-bold" style={{ color: '#ff4d00' }}>
              ${c.revenue.toLocaleString()}
            </span>
          </div>
          {/* Revenue bar */}
          <div className="w-full h-2 bg-gray-200 mt-1 mb-2">
            <div
              className="h-full"
              style={{
                width: `${(c.revenue / 12_000) * 100}%`,
                backgroundColor: '#ff4d00',
              }}
            />
          </div>
          <div className="text-xs text-gray-500">
            Market: {c.market}
          </div>
        </div>
      ))}

      {/* Totals */}
      <div className="border-2 border-black p-3" style={{ backgroundColor: '#ff4d00' }}>
        <div className="flex justify-between text-xs font-bold text-white">
          <span>TOTAL</span>
          <span>${totalRevenue.toLocaleString()} revenue</span>
        </div>
        <div className="text-xs text-white mt-1">
          {totalConstructs.toLocaleString()} constructs delivered
        </div>
      </div>
    </div>
  );
};

// ─── Unit Economics ───

const UnitEconomicsViz: React.FC = () => {
  const W = 300;
  const cx = W / 2;

  const barW = 70;
  const maxH = 100;
  const barGap = 60;
  const leftX = cx - barGap / 2 - barW / 2;
  const rightX = cx + barGap / 2 + barW / 2;
  const baseY = 175;

  const manualMat = 30;
  const manualLabor = 60;
  const autoMat = 32;
  const autoLabor = 8;
  const price = 100;

  const scale = (v: number) => (v / price) * maxH;

  return (
    <svg width="100%" viewBox={`0 0 ${W} 280`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="ue-arr-o" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="black" />
        </marker>
      </defs>

      <text x={cx} y={18} textAnchor="middle" style={{ ...label, fontSize: '11px' }} fill="black">UNIT ECONOMICS</text>
      <text x={cx} y={32} textAnchor="middle" style={{ ...sub, fontSize: '8px' }} fill="#999">per construct (representative)</text>

      {/* Price line */}
      <line x1={leftX - barW / 2 - 10} y1={baseY - scale(price)} x2={rightX + barW / 2 + 10} y2={baseY - scale(price)} stroke="black" strokeWidth="1" strokeDasharray="4 3" />
      <text x={rightX + barW / 2 + 14} y={baseY - scale(price) + 4} style={{ ...sub, fontSize: '8px' }} fill="black">$100</text>
      <text x={rightX + barW / 2 + 14} y={baseY - scale(price) + 13} style={{ ...sub, fontSize: '7px' }} fill="#999">price</text>

      {/* ── Manual bar ── */}
      <rect x={leftX - barW / 2} y={baseY - scale(manualMat)} width={barW} height={scale(manualMat)} fill="#ddd" stroke="black" strokeWidth="1.5" />
      <text x={leftX} y={baseY - scale(manualMat) / 2 + 3} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="black">${manualMat} mat.</text>
      <rect x={leftX - barW / 2} y={baseY - scale(manualMat + manualLabor)} width={barW} height={scale(manualLabor)} fill="black" />
      <text x={leftX} y={baseY - scale(manualMat) - scale(manualLabor) / 2 + 3} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="white">${manualLabor} labor</text>
      <text x={leftX} y={baseY + 14} textAnchor="middle" style={{ ...label, fontSize: '9px' }} fill="black">MANUAL</text>
      <text x={leftX} y={baseY + 25} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#999">(today)</text>

      {/* Thin margin annotation */}
      {(() => {
        const mTop = baseY - scale(price);
        const mBot = baseY - scale(manualMat + manualLabor);
        return (
          <>
            <rect x={leftX - barW / 2} y={mTop} width={barW} height={mBot - mTop} fill="#ddd" opacity="0.3" stroke="#999" strokeWidth="1" strokeDasharray="3 2" />
            <text x={leftX} y={mTop + (mBot - mTop) / 2 + 3} textAnchor="middle" style={{ ...label, fontSize: '7px' }} fill="#999">${price - manualMat - manualLabor}</text>
          </>
        );
      })()}

      {/* ── Arrow between bars ── */}
      {(() => {
        const arrY = baseY - scale(price) / 2 + 15;
        return (
          <>
            <line x1={leftX + barW / 2 + 8} y1={arrY} x2={rightX - barW / 2 - 8} y2={arrY} stroke="black" strokeWidth="2" markerEnd="url(#ue-arr-o)" />
            <text x={cx} y={arrY + 12} textAnchor="middle" style={{ ...label, fontSize: '7px' }} fill="black">MINIMIZE</text>
            <text x={cx} y={arrY + 21} textAnchor="middle" style={{ ...label, fontSize: '7px' }} fill="black">HUMAN LABOR</text>
          </>
        );
      })()}

      {/* ── Automated bar ── */}
      <rect x={rightX - barW / 2} y={baseY - scale(autoMat)} width={barW} height={scale(autoMat)} fill="#ddd" stroke="black" strokeWidth="1.5" />
      <text x={rightX} y={baseY - scale(autoMat) / 2 + 3} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="black">${autoMat} mat.</text>
      <rect x={rightX - barW / 2} y={baseY - scale(autoMat + autoLabor)} width={barW} height={scale(autoLabor)} fill="black" />
      <text x={rightX} y={baseY - scale(autoMat) - scale(autoLabor) / 2 + 3} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="white">${autoLabor}</text>
      <text x={rightX} y={baseY + 14} textAnchor="middle" style={{ ...label, fontSize: '9px' }} fill="black">AUTOMATED</text>
      <text x={rightX} y={baseY + 25} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#999">(target)</text>

      {/* Fat margin annotation */}
      {(() => {
        const marginTop = baseY - scale(price);
        const marginBot = baseY - scale(autoMat + autoLabor);
        return (
          <>
            <rect x={rightX - barW / 2} y={marginTop} width={barW} height={marginBot - marginTop} fill="#ff4d00" opacity="0.12" stroke="#ff4d00" strokeWidth="1" strokeDasharray="3 2" />
            <text x={rightX} y={marginTop + (marginBot - marginTop) / 2 + 3} textAnchor="middle" style={{ ...label, fontSize: '8px' }} fill="#ff4d00">${price - autoMat - autoLabor} margin</text>
          </>
        );
      })()}

      {/* ─── Bottom label ─── */}
      <text x={cx} y={230} textAnchor="middle" style={{ ...label, fontSize: '12px' }} fill="black">Full automation is hard,</text>
      <text x={cx} y={248} textAnchor="middle" style={{ ...label, fontSize: '12px' }} fill="black">but lets you target markets where</text>
      <text x={cx} y={266} textAnchor="middle" style={{ ...label, fontSize: '12px' }} fill="black">labor is the defining cost.</text>
    </svg>
  );
};

// ─── Market Transition ───

const MarketTransitionViz: React.FC = () => {
  const W = 300;
  const cx = W / 2;

  return (
    <svg width="100%" viewBox={`0 0 ${W} 310`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="mt-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="black" />
        </marker>
      </defs>

      <text x={cx} y={14} textAnchor="middle" style={{ ...label, fontSize: '13px' }} fill="black">MARKET TRANSITION</text>
      <text x={cx} y={30} textAnchor="middle" style={{ ...label, fontSize: '8px' }} fill="black">SERVERS SHIFTED TO CLOUD</text>

      {/* Left: on-prem */}
      {(() => {
        const bx = 30;
        const by = 48;
        const bw = 100;
        const bh = 65;
        return (
          <>
            <rect x={bx} y={by} width={bw} height={bh} rx="3" stroke="black" strokeWidth="1.5" fill="white" />
            {/* Server rack box */}
            <rect x={bx + 30} y={by + 13} width={36} height={39} rx="2" stroke="black" strokeWidth="1" fill="none" />
            <rect x={bx + 33} y={by + 17} width={30} height={8} rx="1.5" stroke="black" strokeWidth="1" fill="white" />
            <circle cx={bx + 57} cy={by + 21} r="2" fill="black" />
            <rect x={bx + 33} y={by + 28} width={30} height={8} rx="1.5" stroke="black" strokeWidth="1" fill="white" />
            <circle cx={bx + 57} cy={by + 32} r="2" fill="#ff4d00" />
            <rect x={bx + 33} y={by + 39} width={30} height={8} rx="1.5" stroke="black" strokeWidth="1" fill="white" />
            <circle cx={bx + 57} cy={by + 43} r="2" fill="black" />
            <text x={bx + bw / 2} y={by + bh + 13} textAnchor="middle" style={{ ...label, fontSize: '8px' }} fill="black">ON-PREM</text>
            <text x={bx + bw / 2} y={by + bh + 24} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#999">servers</text>
          </>
        );
      })()}

      <line x1={140} y1={80} x2={160} y2={80} stroke="black" strokeWidth="1.5" markerEnd="url(#mt-arr)" />

      {/* Right: cloud */}
      {(() => {
        const bx = 170;
        const by = 48;
        const bw = 100;
        const bh = 65;
        return (
          <>
            <rect x={bx} y={by} width={bw} height={bh} rx="3" stroke="#ff4d00" strokeWidth="2" fill="white" />
            <image href={cloudOutlineSvg} x={bx + 10} y={by + 5} width={80} height={55} />
            <text x={bx + bw / 2} y={by + bh + 13} textAnchor="middle" style={{ ...label, fontSize: '8px' }} fill="black">CLOUD</text>
            <text x={bx + bw / 2} y={by + bh + 24} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#999">AWS, etc.</text>
          </>
        );
      })()}

      {/* ─── Same pattern, labs ─── */}
      <text x={cx} y={153} textAnchor="middle" style={{ ...label, fontSize: '9px', letterSpacing: '1px' }} fill="#ff4d00">SAME SHIFT, FOR LABS</text>

      {/* Left: in-house lab */}
      {(() => {
        const bx = 30;
        const by = 165;
        const bw = 100;
        const bh = 50;
        return (
          <>
            <rect x={bx} y={by} width={bw} height={bh} rx="3" stroke="black" strokeWidth="1.5" fill="white" />
            <g transform={`translate(${bx + 42}, ${by + 20}) scale(0.75)`}>
              <PersonInLab x={0} y={0} />
            </g>
            <text x={bx + bw / 2} y={by + bh + 13} textAnchor="middle" style={{ ...label, fontSize: '8px' }} fill="black">IN-HOUSE LAB</text>
          </>
        );
      })()}

      <line x1={140} y1={190} x2={160} y2={190} stroke="black" strokeWidth="1.5" markerEnd="url(#mt-arr)" />

      {/* Right: cloud lab (GA) */}
      {(() => {
        const bx = 170;
        const by = 165;
        const bw = 100;
        const bh = 50;
        return (
          <>
            <rect x={bx} y={by} width={bw} height={bh} rx="3" stroke="#ff4d00" strokeWidth="2" fill="white" />
            <PipetteIcon x={bx + bw / 2} y={by + 25} />
            <text x={bx + bw / 2} y={by + bh + 13} textAnchor="middle" style={{ ...label, fontSize: '8px' }} fill="#ff4d00">CLOUD LAB</text>
            <text x={bx + bw / 2} y={by + bh + 24} textAnchor="middle" style={{ ...sub, fontSize: '7px' }} fill="#999">Genetic Assemblies</text>
          </>
        );
      })()}

      <text x={cx} y={268} textAnchor="middle" style={{ ...label, fontSize: '12px' }} fill="black">If we successfully execute,</text>
      <text x={cx} y={286} textAnchor="middle" style={{ ...label, fontSize: '12px' }} fill="black">we will become the</text>
      <text x={cx} y={304} textAnchor="middle" style={{ ...label, fontSize: '12px' }} fill="black">largest cloud lab.</text>
    </svg>
  );
};
