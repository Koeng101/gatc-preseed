export const GaIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className="shrink-0">
    <rect width="32" height="32" rx="4" fill="black"/>
    <g transform="translate(16,16) scale(1)">
      {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map(d => (
        <ellipse key={d} cx="0" cy="-8" rx="1.5" ry="4.5" fill="white" transform={`rotate(${d})`}/>
      ))}
      <circle cx="0" cy="0" r="6" fill="#ff4d00"/>
    </g>
  </svg>
)
