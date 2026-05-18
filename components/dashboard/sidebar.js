'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  MessageSquare,
  FileText,
  Settings,
  ChevronLeft,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  FileStack,
} from 'lucide-react';
import { useAuth } from '@/app/dashboard/context/auth-context';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user, darkMode, toggleDarkMode, logout } = useAuth();

  const isAdmin = user?.role === 'admin' || user?.role === 'employee';
  const isClient = user?.role === 'client';

  const adminLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/leads', label: 'Leads', icon: Users },
    { href: '/dashboard/clients', label: 'Clients', icon: Briefcase },
    { href: '/dashboard/projects', label: 'Projects', icon: FileStack },
    { href: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
    { href: '/dashboard/invoices', label: 'Invoices', icon: FileText },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  const clientLinks = [
    { href: '/client-portal', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/client-portal/projects', label: 'My Projects', icon: FileStack },
    { href: '/client-portal/messages', label: 'Messages', icon: MessageSquare },
    { href: '/client-portal/invoices', label: 'Invoices', icon: FileText },
    { href: '/client-portal/settings', label: 'Settings', icon: Settings },
  ];

  const links = isClient ? clientLinks : adminLinks;

  const isActive = (href) => {
    if (href === '/dashboard' || href === '/client-portal') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const handleLogout = () => {
    logout();
    // Navigation would happen here in a real app
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-background border-b border-border flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold text-foreground">RSDL</div>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 hover:bg-muted rounded-md"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-[#1A1A2E] to-[#0f0f1a] text-white transition-all duration-300 z-40 md:z-30 flex flex-col
          ${isCollapsed ? 'w-[72px]' : 'w-[260px]'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:translate-x-0
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between px-4 py-6 border-b border-[#513DD9]">
          <div className="flex items-center gap-2">
            {!isCollapsed && (
              <div className="text-lg font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AE14D9] to-[#7216F2]">
                  RSDL
                </span>
              </div>
            )}
            {isCollapsed && <div className="text-sm font-bold">R</div>}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex items-center justify-center p-1 hover:bg-white/10 rounded"
            title={isCollapsed ? 'Expand' : 'Collapse'}
          >
            <ChevronLeft size={18} className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                  ${
                    active
                      ? 'bg-white/10 border-l-2 border-[#AE14D9] text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }
                `}
                title={isCollapsed ? link.label : ''}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="text-sm font-medium">{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section - Theme & User */}
        <div className="px-3 py-4 space-y-2 border-t border-[#513DD9]">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all w-full"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            {!isCollapsed && (
              <span className="text-sm font-medium">{darkMode ? 'Light' : 'Dark'}</span>
            )}
          </button>

          {/* User Profile */}
          <div className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AE14D9] to-[#7216F2] flex items-center justify-center text-xs font-bold text-white">
              {user?.avatar}
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white truncate">{user?.name}</p>
                <p className="text-xs text-white/50 truncate capitalize">{user?.role}</p>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all w-full"
            title="Sign out"
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="text-sm font-medium">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div className={`hidden md:block transition-all duration-300 ${isCollapsed ? 'w-[72px]' : 'w-[260px]'}`} />
    </>
  );
}
