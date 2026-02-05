'use client';

import { cn } from '@/lib/utils';

interface TabSwitcherProps {
  activeTab: 'overview' | 'evidence';
  setActiveTab: (tab: 'overview' | 'evidence') => void;
  currentTheme: string | undefined;
}

export default function TabSwitcher({ activeTab, setActiveTab, currentTheme }: TabSwitcherProps) {
  return (
    <div className={cn(
      "inline-flex rounded-xl p-1",
      currentTheme === 'dark' ? 'bg-[#2c3e50]' : 'bg-gray-100'
    )}>
      <button
        onClick={() => setActiveTab('overview')}
        className={cn(
          "px-6 py-3 text-sm font-medium rounded-lg transition-all",
          activeTab === 'overview'
            ? currentTheme === 'dark'
              ? 'bg-[#1e293b] text-white shadow-lg'
              : 'bg-white text-gray-900 shadow-sm'
            : currentTheme === 'dark'
              ? 'text-gray-400 hover:text-gray-300'
              : 'text-gray-600 hover:text-gray-900'
        )}
      >
        Overview
      </button>
      <button
        onClick={() => setActiveTab('evidence')}
        className={cn(
          "px-6 py-3 text-sm font-medium rounded-lg transition-all",
          activeTab === 'evidence'
            ? currentTheme === 'dark'
              ? 'bg-[#1e293b] text-white shadow-lg'
              : 'bg-white text-gray-900 shadow-sm'
            : currentTheme === 'dark'
              ? 'text-gray-400 hover:text-gray-300'
              : 'text-gray-600 hover:text-gray-900'
        )}
      >
        Evidence
      </button>
    </div>
  );
}
