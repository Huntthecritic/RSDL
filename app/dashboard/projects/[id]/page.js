'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Edit2, Share2, Plus, CheckCircle2, Circle, FileText, Send, Download } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PhaseStepper } from '@/components/dashboard/phase-stepper';
import { Badge } from '@/components/ui/badge';

const mockProject = {
  id: 1,
  name: 'E-Commerce Platform Redesign',
  client: 'Tech Startup Inc.',
  currentPhaseIndex: 2,
  phases: [
    { id: 1, name: 'Discovery', description: 'Research and planning phase', status: 'completed', dates: 'Apr 1-15', deliverables: ['Market Analysis', 'User Research'], approved: true, approvedDate: '2024-04-16' },
    { id: 2, name: 'Requirements', description: 'Define technical requirements', status: 'completed', dates: 'Apr 16-30', deliverables: ['Technical Spec', 'Project Plan'], approved: true, approvedDate: '2024-05-01' },
    { id: 3, name: 'Design', description: 'UI/UX Design phase', status: 'in-progress', dates: 'May 1-20', deliverables: ['Wireframes', 'Design System', 'Prototypes'], approved: false },
    { id: 4, name: 'Development', description: 'Development phase', status: 'pending', dates: 'May 21-Jul 10', deliverables: ['Frontend Code', 'Backend API', 'Database'], approved: false },
    { id: 5, name: 'Testing', description: 'QA and testing phase', status: 'pending', dates: 'Jul 11-25', deliverables: ['Test Report', 'Bug Fixes'], approved: false },
    { id: 6, name: 'Deployment', description: 'Production deployment', status: 'pending', dates: 'Jul 26-Aug 5', deliverables: ['Deployment Guide', 'Production Ready'], approved: false },
    { id: 7, name: 'Maintenance', description: 'Post-launch support', status: 'pending', dates: 'Aug 6+', deliverables: ['Support Plan', 'Monitoring'], approved: false },
  ],
  tasks: [
    { id: 1, title: 'Create wireframes for homepage', assignee: 'Jane Doe', dueDate: '2024-05-10', status: 'in-progress' },
    { id: 2, title: 'Design product detail pages', assignee: 'John Smith', dueDate: '2024-05-12', status: 'todo' },
    { id: 3, title: 'Set up design system tokens', assignee: 'Jane Doe', dueDate: '2024-05-08', status: 'done' },
    { id: 4, title: 'Create interaction prototypes', assignee: 'Alex Johnson', dueDate: '2024-05-15', status: 'todo' },
  ],
  files: [
    { id: 1, name: 'Wireframes_v2.figma', size: '12.4 MB', date: '2024-05-10', type: 'design' },
    { id: 2, name: 'Design System.pdf', size: '3.2 MB', date: '2024-05-08', type: 'document' },
    { id: 3, name: 'User Research.docx', size: '2.1 MB', date: '2024-04-20', type: 'document' },
  ],
  messages: [
    { id: 1, author: 'Jane Doe', role: 'Designer', message: 'Wireframes are ready for review', timestamp: '2024-05-10 14:30', isInternal: false },
    { id: 2, author: 'John Smith', role: 'Client', message: 'Looks great! Proceed with design system.', timestamp: '2024-05-10 15:45', isInternal: false },
    { id: 3, author: 'Alex Johnson', role: 'Manager', message: 'Keep client updated on timeline changes', timestamp: '2024-05-09 10:20', isInternal: true },
  ],
};

const taskStatusVariants = {
  'todo': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
  'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'done': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
};

