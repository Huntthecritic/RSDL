'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Briefcase, Calendar, Download } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { StatsCard } from '@/components/dashboard/stats-card';

const mockClientData = {
  name: 'John Smith',
  company: 'Tech Startup Inc.',
  activeProjects: 2,
  newFiles: 5,
  nextDeadline: '2024-05-25',
  recentFiles: [
    { id: 1, name: 'Design System v2.pdf', size: '3.2 MB', date: '2024-05-10', project: 'E-Commerce Redesign' },
    { id: 2, name: 'Wireframes Final.figma', size: '12.4 MB', date: '2024-05-08', project: 'E-Commerce Redesign' },
    { id: 3, name: 'Requirements Spec.docx', size: '1.5 MB', date: '2024-05-05', project: 'Mobile App' },
  ],
  projects: [
    { id: 1, name: 'E-Commerce Platform Redesign', phase: 'Design', progress: 65 },
    { id: 2, name: 'Mobile App Development', phase: 'Development', progress: 45 },
  ],
};

export default function ClientPortalHome() {
  return (
    <div className="w-full">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {mockClientData.name}!</h1>
        <p className="text-muted-foreground">Here's your project overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatsCard
          label="Active Projects"
          value={mockClientData.activeProjects}
          icon={Briefcase}
        />
        <StatsCard
          label="New Files"
          value={mockClientData.newFiles}
          icon={FileText}
        />
        <StatsCard
          label="Next Deadline"
          value={mockClientData.nextDeadline}
          icon={Calendar}
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Files */}
        <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Files</h3>
          <div className="space-y-3">
            {mockClientData.recentFiles.map((file) => (
              <Link
                key={file.id}
                href="#"
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.project} • {file.date}</p>
                </div>
                <button className="p-2 hover:bg-muted rounded">
                  <Download size={16} className="text-muted-foreground hover:text-[#AE14D9]" />
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
          <h3 className="text-lg font-semibold text-foreground mb-4">Active Projects</h3>
          <div className="space-y-4">
            {mockClientData.projects.map((project) => (
              <Link
                key={project.id}
                href={`/client-portal/projects/${project.id}`}
                className="block p-4 rounded-lg border border-[#F2F2F2] dark:border-[#2a2a4a] hover:border-[#AE14D9] dark:hover:border-[#AE14D9] transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{project.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{project.phase}</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#AE14D9] to-[#7216F2] h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{project.progress}% Complete</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
