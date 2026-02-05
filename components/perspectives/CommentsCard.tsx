'use client';

import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Comment } from '@/types/details';

interface CommentsCardProps {
  comments: Comment[];
  currentTheme: string | undefined;
}

export default function CommentsCard({ comments, currentTheme }: CommentsCardProps) {
  return (
    <div className={cn(
      "rounded-lg shadow-sm p-6 lg:col-span-2",
      currentTheme === 'dark' ? 'bg-card' : 'bg-white'
    )}>
      <h3 className={cn(
        "text-lg font-bold mb-4",
        currentTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
      )}>
        Comments
      </h3>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={cn(
              "rounded-lg border p-4",
              currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
                  currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                )}>
                  <span className={cn(
                    "text-xs font-semibold",
                    currentTheme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                  )}>
                    {comment.authorInitial}
                  </span>
                </div>
                <span className={cn(
                  "text-sm font-semibold",
                  currentTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                )}>
                  {comment.author}
                </span>
              </div>
              <span className={cn(
                "text-sm",
                currentTheme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              )}>
                {comment.date}
              </span>
            </div>
            <p className={cn(
              "text-sm",
              currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}>
              {comment.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <textarea
          placeholder="Add a comment..."
          rows={4}
          className={cn(
            "w-full px-4 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            currentTheme === 'dark'
              ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500'
              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
          )}
        />
        <button className={cn(
          "mt-3 px-5 py-2.5 text-sm font-medium rounded-lg inline-flex items-center gap-2",
          currentTheme === 'dark'
            ? 'bg-gray-700 hover:bg-gray-600 text-white'
            : 'bg-[#1e293b] hover:bg-[#334155] text-white'
        )}>
          <Send className="w-4 h-4" />
          Post Comment
        </button>
      </div>
    </div>
  );
}
