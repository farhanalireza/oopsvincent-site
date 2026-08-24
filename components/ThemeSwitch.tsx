'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <div className="relative p-2 w-9 h-9 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50" />
    );
  }
  
  const isDark = resolvedTheme === 'dark';
  
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative p-2 w-9 h-9 rounded-full bg-muted/50 backdrop-blur-sm border border-border hover:bg-muted transition-all duration-200 overflow-hidden text-foreground"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.85 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={15} className="text-foreground" />
        ) : (
          <Moon size={15} className="text-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
