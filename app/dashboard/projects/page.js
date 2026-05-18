'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Eye, Edit2, Trash2, Calendar } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockProjects = [
  {
    id: 1,
    name: 'E-Commerce Platform Redesign',
    client: 'Tech Startup Inc.',
    phase: 'Design',
    phaseIndex: 2,
    progress: 65,
    daysRemaining: 12,
    status: 'active',
    startDate: '2024-04-01',
    endDate: '2024-06-15',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    client: 'Creative Agency Pro',
    phase: 'Development',
    phaseIndex: 3,
    progress: 45,
    daysRemaining: 28,
    status: 'active',
    startDate: '2024-03-15',
    endDate: '2024-07-20',
  },
  {
    id: 3,
    name: 'API Integration Service',
    client: 'E-Commerce Solutions',
    phase: 'Maintenance',
    phaseIndex: 6,
    progress: 100,
    daysRemaining: 0,
    status: 'completed',
    startDate: '2024-01-10',
    endDate: '2024-04-30',
  },
  {
    id: 4,
    name: 'Website Redesign',
    client: 'Tech Startup Inc.',
    phase: 'Testing',
    phaseIndex: 4,
    progress: 80,
    daysRemaining: 5,
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2024-05-25',
  },
];

const phases = [
  'Discovery',
  'Requirements',
  'Design',
  'Development',
  'Testing',
  'Deployment',
  'Maintenance',
];

const statusBadgeVariants = {
  active: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'on-hold': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
};

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredProjects = mockProjects.filter((project) => {
    return filterStatus === 'all' || project.status === filterStatus;
  });

  return (
    <div className="w-full">
      <ContentHeader
        title="Projects"
        subtitle="Track and manage all projects"
        action={
          <Link href="/dashboard/projects/new">
            <Button>
              <Plus size={16} className="mr-2" />
              New Project
            </Button>
          </Link>
        }
      />

      {/* Filters */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {['all', 'active', 'completed', 'on-hold'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filterStatus === status
                ? 'bg-[#AE14D9] text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] hover:shadow-md transition-shadow group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Link href={`/dashboard/projects/${project.id}`}>
                  <h3 className="font-semibold text-foreground group-hover:text-[#AE14D9] transition-colors mb-1">
                    {project.name}
                  </h3>
                </Link>
                <p className="text-xs text-muted-foreground">{project.client}</p>
              </div>
              <Badge className={`${statusBadgeVariants[project.status]} border-0 flex-shrink-0`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </Badge>
            </div>

            {/* Phase Badge */}
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#AE14D9]/10 to-[#7216F2]/10 rounded-full mb-4">
              <p className="text-xs font-semibold text-[#AE14D9]">{project.phase}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
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

            {/* Timeline */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Calendar size={14} />
              <span>{project.daysRemaining} days remaining</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4 border-t border-[#F2F2F2] dark:border-[#2a2a4a]">
              <Link href={`/dashboard/projects/${project.id}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  <Eye size={16} />
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="flex-1">
                <Edit2 size={16} />
              </Button>
              <Button variant="outline" size="sm" className="flex-1 text-destructive">
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found</p>
        </div>
      )}
    </div>
  );
}
