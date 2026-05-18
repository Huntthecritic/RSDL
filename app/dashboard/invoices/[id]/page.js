'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Send, Check } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockInvoice = {
  id: 'INV-001',
  client: 'Tech Startup Inc.',
  clientEmail: 'billing@techstartup.com',
  amount: '$15,000',
  issueDate: '2024-04-30',
  dueDate: '2024-05-30',
  status: 'paid',
  paidDate: '2024-05-15',
  items: [
    { id: 1, description: 'Web Design Services', quantity: 1, rate: '$5,000', amount: '$5,000' },
    { id: 2, description: 'Frontend Development', quantity: 160, rate: '$50/hr', amount: '$8,000' },
    { id: 3, description: 'Project Management', quantity: 40, rate: '$25/hr', amount: '$1,000' },
  ],
  tax: '$600',
  subtotal: '$14,000',
  total: '$15,000',
  notes: 'Thank you for your business! Please contact us if you have any questions.',
};

const statusBadgeVariants = {
  draft: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
  pending: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  paid: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  overdue: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

export default function InvoiceDetailPage({ params }) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard/invoices" className="flex items-center gap-2 text-[#AE14D9] hover:text-[#7216F2] mb-4 font-medium">
          <ArrowLeft size={16} />
          Back to Invoices
        </Link>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{mockInvoice.id}</h1>
            <p className="text-muted-foreground">{mockInvoice.client}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download size={16} className="mr-2" />
              Download PDF
            </Button>
            {mockInvoice.status !== 'paid' && (
              <Button variant="outline">
                <Send size={16} className="mr-2" />
                Send Email
              </Button>
            )}
            {mockInvoice.status !== 'paid' && (
              <Button>
                <Check size={16} className="mr-2" />
                Mark as Paid
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Invoice Content (Printable) */}
      <div className="bg-white dark:bg-[#21213D] rounded-xl p-8 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] max-w-4xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 pb-8 border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
          <div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AE14D9] to-[#7216F2] mb-2">
              REEL SPAN DIGITAL
            </h2>
            <p className="text-sm text-muted-foreground">Digital Agency</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-foreground">{mockInvoice.id}</p>
            <Badge className={`mt-2 ${statusBadgeVariants[mockInvoice.status]} border-0`}>
              {mockInvoice.status.charAt(0).toUpperCase() + mockInvoice.status.slice(1)}
            </Badge>
          </div>
        </div>

        {/* Invoice Info Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Bill To */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">BILL TO:</h3>
            <p className="font-semibold text-foreground">{mockInvoice.client}</p>
            <p className="text-sm text-muted-foreground">{mockInvoice.clientEmail}</p>
          </div>

          {/* Invoice Details */}
          <div className="text-right">
            <div className="mb-3">
              <p className="text-xs text-muted-foreground">Invoice Date</p>
              <p className="font-semibold text-foreground">{mockInvoice.issueDate}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Due Date</p>
              <p className="font-semibold text-foreground">{mockInvoice.dueDate}</p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#AE14D9]">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Quantity</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Rate</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
              </tr>
            </thead>
            <tbody>
              {mockInvoice.items.map((item) => (
                <tr key={item.id} className="border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
                  <td className="py-3 px-4 text-foreground">{item.description}</td>
                  <td className="text-right py-3 px-4 text-foreground">{item.quantity}</td>
                  <td className="text-right py-3 px-4 text-foreground">{item.rate}</td>
                  <td className="text-right py-3 px-4 font-semibold text-foreground">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between py-2 border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
              <span className="text-foreground">Subtotal:</span>
              <span className="font-semibold text-foreground">{mockInvoice.subtotal}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
              <span className="text-foreground">Tax (4%):</span>
              <span className="font-semibold text-foreground">{mockInvoice.tax}</span>
            </div>
            <div className="flex justify-between py-2 bg-gradient-to-r from-[#AE14D9]/10 to-[#7216F2]/10 px-3 rounded">
              <span className="font-bold text-foreground">Total:</span>
              <span className="font-bold text-[#AE14D9]">{mockInvoice.total}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {mockInvoice.notes && (
          <div className="mb-8 pt-8 border-t border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">NOTES:</h3>
            <p className="text-sm text-foreground">{mockInvoice.notes}</p>
          </div>
        )}

        {/* Payment Status */}
        {mockInvoice.status === 'paid' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg">
            <p className="text-sm font-semibold text-green-700 dark:text-green-300">
              ✓ Paid on {mockInvoice.paidDate}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
