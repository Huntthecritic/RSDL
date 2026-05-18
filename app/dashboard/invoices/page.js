'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Eye, Download, Mail, Trash2, Search } from 'lucide-react';
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

const mockInvoices = [
  {
    id: 'INV-001',
    client: 'Tech Startup Inc.',
    amount: '$15,000',
    issueDate: '2024-04-30',
    dueDate: '2024-05-30',
    status: 'paid',
    paidDate: '2024-05-15',
    items: [
      { description: 'Web Design Services', quantity: 1, rate: '$5,000', amount: '$5,000' },
      { description: 'Frontend Development', quantity: 160, rate: '$50/hr', amount: '$8,000' },
      { description: 'Project Management', quantity: 40, rate: '$25/hr', amount: '$1,000' },
    ],
    tax: '$600',
    subtotal: '$14,000',
    total: '$15,000',
  },
  {
    id: 'INV-002',
    client: 'Tech Startup Inc.',
    amount: '$12,500',
    issueDate: '2024-05-15',
    dueDate: '2024-06-15',
    status: 'pending',
    items: [
      { description: 'Backend Development', quantity: 200, rate: '$50/hr', amount: '$10,000' },
      { description: 'API Integration', quantity: 50, rate: '$25/hr', amount: '$1,250' },
    ],
    tax: '$900',
    subtotal: '$11,250',
    total: '$12,500',
  },
  {
    id: 'INV-003',
    client: 'Creative Agency Pro',
    amount: '$8,750',
    issueDate: '2024-04-01',
    dueDate: '2024-05-01',
    status: 'overdue',
    items: [
      { description: 'Mobile App Design', quantity: 1, rate: '$4,000', amount: '$4,000' },
      { description: 'UI Component Library', quantity: 1, rate: '$3,000', amount: '$3,000' },
    ],
    tax: '$560',
    subtotal: '$7,000',
    total: '$8,750',
  },
  {
    id: 'INV-004',
    client: 'E-Commerce Solutions',
    amount: '$22,000',
    issueDate: '2024-05-10',
    dueDate: '2024-06-10',
    status: 'draft',
    items: [
      { description: 'E-Commerce Platform Development', quantity: 300, rate: '$50/hr', amount: '$15,000' },
      { description: 'Payment Gateway Integration', quantity: 80, rate: '$25/hr', amount: '$2,000' },
    ],
    tax: '$1,360',
    subtotal: '$17,000',
    total: '$22,000',
  },
];

const statusBadgeVariants = {
  draft: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
  pending: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  paid: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  overdue: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredInvoices = mockInvoices.filter((invoice) => {
    const matchesSearch = invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full">
      <ContentHeader
        title="Invoices"
        subtitle="Manage and track all invoices"
        action={
          <Link href="/dashboard/invoices/new">
            <Button>
              <Plus size={16} className="mr-2" />
              Create Invoice
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
              placeholder="Search by invoice # or client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Status Filter Chips */}
        <div className="flex gap-2 flex-wrap">
          {['all', 'draft', 'pending', 'paid', 'overdue'].map((status) => (
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
              <TableHead className="text-foreground">Invoice #</TableHead>
              <TableHead className="text-foreground">Client</TableHead>
              <TableHead className="text-foreground">Amount</TableHead>
              <TableHead className="text-foreground">Issued</TableHead>
              <TableHead className="text-foreground">Due</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-right text-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                className="border-b border-[#F2F2F2] dark:border-[#2a2a4a] hover:bg-muted/30 dark:hover:bg-white/5"
              >
                <TableCell className="font-medium text-foreground">{invoice.id}</TableCell>
                <TableCell className="text-sm text-foreground">{invoice.client}</TableCell>
                <TableCell className="font-semibold text-foreground">{invoice.amount}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{invoice.issueDate}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{invoice.dueDate}</TableCell>
                <TableCell>
                  <Badge className={`${statusBadgeVariants[invoice.status]} border-0`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/dashboard/invoices/${invoice.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Download size={16} />
                    </Button>
                    {invoice.status !== 'paid' && (
                      <Button variant="ghost" size="sm">
                        <Mail size={16} />
                      </Button>
                    )}
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

      {filteredInvoices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No invoices found</p>
        </div>
      )}
    </div>
  );
}
