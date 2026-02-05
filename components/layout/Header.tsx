'use client';

import { Search, Bell, ChevronDown, Menu, User, Settings, LogOut } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/common/ThemeToggle';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: '1', title: 'New evidence uploaded', description: 'Ahmed Al-Ali uploaded evidence for Strategy Perspective', time: '5 min ago', unread: true },
    { id: '2', title: 'Comment added', description: 'Sarah Al-Khaled commented on Digital Transformation', time: '1 hour ago', unread: true },
    { id: '3', title: 'Review completed', description: 'Mohammad Al-Mansour approved IT Perspective document', time: '3 hours ago', unread: true },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent hydration mismatch by using light theme during SSR
  const currentTheme = mounted ? theme : 'light';

  return (
    <header className={cn(
      "h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30 transition-colors shadow-sm",
      currentTheme === 'dark'
        ? "dark:bg-card"
        : "bg-white"
    )}>
      {/* Left Section - Mobile Menu & Search */}
      <div className="flex items-center gap-3 flex-1">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5",
              currentTheme === 'dark' ? "text-gray-400" : "text-gray-500"
            )} />
            <input
              type="text"
              placeholder="Search"
              className={cn(
                "w-full pl-9 md:pl-10 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                currentTheme === 'dark'
                  ? "bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-400"
                  : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500"
              )}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notification */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className={cn(
              "relative p-2 rounded-lg transition-colors",
              currentTheme === 'dark' ? "hover:bg-gray-700" : "hover:bg-gray-100"
            )}
          >
            <Bell className={cn(
              "w-5 h-5 md:w-6 md:h-6",
              currentTheme === 'dark' ? "text-gray-300" : "text-gray-700"
            )} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-medium">
              {notifications.length}
            </span>
          </button>

          {notifOpen && (
            <div className={cn(
              "absolute right-0 top-full mt-2 w-80 rounded-lg shadow-lg border z-50",
              currentTheme === 'dark'
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            )}>
              <div className={cn(
                "flex items-center justify-between px-4 py-3 border-b",
                currentTheme === 'dark' ? "border-gray-700" : "border-gray-200"
              )}>
                <h3 className={cn(
                  "text-sm font-semibold",
                  currentTheme === 'dark' ? "text-gray-200" : "text-gray-900"
                )}>
                  Notifications
                </h3>
                <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-medium">
                  {notifications.length} new
                </span>
              </div>

              <div className="max-h-72 overflow-y-auto">
                {notifications.map((notif) => (
                  <button
                    key={notif.id}
                    onClick={() => setNotifOpen(false)}
                    className={cn(
                      "w-full text-left px-4 py-3 transition-colors border-b last:border-b-0",
                      currentTheme === 'dark'
                        ? "hover:bg-gray-700 border-gray-700"
                        : "hover:bg-gray-50 border-gray-100",
                      notif.unread && (currentTheme === 'dark' ? "bg-gray-750" : "bg-blue-50/50")
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {notif.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                      )}
                      <div className={cn("flex-1 min-w-0", !notif.unread && "ml-5")}>
                        <p className={cn(
                          "text-sm font-medium truncate",
                          currentTheme === 'dark' ? "text-gray-200" : "text-gray-900"
                        )}>
                          {notif.title}
                        </p>
                        <p className={cn(
                          "text-xs mt-0.5 line-clamp-2",
                          currentTheme === 'dark' ? "text-gray-400" : "text-gray-500"
                        )}>
                          {notif.description}
                        </p>
                        <p className={cn(
                          "text-xs mt-1",
                          currentTheme === 'dark' ? "text-gray-500" : "text-gray-400"
                        )}>
                          {notif.time}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className={cn(
                "border-t px-4 py-2.5",
                currentTheme === 'dark' ? "border-gray-700" : "border-gray-200"
              )}>
                <button
                  onClick={() => setNotifOpen(false)}
                  className="w-full text-center text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                >
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={cn(
              "flex items-center gap-2 md:gap-3 cursor-pointer rounded-lg p-1 transition-colors",
              currentTheme === 'dark' ? "hover:bg-gray-700" : "hover:bg-gray-100"
            )}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden shrink-0">
              <Image
                src="/mohamed.svg"
                alt="Mohamed"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className={cn(
              "hidden sm:block text-sm font-medium",
              currentTheme === 'dark' ? "text-gray-200" : "text-gray-800"
            )}>
              Mohamed
            </span>
            <ChevronDown className={cn(
              "hidden sm:block w-4 h-4 transition-transform",
              dropdownOpen && "rotate-180",
              currentTheme === 'dark' ? "text-gray-400" : "text-gray-700"
            )} />
          </button>

          {dropdownOpen && (
            <div className={cn(
              "absolute right-0 top-full mt-2 w-48 rounded-lg shadow-lg border py-1 z-50",
              currentTheme === 'dark'
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            )}>
              <button
                onClick={() => setDropdownOpen(false)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                  currentTheme === 'dark'
                    ? "text-gray-200 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <User className="w-4 h-4" />
                Profile
              </button>
              <button
                onClick={() => setDropdownOpen(false)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                  currentTheme === 'dark'
                    ? "text-gray-200 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <div className={cn(
                "my-1 border-t",
                currentTheme === 'dark' ? "border-gray-700" : "border-gray-200"
              )} />
              <button
                onClick={() => setDropdownOpen(false)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                  currentTheme === 'dark'
                    ? "text-red-400 hover:bg-gray-700"
                    : "text-red-600 hover:bg-gray-100"
                )}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