export default function ProjectDetailPage({ params }) {
  const [project, setProject] = useState(mockProject);
  const [newMessage, setNewMessage] = useState('');
  const [messageFilter, setMessageFilter] = useState('all');
  const currentPhase = project.phases[project.currentPhaseIndex];

  const filteredMessages = messageFilter === 'all'
    ? project.messages
    : messageFilter === 'internal'
      ? project.messages.filter(m => m.isInternal)
      : project.messages.filter(m => !m.isInternal);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: project.messages.length + 1,
        author: 'You',
        role: 'Manager',
        message: newMessage,
        timestamp: new Date().toLocaleString(),
        isInternal: messageFilter === 'internal',
      };
      setProject({
        ...project,
        messages: [...project.messages, message],
      });
      setNewMessage('');
    }
  };

  const handleToggleTaskStatus = (taskId) => {
    const taskIndex = project.tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
      const statuses = ['todo', 'in-progress', 'done'];
      const currentStatus = project.tasks[taskIndex].status;
      const currentIndex = statuses.indexOf(currentStatus);
      const newStatus = statuses[(currentIndex + 1) % statuses.length];

      const updatedTasks = [...project.tasks];
      updatedTasks[taskIndex].status = newStatus;
      setProject({ ...project, tasks: updatedTasks });
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard/projects" className="flex items-center gap-2 text-[#AE14D9] hover:text-[#7216F2] mb-4 font-medium">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{project.name}</h1>
            <Link href={`/dashboard/clients/${project.client}`} className="text-muted-foreground hover:text-[#AE14D9]">
              {project.client}
            </Link>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Edit2 size={16} className="mr-2" />
              Edit
            </Button>
            <Button variant="outline">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Phase Stepper */}
      <PhaseStepper phases={project.phases} currentPhaseIndex={project.currentPhaseIndex} />

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Phase Details & Tasks */}
        <div className="lg:col-span-1 space-y-6">
          {/* Current Phase Card */}
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="text-lg font-semibold text-foreground mb-3">{currentPhase.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{currentPhase.description}</p>

            <div className="space-y-3 mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                <p className="text-sm font-medium text-foreground">{currentPhase.dates}</p>
              </div>

              {currentPhase.approved ? (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900">
                  <p className="text-xs font-semibold text-green-700 dark:text-green-300">✓ Approved by client</p>
                  <p className="text-xs text-green-600 dark:text-green-400">{currentPhase.approvedDate}</p>
                </div>
              ) : (
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-900">
                  <p className="text-xs font-semibold text-orange-700 dark:text-orange-300">⏳ Awaiting client approval</p>
                </div>
              )}
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Deliverables</p>
              {currentPhase.deliverables.map((deliverable, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-foreground">{deliverable}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Move to Next Phase Button */}
          {currentPhase.approved && project.currentPhaseIndex < project.phases.length - 1 && (
            <Button className="w-full">
              Move to Next Phase
              <ArrowRight size={16} className="ml-2" />
            </Button>
          )}
        </div>

        {/* Middle Column - Files & Assets */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Files</h3>
              <Button size="sm" variant="outline">
                <Plus size={16} />
              </Button>
            </div>

            <div className="space-y-3">
              {project.files.map((file) => (
                <div
                  key={file.id}
                  className="p-3 bg-muted/30 dark:bg-white/5 rounded-lg hover:bg-muted/50 dark:hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground group-hover:text-[#AE14D9] transition-colors">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{file.size} • {file.date}</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Messages & Activity */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] h-[600px] flex flex-col">
            {/* Header */}
            <div className="mb-4 pb-3 border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
              <h3 className="text-lg font-semibold text-foreground mb-2">Messages</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setMessageFilter('all')}
                  className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                    messageFilter === 'all'
                      ? 'text-[#AE14D9] bg-[#AE14D9]/10'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setMessageFilter('internal')}
                  className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                    messageFilter === 'internal'
                      ? 'text-[#AE14D9] bg-[#AE14D9]/10'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Internal
                </button>
                <button
                  onClick={() => setMessageFilter('client')}
                  className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                    messageFilter === 'client'
                      ? 'text-[#AE14D9] bg-[#AE14D9]/10'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Client
                </button>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-lg ${
                    message.isInternal
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900'
                      : 'bg-muted/30 dark:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-semibold text-foreground">{message.author}</p>
                    <p className="text-xs text-muted-foreground">{message.timestamp}</p>
                  </div>
                  <p className="text-xs text-foreground leading-relaxed">{message.message}</p>
                  {message.isInternal && (
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-semibold">Internal Note</p>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="space-y-2 pt-3 border-t border-[#F2F2F2] dark:border-[#2a2a4a]">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="w-full px-3 py-2 rounded-lg border border-[#F2F2F2] dark:border-[#2a2a4a] bg-muted/30 dark:bg-white/5 text-foreground placeholder-muted-foreground text-sm"
              />
              <Button onClick={handleSendMessage} size="sm" className="w-full">
                <Send size={16} className="mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Section Below */}
      <div className="mt-8 bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Tasks</h3>
          <Button size="sm" variant="outline">
            <Plus size={16} className="mr-2" />
            Add Task
          </Button>
        </div>

        <div className="space-y-2">
          {project.tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 dark:bg-white/5 hover:bg-muted/50 dark:hover:bg-white/10 transition-colors"
            >
              <button
                onClick={() => handleToggleTaskStatus(task.id)}
                className="flex-shrink-0"
              >
                {task.status === 'done' ? (
                  <CheckCircle2 size={20} className="text-green-500" />
                ) : (
                  <Circle size={20} className="text-muted-foreground hover:text-[#AE14D9]" />
                )}
              </button>

              <div className="flex-1">
                <p className={`text-sm font-medium ${task.status === 'done' ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                  {task.title}
                </p>
                <p className="text-xs text-muted-foreground">{task.assignee} • {task.dueDate}</p>
              </div>

              <Badge className={`${taskStatusVariants[task.status]} border-0`}>
                {task.status === 'in-progress' ? 'In Progress' : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
