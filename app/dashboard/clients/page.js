'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Eye, Edit2, Trash2 } from 'lucide-react';
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

const mockClients = [
  {
    id: 1,
    company: 'Tech Startup Inc.',
    contact: 'John Smith',
    email: 'john@techstartup.com',
    phone: '+1 (555) 123-4567',
    activeProjects: 2,
    totalProjects: 5,
    status: 'active',
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    company: 'Creative Agency Pro',
    contact: 'Jane Doe',
    email: 'jane@creativeagency.com',
    phone: '+1 (555) 987-6543',
    activeProjects: 1,
    totalProjects: 3,
    status: 'active',
    joinDate: '2024-02-10',
  },
  {
    id: 3,
    company: 'E-Commerce Solutions',
    contact: 'Mike Johnson',
    email: 'mike@ecommerce.com',
    phone: '+1 (555) 456-7890',
    activeProjects: 3,
    totalProjects: 7,
    status: 'active',
    joinDate: '2024-01-05',
  },
  {
    id: 4,
    company: 'Design Studio Ltd',
    contact: 'Sarah Brown',
    email: 'sarah@designstudio.com',
    phone: '+1 (555) 321-0987',
    activeProjects: 0,
    totalProjects: 2,
    status: 'inactive',
    joinDate: '2023-11-20',
  },
];

const statusBadgeVariants = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
};

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredClients = mockClients.filter((client) => {
    const matchesSearch = client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || client.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full">
      <ContentHeader
        title="Clients"
        subtitle="Manage client accounts and relationships"
        action={
          <Link href="/dashboard/clients/new">
            <Button>
              <Plus size={16} className="mr-2" />
              Add Client
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
              placeholder="Search by company or contact..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Status Filter Chips */}
        <div className="flex gap-2 flex-wrap">
          {['all', 'active', 'inactive'].map((status) => (
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
              <TableHead className="text-foreground">Company</TableHead>
              <TableHead className="text-foreground">Contact</TableHead>
              <TableHead className="text-foreground">Email</TableHead>
              <TableHead className="text-foreground">Active Projects</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-right text-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow
                key={client.id}
                className="border-b border-[#F2F2F2] dark:border-[#2a2a4a] hover:bg-muted/30 dark:hover:bg-white/5"
              >
                <TableCell>
                  <p className="font-medium text-foreground">{client.company}</p>
                </TableCell>
                <TableCell className="text-sm text-foreground">{client.contact}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{client.email}</TableCell>
                <TableCell className="text-sm text-foreground">{client.activeProjects} of {client.totalProjects}</TableCell>
                <TableCell>
                  <Badge className={`${statusBadgeVariants[client.status]} border-0`}>
                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/dashboard/clients/${client.id}`}>
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

      {filteredClients.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No clients found</p>
        </div>
      )}
    </div>
  );
}
