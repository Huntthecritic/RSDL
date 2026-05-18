'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Briefcase, Users, Inbox, TrendingUp, Plus } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { StatsCard } from '@/components/dashboard/stats-card';
import { Button } from '@/components/ui/button';

// Mock data
const statsData = [
  { label: 'Active Projects', value: '12', change: 8, changeType: 'increase', icon: Briefcase },
  { label: 'Total Clients', value: '8', change: 2, changeType: 'increase', icon: Users },
  { label: 'Open Leads', value: '24', change: -5, changeType: 'decrease', icon: Inbox },
  { label: 'Revenue This Month', value: '$42,500', change: 12, changeType: 'increase', icon: TrendingUp },
];

const leadsSourceData = [
  { name: 'Web Form', value: 8, fill: '#AE14D9' },
  { name: 'WhatsApp', value: 5, fill: '#7216F2' },
  { name: 'Calendly', value: 4, fill: '#513DD9' },
  { name: 'Manual', value: 7, fill: '#B8B8D1' },
];

const projectPipelineData = [
  { phase: 'Discovery', projects: 2 },
  { phase: 'Requirements', projects: 3 },
  { phase: 'Design', projects: 4 },
  { phase: 'Development', projects: 2 },
  { phase: 'Testing', projects: 1 },
];

const recentActivityData = [
  {
    id: 1,
    type: 'lead',
    title: 'New lead from contact form',
    description: 'John K. interested in E-commerce solutions',
    time: '2 hours ago',
    link: '/dashboard/leads',
  },
  {
    id: 2,
    type: 'project',
    title: 'Project moved to Design phase',
    description: 'Acme E-Commerce project progressing',
    time: '5 hours ago',
    link: '/dashboard/projects',
  },
  {
    id: 3,
    type: 'file',
    title: 'Client uploaded a file',
    description: 'Jane uploaded design_v3.zip',
    time: '1 day ago',
    link: '/dashboard/projects',
  },
  {
    id: 4,
    type: 'invoice',
    title: 'Invoice paid',
    description: 'INV-001 from Tech Startup Inc.',
    time: '2 days ago',
    link: '/dashboard/invoices',
  },
];

export default function DashboardHome() {
  return (
    <div className="w-full">
      {/* Header */}
      <ContentHeader
        title="Dashboard"
        subtitle="Welcome back! Here's your agency overview."
        action={
          <div className="flex gap-2">
            <Link href="/dashboard/projects">
              <Button>
                <Plus size={16} className="mr-2" />
                New Project
              </Button>
            </Link>
            <Link href="/dashboard/leads">
              <Button variant="outline">
                <Plus size={16} className="mr-2" />
                Capture Lead
              </Button>
            </Link>
          </div>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statsData.map((stat) => (
          <StatsCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Leads by Source */}
        <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
          <h3 className="text-lg font-semibold text-foreground mb-4">Leads by Source</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadsSourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {leadsSourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Project Pipeline */}
        <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
          <h3 className="text-lg font-semibold text-foreground mb-4">Project Pipeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={projectPipelineData}
              layout="horizontal"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="phase" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="projects" fill="#AE14D9" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
          <Link href="#" className="text-sm text-[#AE14D9] hover:text-[#7216F2] font-medium">
            View All
          </Link>
        </div>

        <div className="space-y-3">
          {recentActivityData.map((activity) => (
            <Link
              key={activity.id}
              href={activity.link}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-[#AE14D9] mt-2 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
