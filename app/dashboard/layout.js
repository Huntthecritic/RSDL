'use client';

import { AuthProvider } from './context/auth-context';
import { Sidebar } from '@/components/dashboard/sidebar';
import { useAuth } from './context/auth-context';
import { AppDataProvider } from '@/app/context/app-data-context';

function DashboardLayoutContent({ children }) {
  const { darkMode } = useAuth();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex bg-[#F8F9FC] dark:bg-[#16162A] min-h-screen">
        <Sidebar />
        <main className="flex-1 pt-16 md:pt-0">
          <div className="p-6 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <AppDataProvider>
      <AuthProvider>
        <DashboardLayoutContent>
          {children}
        </DashboardLayoutContent>
      </AuthProvider>
    </AppDataProvider>
  );
}
