'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, MessageSquare, Edit2, Trash2, ArrowRight } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const mockLead = {
  id: 1,
  name: 'John Smith',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  company: 'Tech Startup Inc.',
  service: 'E-commerce Website',
  source: 'Web Form',
  status: 'new',
  assignedTo: 'Alex Johnson',
  date: '2024-05-15',
  message: 'We are looking for a complete e-commerce solution with payment integration and inventory management.',
  notes: [
    { id: 1, author: 'Alex Johnson', text: 'Follow up scheduled for next week', date: '2024-05-16' },
  ],
};

const statusOptions = ['new', 'contacted', 'qualified', 'won', 'lost'];
const employees = ['Alex Johnson', 'Sarah Williams', 'Mike Chen', 'Jane Brown'];

export default function LeadDetailPage({ params }) {
  const [lead, setLead] = useState(mockLead);
  const [newNote, setNewNote] = useState('');

  const handleStatusChange = (newStatus) => {
    setLead({ ...lead, status: newStatus });
  };

  const handleAssignChange = (newAssignee) => {
    setLead({ ...lead, assignedTo: newAssignee });
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note = {
        id: lead.notes.length + 1,
        author: 'You',
        text: newNote,
        date: new Date().toISOString().split('T')[0],
      };
      setLead({
        ...lead,
        notes: [...lead.notes, note],
      });
      setNewNote('');
    }
  };

  const statusBadgeVariants = {
    new: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    contacted: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    qualified: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    won: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    lost: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };

  return (
    <div className="w-full">
      {/* Header with Back Button */}
      <div className="mb-8">
        <Link href="/dashboard/leads" className="flex items-center gap-2 text-[#AE14D9] hover:text-[#7216F2] mb-4 font-medium">
          <ArrowLeft size={16} />
          Back to Leads
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{lead.name}</h1>
            <p className="text-muted-foreground">{lead.company}</p>
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

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Lead Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Contact Card */}
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Mail size={18} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href={`mailto:${lead.email}`} className="text-sm text-[#AE14D9] hover:text-[#7216F2] break-all">
                    {lead.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <a href={`tel:${lead.phone}`} className="text-sm font-medium text-foreground">
                    {lead.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Status & Assignment Card */}
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="text-lg font-semibold text-foreground mb-4">Status & Assignment</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block">Status</label>
                <Select value={lead.status} onValueChange={handleStatusChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block">Assign To</label>
                <Select value={lead.assignedTo} onValueChange={handleAssignChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {employees.map((emp) => (
                      <SelectItem key={emp} value={emp}>
                        {emp}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] space-y-3">
            <Button className="w-full">
              <MessageSquare size={16} className="mr-2" />
              Send Email
            </Button>
            <Button className="w-full" variant="outline">
              <ArrowRight size={16} className="mr-2" />
              Convert to Client
            </Button>
          </div>
        </div>

        {/* Right Column - Lead Details & Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Service Interest */}
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="text-lg font-semibold text-foreground mb-4">Service Interest</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Service Type</p>
                <p className="text-base font-medium text-foreground">{lead.service}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Source</p>
                <p className="text-base font-medium text-foreground">{lead.source}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Contact Date</p>
                <p className="text-base font-medium text-foreground">{lead.date}</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="text-lg font-semibold text-foreground mb-4">Message</h3>
            <p className="text-sm text-foreground leading-relaxed">{lead.message}</p>
          </div>

          {/* Notes & Activity Log */}
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="text-lg font-semibold text-foreground mb-4">Notes & Activity</h3>

            {/* Activity List */}
            <div className="space-y-4 mb-6">
              {lead.notes.map((note) => (
                <div key={note.id} className="border-l-2 border-[#AE14D9] pl-4 py-2">
                  <p className="text-sm font-semibold text-foreground">{note.author}</p>
                  <p className="text-sm text-muted-foreground mt-1">{note.text}</p>
                  <p className="text-xs text-muted-foreground mt-2">{note.date}</p>
                </div>
              ))}
            </div>

            {/* Add Note */}
            <div className="space-y-3 pt-4 border-t border-[#F2F2F2] dark:border-[#2a2a4a]">
              <Textarea
                placeholder="Add a note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                rows={3}
              />
              <Button onClick={handleAddNote} className="w-full">
                Add Note
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
