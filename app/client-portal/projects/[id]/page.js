'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { PhaseStepper } from '@/components/dashboard/phase-stepper';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockProject = {
  id: 1,
  name: 'E-Commerce Platform Redesign',
  currentPhaseIndex: 2,
  phases: [
    { id: 1, name: 'Discovery', status: 'completed', approved: true },
    { id: 2, name: 'Requirements', status: 'completed', approved: true },
    { id: 3, name: 'Design', status: 'in-progress', approved: false },
    { id: 4, name: 'Development', status: 'pending', approved: false },
    { id: 5, name: 'Testing', status: 'pending', approved: false },
    { id: 6, name: 'Deployment', status: 'pending', approved: false },
    { id: 7, name: 'Maintenance', status: 'pending', approved: false },
  ],
  currentPhaseDetails: {
    name: 'Design',
    description: 'UI/UX Design and prototyping phase',
    dates: 'May 1-20',
    deliverables: ['Wireframes', 'Design System', 'Interactive Prototypes'],
    approvalStatus: 'awaiting',
  },
  files: [
    { id: 1, name: 'Wireframes_v2.figma', size: '12.4 MB', date: '2024-05-10', category: 'Design' },
    { id: 2, name: 'Design System.pdf', size: '3.2 MB', date: '2024-05-08', category: 'Design' },
    { id: 3, name: 'Prototypes.mp4', size: '245 MB', date: '2024-05-08', category: 'Video' },
    { id: 4, name: 'Brand Guidelines.pdf', size: '2.1 MB', date: '2024-04-20', category: 'Documentation' },
  ],
  messages: [
    { id: 1, author: 'Jane Doe', role: 'Designer', message: 'Design phase is progressing well. Wireframes are ready for your review.', timestamp: '2024-05-10 14:30' },
    { id: 2, author: 'You', role: 'You', message: 'Looks great! Proceed with design system.', timestamp: '2024-05-10 15:45' },
    { id: 3, author: 'Jane Doe', role: 'Designer', message: 'Starting on the interactive prototypes now.', timestamp: '2024-05-12 10:20' },
  ],
};

export default function ClientProjectDetailPage({ params }) {
  const [project, setProject] = useState(mockProject);
  const [newMessage, setNewMessage] = useState('');
  const currentPhase = project.phases[project.currentPhaseIndex];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Message sent:', newMessage);
      setNewMessage('');
    }
  };

  const handleApprovePhase = () => {
    // Mark current phase as approved
    const updatedPhases = [...project.phases];
    updatedPhases[project.currentPhaseIndex].approved = true;
    setProject({ ...project, phases: updatedPhases });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <Link href="/client-portal/projects" className="flex items-center gap-2 text-[#AE14D9] hover:text-[#7216F2] mb-4 font-medium">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-2">{project.name}</h1>
      </div>

      {/* Phase Stepper */}
      <PhaseStepper phases={project.phases} currentPhaseIndex={project.currentPhaseIndex} />

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Current Phase */}
            <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <h3 className="text-lg font-semibold text-foreground mb-3">{project.currentPhaseDetails.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.currentPhaseDetails.description}</p>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                  <p className="text-sm font-medium text-foreground">{project.currentPhaseDetails.dates}</p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">Deliverables</p>
                  <ul className="space-y-1">
                    {project.currentPhaseDetails.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 size={16} className="text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.currentPhaseDetails.approvalStatus === 'awaiting' ? (
                <Button onClick={handleApprovePhase} className="w-full">
                  <CheckCircle2 size={16} className="mr-2" />
                  Approve This Phase
                </Button>
              ) : (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900">
                  <p className="text-xs font-semibold text-green-700 dark:text-green-300">✓ Phase Approved</p>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
                <p className="text-xs text-muted-foreground mb-2">Status</p>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-0">
                  In Progress
                </Badge>
              </div>

              <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
                <p className="text-xs text-muted-foreground mb-2">Files Available</p>
                <p className="text-2xl font-bold text-foreground">{project.files.length}</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Files Tab */}
        <TabsContent value="files" className="space-y-4 mt-6">
          <div className="space-y-2">
            {project.files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between bg-white dark:bg-[#21213D] rounded-xl p-4 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.category} • {file.size} • {file.date}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download size={16} />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Messages Tab */}
        <TabsContent value="messages" className="space-y-4 mt-6">
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            {/* Messages */}
            <div className="space-y-4 mb-6 h-96 overflow-y-auto">
              {project.messages.map((msg) => (
                <div key={msg.id}>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-foreground">{msg.author}</p>
                    <p className="text-xs text-muted-foreground">{msg.timestamp}</p>
                  </div>
                  <p className="text-sm text-foreground bg-muted/30 dark:bg-white/5 p-3 rounded-lg">
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="space-y-2 pt-4 border-t border-[#F2F2F2] dark:border-[#2a2a4a]">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="w-full px-3 py-2 rounded-lg border border-[#F2F2F2] dark:border-[#2a2a4a] bg-muted/30 dark:bg-white/5 text-foreground placeholder-muted-foreground text-sm"
              />
              <Button onClick={handleSendMessage} className="w-full">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-4 mt-6">
          <div className="space-y-3">
            {project.phases.map((phase, idx) => (
              <div
                key={phase.id}
                className="flex items-start gap-4 p-4 bg-white dark:bg-[#21213D] rounded-xl shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-xs ${
                  phase.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : idx === project.currentPhaseIndex
                      ? 'bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white'
                      : 'bg-muted text-muted-foreground'
                }`}>
                  {phase.status === 'completed' ? '✓' : idx + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{phase.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{phase.status === 'in-progress' ? 'In Progress' : phase.status}</p>
                </div>
                {phase.approved && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-0">
                    Approved
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
