'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Edit2, Trash2, FileText, Download } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const mockClient = {
  id: 1,
  company: 'Tech Startup Inc.',
  contact: 'John Smith',
  email: 'john@techstartup.com',
  phone: '+1 (555) 123-4567',
  website: 'https://techstartup.com',
  address: '123 Tech Avenue, San Francisco, CA 94105',
  status: 'active',
  joinDate: '2024-01-15',
  notes: 'Prefer weekly check-ins. High-priority account.',
  projects: [
    { id: 1, name: 'E-commerce Platform Redesign', status: 'in-progress', progress: 65 },
    { id: 2, name: 'Mobile App Development', status: 'in-progress', progress: 45 },
    { id: 3, name: 'API Integration', status: 'completed', progress: 100 },
  ],
  files: [
    { id: 1, name: 'Brand Guidelines.pdf', size: '2.4 MB', date: '2024-05-10' },
    { id: 2, name: 'Requirements Document.docx', size: '1.2 MB', date: '2024-04-25' },
    { id: 3, name: 'Design Mockups.zip', size: '45 MB', date: '2024-04-20' },
  ],
  invoices: [
    { id: 'INV-001', amount: '$15,000', status: 'paid', date: '2024-04-30' },
    { id: 'INV-002', amount: '$12,500', status: 'pending', date: '2024-05-15' },
  ],
  activity: [
    { id: 1, action: 'Project moved to Development phase', date: '2024-05-16', user: 'Alex Johnson' },
    { id: 2, action: 'File uploaded: Design mockups', date: '2024-05-10', user: 'Jane Doe' },
    { id: 3, action: 'Invoice #002 created', date: '2024-05-15', user: 'Mike Chen' },
  ],
};

export default function ClientDetailPage({ params }) {
  const [client] = useState(mockClient);

  const statusBadgeVariants = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
  };

  const projectStatusVariants = {
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'on-hold': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  };

  const invoiceStatusVariants = {
    paid: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    pending: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    overdue: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };

  return (
    <div className="w-full">
      {/* Header with Back Button */}
      <div className="mb-8">
        <Link href="/dashboard/clients" className="flex items-center gap-2 text-[#AE14D9] hover:text-[#7216F2] mb-4 font-medium">
          <ArrowLeft size={16} />
          Back to Clients
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{client.company}</h1>
            <p className="text-muted-foreground">{client.contact} • {client.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Edit2 size={16} className="mr-2" />
              Edit
            </Button>
            <Button variant="outline" className="text-destructive">
              <Trash2 size={16} className="mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-[#21213D] rounded-xl p-4 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
          <p className="text-xs text-muted-foreground mb-1">Status</p>
          <Badge className={`${statusBadgeVariants[client.status]} border-0`}>
            {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
          </Badge>
        </div>
        <div className="bg-white dark:bg-[#21213D] rounded-xl p-4 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
          <p className="text-xs text-muted-foreground mb-1">Active Projects</p>
          <p className="text-2xl font-bold text-foreground">{client.projects.filter(p => p.status === 'in-progress').length}</p>
        </div>
        <div className="bg-white dark:bg-[#21213D] rounded-xl p-4 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
          <p className="text-xs text-muted-foreground mb-1">Total Projects</p>
          <p className="text-2xl font-bold text-foreground">{client.projects.length}</p>
        </div>
        <div className="bg-white dark:bg-[#21213D] rounded-xl p-4 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
          <p className="text-xs text-muted-foreground mb-1">Member Since</p>
          <p className="text-sm font-medium text-foreground">{client.joinDate}</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <a href={`mailto:${client.email}`} className="text-sm text-[#AE14D9] hover:text-[#7216F2]">{client.email}</a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <a href={`tel:${client.phone}`} className="text-sm font-medium text-foreground">{client.phone}</a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Website</p>
                  <a href={client.website} target="_blank" rel="noopener noreferrer" className="text-sm text-[#AE14D9] hover:text-[#7216F2]">{client.website}</a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Address</p>
                  <p className="text-sm text-foreground">{client.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <h3 className="text-lg font-semibold text-foreground mb-4">Internal Notes</h3>
              <p className="text-sm text-foreground leading-relaxed">{client.notes}</p>
            </div>
          </div>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4 mt-6">
          {client.projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{project.name}</h4>
                  <Badge className={`mt-2 ${projectStatusVariants[project.status]} border-0`}>
                    {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Badge>
                </div>
                <Link href={`/dashboard/projects/${project.id}`}>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#AE14D9] to-[#7216F2] h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{project.progress}% Complete</p>
            </div>
          ))}
        </TabsContent>

        {/* Files Tab */}
        <TabsContent value="files" className="space-y-4 mt-6">
          {client.files.map((file) => (
            <div key={file.id} className="flex items-center justify-between bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <div className="flex items-center gap-4 flex-1">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FileText className="text-blue-600 dark:text-blue-300" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size} • {file.date}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Download size={16} />
              </Button>
            </div>
          ))}
        </TabsContent>

        {/* Invoices Tab */}
        <TabsContent value="invoices" className="space-y-4 mt-6">
          {client.invoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <div className="flex-1">
                <p className="font-semibold text-foreground">{invoice.id}</p>
                <p className="text-sm text-muted-foreground">{invoice.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">{invoice.amount}</p>
                <Badge className={`mt-1 ${invoiceStatusVariants[invoice.status]} border-0`}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </Badge>
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-4 mt-6">
          {client.activity.map((item) => (
            <div key={item.id} className="border-l-2 border-[#AE14D9] pl-4 py-2">
              <p className="text-sm font-semibold text-foreground">{item.action}</p>
              <p className="text-xs text-muted-foreground mt-1">By {item.user} • {item.date}</p>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
