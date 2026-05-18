'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Eye, Edit2, Trash2, Phone, Mail, MapPin } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const mockLeads = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    service: 'E-commerce Website',
    source: 'Web Form',
    status: 'new',
    assignedTo: 'Alex Johnson',
    date: '2024-05-15',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 (555) 987-6543',
    service: 'Mobile App',
    source: 'Referral',
    status: 'contacted',
    assignedTo: 'Sarah Williams',
    date: '2024-05-10',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '+1 (555) 456-7890',
    service: 'Website Redesign',
    source: 'LinkedIn',
    status: 'qualified',
    assignedTo: 'Alex Johnson',
    date: '2024-05-05',
  },
  {
    id: 4,
    name: 'Sarah Brown',
    email: 'sarah@example.com',
    phone: '+1 (555) 321-0987',
    service: 'API Integration',
    source: 'WhatsApp',
    status: 'won',
    assignedTo: 'Mike Chen',
    date: '2024-04-28',
  },
];

const statusBadgeVariants = {
  new: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  contacted: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  qualified: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  won: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  lost: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredLeads = mockLeads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full">
      <ContentHeader
        title="Leads"
        subtitle="Manage and track potential clients"
        action={
          <Link href="/dashboard/leads/new">
            <Button>
              <Plus size={16} className="mr-2" />
              Add Lead
            </Button>
          </Link>
        }
      />

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Status Filter Chips */}
        <div className="flex gap-2 flex-wrap">
          {['all', 'new', 'contacted', 'qualified', 'won', 'lost'].map((status) => (
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
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#21213D] rounded-xl shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
              <TableHead className="text-foreground">Name</TableHead>
              <TableHead className="text-foreground">Service</TableHead>
              <TableHead className="text-foreground">Source</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-foreground">Assigned To</TableHead>
              <TableHead className="text-foreground">Date</TableHead>
              <TableHead className="text-right text-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow
                key={lead.id}
                className="border-b border-[#F2F2F2] dark:border-[#2a2a4a] hover:bg-muted/30 dark:hover:bg-white/5"
              >
                <TableCell>
                  <div>
                    <p className="font-medium text-foreground">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.email}</p>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-foreground">{lead.service}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{lead.source}</TableCell>
                <TableCell>
                  <Badge className={`${statusBadgeVariants[lead.status]} border-0`}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{lead.assignedTo}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{lead.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/dashboard/leads/${lead.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Edit2 size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredLeads.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No leads found</p>
        </div>
      )}
    </div>
  );
}
