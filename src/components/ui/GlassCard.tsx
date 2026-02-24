import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, hoverEffect = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" } : {}}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg",
        "dark:bg-slate-900/60 dark:border-white/10",
        className
      )}
      {...props}
    >
      {/* Glossy sheen overlay */}
      <div className="pointer-events-none absolute -inset-full top-0 block -rotate-45 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20" />
      {children}
    </motion.div>
  );
};
