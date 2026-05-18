'use client';

import React from 'react';
import Link from 'next/link';
import { Download, Eye } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
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
    amount: '$15,000',
    issueDate: '2024-04-30',
    dueDate: '2024-05-30',
    status: 'paid',
    paidDate: '2024-05-15',
  },
  {
    id: 'INV-002',
    amount: '$12,500',
    issueDate: '2024-05-15',
    dueDate: '2024-06-15',
    status: 'pending',
  },
];

const statusBadgeVariants = {
  paid: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  pending: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  overdue: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

export default function ClientInvoicesPage() {
  return (
    <div className="w-full">
      <ContentHeader title="Invoices" subtitle="View and download your invoices" />

      {/* Table */}
      <div className="bg-white dark:bg-[#21213D] rounded-xl shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
              <TableHead className="text-foreground">Invoice #</TableHead>
              <TableHead className="text-foreground">Amount</TableHead>
              <TableHead className="text-foreground">Issued</TableHead>
              <TableHead className="text-foreground">Due</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-right text-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockInvoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                className="border-b border-[#F2F2F2] dark:border-[#2a2a4a] hover:bg-muted/30 dark:hover:bg-white/5"
              >
                <TableCell className="font-medium text-foreground">{invoice.id}</TableCell>
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
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
