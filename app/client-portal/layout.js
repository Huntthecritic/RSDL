'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { AuthProvider, useAuth } from '@/app/dashboard/context/auth-context';
import { AppDataProvider } from '@/app/context/app-data-context';

function ClientPortalLayoutContent({ children }) {
  const { darkMode } = useAuth();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex bg-white dark:bg-[#16162A] min-h-screen">
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

export default function ClientPortalLayout({ children }) {
  return (
    <AppDataProvider>
      <AuthProvider>
        <ClientPortalLayoutContent>
          {children}
        </ClientPortalLayoutContent>
      </AuthProvider>
    </AppDataProvider>
  );
}
