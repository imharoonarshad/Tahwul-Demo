'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Layers,
  CheckSquare,
  FileText,
  BarChart3,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    id: 'perspectives',
    label: 'Perspectives',
    href: '/perspectives',
    icon: Layers,
  },
  {
    id: 'tasks',
    label: 'Tasks',
    href: '/tasks',
    icon: CheckSquare,
  },
  {
    id: 'documents',
    label: 'Documents',
    href: '/documents',
    icon: FileText,
  },
  {
    id: 'reports',
    label: 'Reports',
    href: '/reports',
    icon: BarChart3,
  },
  {
    id: 'users',
    label: 'Users & Roles',
    href: '/users',
    icon: Users,
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Sidebar({
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen bg-[#1D3557] text-white flex flex-col transition-all duration-300 z-50 border-r border-[#1D3557]',
          // Mobile - drawer style
          'w-64 -translate-x-full md:translate-x-0',
          isMobileOpen && 'translate-x-0',
          // Desktop - always visible with collapse
          'md:flex',
          isCollapsed ? 'md:w-20' : 'md:w-64'
        )}
      >
        {/* Logo Section */}
        <div
          className={cn(
            'h-20 flex items-center relative',
            isCollapsed ? 'md:justify-center md:px-4' : 'px-6'
          )}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <Image
              src="/Tahwul_sidebar_logo.svg"
              alt="Tahwul"
              width={isCollapsed ? 32 : 140}
              height={32}
              className={cn(
                'transition-all duration-300',
                isCollapsed && 'md:w-8'
              )}
              priority
            />
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={onMobileClose}
            className="absolute right-4 p-2 rounded-lg hover:bg-white/10 transition-colors md:hidden"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Desktop Toggle Button - Positioned on right edge */}
          <button
            onClick={onToggle}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors border border-gray-300 z-10"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-700" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === '/'
                ? pathname === '/' || pathname.startsWith('/perspectives/')
                : pathname === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => {
                  if (isMobileOpen) {
                    onMobileClose();
                  }
                }}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group',
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white',
                  isCollapsed && 'md:justify-center'
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span
                  className={cn(
                    'text-sm font-medium transition-opacity duration-300',
                    isCollapsed && 'md:hidden'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
