'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by defaulting to light theme during SSR
  const currentTheme = mounted ? theme : 'light';

  return (
    <button
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      className={cn(
        "p-2 rounded-lg transition-colors",
        currentTheme === 'dark' ? "hover:bg-gray-700" : "hover:bg-gray-100"
      )}
      aria-label="Toggle theme"
    >
      {currentTheme === 'light' ? (
        <Moon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      ) : (
        <Sun className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />
      )}
    </button>
  );
}
