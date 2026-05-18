'use client';

import React from 'react';
import Link from 'next/link';
import { Eye, Download, CheckCircle2 } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockProjects = [
  {
    id: 1,
    name: 'E-Commerce Platform Redesign',
    description: 'Complete redesign of your e-commerce platform with modern UI/UX',
    phase: 'Design',
    phaseIndex: 2,
    progress: 65,
    startDate: '2024-04-01',
    dueDate: '2024-06-15',
    filesCount: 12,
    status: 'active',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Native mobile app for iOS and Android platforms',
    phase: 'Development',
    phaseIndex: 3,
    progress: 45,
    startDate: '2024-03-15',
    dueDate: '2024-07-20',
    filesCount: 8,
    status: 'active',
  },
  {
    id: 3,
    name: 'API Integration Service',
    description: 'Integration with third-party payment and shipping APIs',
    phase: 'Maintenance',
    phaseIndex: 6,
    progress: 100,
    startDate: '2024-01-10',
    dueDate: '2024-04-30',
    filesCount: 5,
    status: 'completed',
  },
];

const statusBadgeVariants = {
  active: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
};

export default function ClientProjectsPage() {
  return (
    <div className="w-full">
      <ContentHeader
        title="My Projects"
        subtitle="View and manage all your projects"
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] hover:shadow-md transition-shadow group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-[#AE14D9] transition-colors mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-muted-foreground">{project.description}</p>
              </div>
              <Badge className={`${statusBadgeVariants[project.status]} border-0 flex-shrink-0`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </Badge>
            </div>

            {/* Phase Badge */}
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#AE14D9]/10 to-[#7216F2]/10 rounded-full mb-4">
              <p className="text-xs font-semibold text-[#AE14D9]">{project.phase}</p>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-foreground">Progress</p>
                <p className="text-xs text-muted-foreground">{project.progress}%</p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#AE14D9] to-[#7216F2] h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Metadata */}
            <div className="text-xs text-muted-foreground space-y-1 mb-4">
              <p>Due: {project.dueDate}</p>
              <p>{project.filesCount} files available</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-[#F2F2F2] dark:border-[#2a2a4a]">
              <Link href={`/client-portal/projects/${project.id}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  <Eye size={16} />
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="flex-1">
                <Download size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
