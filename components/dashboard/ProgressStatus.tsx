"use client";

import Link from "next/link";
import { useDashboardStore } from "@/store/use-dashboard-store";
import { useTheme } from "next-themes";
import { cn, getStatusColor } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function ProgressStatus() {
  const { perspectives } = useDashboardStore();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'light';

  return (
    <div className="bg-white dark:bg-card rounded-lg p-4 sm:p-6 shadow-sm transition-colors">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground">
          Progress Status
        </h2>

        {/* Legend */}
        <div className="flex items-center gap-6 text-sm overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-gray-600 dark:text-muted-foreground">
              Not Started
            </span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-muted-foreground">
              In Progress
            </span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-muted-foreground">
              Completed
            </span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-muted-foreground">
              Partially Uploaded
            </span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-muted-foreground">
              Fully Uploaded
            </span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-muted-foreground">
              Delayed
            </span>
          </div>
        </div>
      </div>

      {/* Main Perspective Headers - Row of cards with titles and percentages */}
      <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-2 sm:gap-3">
        {perspectives.map((perspective) => (
          <Link
            key={perspective.id}
            href={`/perspectives/${perspective.id}`}
            className="bg-[#2c3e50] dark:bg-[#1e293b] rounded-lg p-3 hover:shadow-lg transition-all cursor-pointer text-center border-gray-600 border"
          >
            <h3 className="text-white font-semibold text-xs mb-2 line-clamp-2 min-h-8">
              {perspective.title}
            </h3>
            <div className="text-white text-sm font-bold bg-[#344968] rounded-2xl px-2 py-1">
              {perspective.progress.toFixed(2)}%
            </div>
          </Link>
        ))}
      </div>

      {/* Subareas Grid - Custom masonry layout with pattern: 3,3,1,2,3,1,2,3,1... */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {(() => {
          // Flatten all subareas into a single array
          const allSubareas = perspectives.flatMap((perspective) =>
            perspective.subareas.map((subarea) => ({
              ...subarea,
              perspectiveId: perspective.id,
            })),
          );

          // Define the exact pattern: 3, 3, 1, 2, 3, 1, 2, 3, 3, 2
          const pattern = [3, 3, 1, 2, 3, 1, 2, 3, 3, 2];
          const columns: typeof allSubareas[] = [];
          let currentIndex = 0;

          // Distribute cards into columns according to pattern
          for (const columnSize of pattern) {
            if (currentIndex >= allSubareas.length) break;
            const columnCards = allSubareas.slice(
              currentIndex,
              currentIndex + columnSize,
            );
            columns.push(columnCards);
            currentIndex += columnSize;
          }

          return columns.map((columnCards, colIndex) => {
            const isSingleOrDouble = columnCards.length <= 2;

            return (
              <div
                key={colIndex}
                className="flex flex-col gap-3 shrink-0"
                style={{ width: "160px" }}
              >
                {columnCards.map((subarea) => (
                  <Link
                    key={`${subarea.perspectiveId}-${subarea.id}`}
                    href={`/perspectives/${subarea.perspectiveId}`}
                    className={cn(
                      "rounded-lg p-3 hover:shadow-xl hover:border-gray-200 transition-all cursor-pointer w-full border",
                      isSingleOrDouble && "flex-1 flex flex-col justify-center",
                      currentTheme === "dark"
                        ? "bg-[#475569] border-transparent text-white"
                        : "bg-[#F5F8FB] border-gray-200 text-gray-900"
                    )}
                  >
                    {/* Subarea Title */}
                    <h4 className="font-medium text-sm mb-3 line-clamp-2 text-center">
                      {subarea.title}
                    </h4>

                    {/* Criteria Circles */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {subarea.criteria.map((criterion) => (
                        <div
                          key={criterion.id}
                          className={cn(
                            "w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm",
                            getStatusColor(criterion.status),
                          )}
                        >
                          {criterion.number}
                        </div>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            );
          });
        })()}
      </div>
    </div>
  );
}
