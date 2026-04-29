import { useState } from 'react';
import { buildFullContentMarkdown } from '../lib/exportContent';

interface CopyAllButtonProps {
  className?: string;
  variant?: 'compact' | 'prominent';
}

export const CopyAllButton: React.FC<CopyAllButtonProps> = ({
  className = '',
  variant = 'compact',
}) => {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const handleCopy = async () => {
    const text = buildFullContentMarkdown();
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        setStatus('copied');
      } catch {
        setStatus('error');
      }
      document.body.removeChild(ta);
    }
    setTimeout(() => setStatus('idle'), 2000);
  };

  if (variant === 'prominent') {
    const label =
      status === 'copied'
        ? 'COPIED — NOW PASTE INTO CLAUDE ✓'
        : status === 'error'
          ? 'COPY FAILED'
          : 'COPY EVERYTHING FOR YOUR LLM';
    return (
      <button
        onClick={handleCopy}
        title="Copy every public section of this site as markdown — paste it into Claude or another LLM."
        className={`inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-black text-sm md:text-base font-black font-mono uppercase tracking-wider transition-all hover:translate-x-[2px] hover:translate-y-[2px] ${
          status === 'copied'
            ? 'bg-black text-white'
            : 'bg-[#ff4d00] text-white hover:bg-[#e64500]'
        } ${className}`}
        style={{
          boxShadow: status === 'copied' ? 'none' : '4px 4px 0px 0px #1a1a1a',
        }}
      >
        <span>{label}</span>
      </button>
    );
  }

  const label =
    status === 'copied' ? 'COPIED ✓' : status === 'error' ? 'COPY FAILED' : 'COPY ALL FOR LLM';
  return (
    <button
      onClick={handleCopy}
      title="Copy every public section of this site as markdown — paste it into Claude or another LLM."
      className={`w-full px-3 py-2 border-2 border-black text-[11px] font-bold font-mono uppercase tracking-wider transition-all ${
        status === 'copied'
          ? 'bg-[#ff4d00] text-white'
          : 'bg-white text-black hover:bg-zinc-50'
      } ${className}`}
      style={{ boxShadow: status === 'copied' ? 'none' : '2px 2px 0px 0px #1a1a1a' }}
    >
      {label}
    </button>
  );
};
