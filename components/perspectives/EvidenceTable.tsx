'use client';

import { ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useMemo } from 'react';
import type { EvidenceDocument } from '@/types/details';

interface EvidenceTableProps {
  documents: EvidenceDocument[];
  currentTheme: string | undefined;
}

const columnKeyMap: Record<string, keyof EvidenceDocument> = {
  'Document Number': 'documentNumber',
  'Document Name': 'documentName',
  'Document Lead': 'documentLead',
  'Document Preparer': 'documentPreparer',
  'Date': 'date',
  'Due Date': 'dueDate',
  'Status': 'status',
};

const headers = ['Document Number', 'Document Name', 'Document Lead', 'Document Preparer', 'Date', 'Due Date', 'Status'];

export default function EvidenceTable({ documents, currentTheme }: EvidenceTableProps) {
  const [sortColumn, setSortColumn] = useState<keyof EvidenceDocument | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (header: string) => {
    const key = columnKeyMap[header];
    if (sortColumn === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  const sortedDocuments = useMemo(() => {
    if (!sortColumn) return documents;
    return [...documents].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      const cmp = aVal.localeCompare(bVal);
      return sortDirection === 'asc' ? cmp : -cmp;
    });
  }, [documents, sortColumn, sortDirection]);

  return (
    <div className={cn(
      "rounded-lg shadow-sm p-6",
      currentTheme === 'dark' ? 'bg-card' : 'bg-white'
    )}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={cn(
              currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            )}>
              {headers.map((header, idx) => (
                <th
                  key={header}
                  className={cn(
                    "text-left py-4 px-5 text-xs font-semibold whitespace-nowrap",
                    currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500',
                    idx === 0 && 'rounded-l-lg',
                    idx === headers.length - 1 && 'rounded-r-lg'
                  )}
                >
                  <button
                    onClick={() => handleSort(header)}
                    className="inline-flex items-center gap-1.5 hover:opacity-80"
                  >
                    {header}
                    <ChevronsUpDown className={cn(
                      "w-3.5 h-3.5",
                      sortColumn === columnKeyMap[header]
                        ? currentTheme === 'dark' ? 'text-white' : 'text-gray-900'
                        : ''
                    )} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedDocuments.map((doc) => (
              <tr
                key={doc.id}
                className={cn(
                  "border-b last:border-b-0",
                  currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-100'
                )}
              >
                <td className={cn(
                  "py-5 px-5 text-sm",
                  currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                )}>{doc.documentNumber}</td>
                <td className={cn(
                  "py-5 px-5 text-sm",
                  currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                )}>{doc.documentName}</td>
                <td className={cn(
                  "py-5 px-5 text-sm",
                  currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                )}>{doc.documentLead}</td>
                <td className={cn(
                  "py-5 px-5 text-sm",
                  currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                )}>{doc.documentPreparer}</td>
                <td className={cn(
                  "py-5 px-5 text-sm whitespace-nowrap",
                  currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                )}>{doc.date}</td>
                <td className={cn(
                  "py-5 px-5 text-sm whitespace-nowrap",
                  currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                )}>{doc.dueDate}</td>
                <td className="py-5 px-5 text-sm">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap",
                    doc.status === 'Approved'
                      ? currentTheme === 'dark'
                        ? 'bg-green-900/50 text-green-300'
                        : 'bg-green-50 text-green-600'
                      : doc.status === 'Pending Review'
                        ? currentTheme === 'dark'
                          ? 'bg-yellow-900/50 text-yellow-300'
                          : 'bg-yellow-50 text-yellow-600'
                        : currentTheme === 'dark'
                          ? 'bg-red-900/50 text-red-300'
                          : 'bg-red-50 text-red-600'
                  )}>
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
