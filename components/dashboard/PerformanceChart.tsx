'use client';

import { useDashboardStore } from '@/store/use-dashboard-store';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function PerformanceChart() {
  const { monthlyPerformance } = useDashboardStore();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'light';

  return (
    <div className="bg-card rounded-lg p-4 sm:p-6 shadow-sm transition-colors">
      <h2 className="text-base sm:text-lg font-semibold text-card-foreground mb-4 sm:mb-6">
        12-Month Performance
      </h2>

      <div className="h-48 sm:h-56 md:h-64">
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyPerformance}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={currentTheme === 'dark' ? '#374151' : '#f0f0f0'}
              />
              <XAxis
                dataKey="month"
                tick={{ fill: currentTheme === 'dark' ? '#9ca3af' : '#6b7280', fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: currentTheme === 'dark' ? '#9ca3af' : '#6b7280', fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: currentTheme === 'dark' ? '#1f2937' : '#fff',
                  border: `1px solid ${currentTheme === 'dark' ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: currentTheme === 'dark' ? '#f9fafb' : '#111827',
                }}
              />
              <Bar
                dataKey="value"
                fill="url(#colorValue)"
                radius={[8, 8, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
