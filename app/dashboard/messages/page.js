'use client';

import React, { useState } from 'react';
import { Search, Send, Paperclip } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const mockConversations = [
  {
    id: 1,
    projectName: 'E-Commerce Platform Redesign',
    lastMessage: 'Wireframes are ready for review',
    lastAuthor: 'Jane Doe',
    timestamp: '2 hours ago',
    unreadCount: 2,
    messages: [
      { id: 1, author: 'Jane Doe', role: 'Team', message: 'Wireframes are ready for review', timestamp: '14:30' },
      { id: 2, author: 'You', role: 'You', message: 'Great! I\'ll review them today', timestamp: '15:00' },
    ],
  },
  {
    id: 2,
    projectName: 'Mobile App Development',
    lastMessage: 'Can we schedule a call for Monday?',
    lastAuthor: 'John Smith',
    timestamp: '5 hours ago',
    unreadCount: 0,
    messages: [
      { id: 1, author: 'John Smith', role: 'Client', message: 'Progress looks good!', timestamp: '10:00' },
      { id: 2, author: 'John Smith', role: 'Client', message: 'Can we schedule a call for Monday?', timestamp: '10:30' },
    ],
  },
  {
    id: 3,
    projectName: 'Website Redesign',
    lastMessage: 'Updated the design system',
    lastAuthor: 'Alex Johnson',
    timestamp: '1 day ago',
    unreadCount: 0,
    messages: [
      { id: 1, author: 'Alex Johnson', role: 'Team', message: 'Updated the design system', timestamp: '09:00' },
    ],
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const filteredConversations = mockConversations.filter((conv) =>
    conv.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Message sent:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="w-full">
      <ContentHeader title="Messages" subtitle="Unified inbox for all project conversations" />

      {/* Split View Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="lg:col-span-1 bg-white dark:bg-[#21213D] rounded-xl shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full p-4 border-b border-[#F2F2F2] dark:border-[#2a2a4a] text-left transition-colors hover:bg-muted/30 dark:hover:bg-white/5 ${
                  selectedConversation.id === conv.id ? 'bg-muted/50 dark:bg-white/10' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-semibold text-foreground text-sm">{conv.projectName}</h4>
                  {conv.unreadCount > 0 && (
                    <span className="bg-[#AE14D9] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {conv.unreadCount}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate mb-1">{conv.lastMessage}</p>
                <p className="text-xs text-muted-foreground">{conv.timestamp}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-2 bg-white dark:bg-[#21213D] rounded-xl shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="font-semibold text-foreground">{selectedConversation.projectName}</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {selectedConversation.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.author === 'You' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.author === 'You'
                      ? 'bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white'
                      : 'bg-muted/50 dark:bg-white/10 text-foreground'
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#F2F2F2] dark:border-[#2a2a4a] space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 px-3 py-2 rounded-lg border border-[#F2F2F2] dark:border-[#2a2a4a] bg-muted/30 dark:bg-white/5 text-foreground placeholder-muted-foreground text-sm"
              />
              <Button size="sm" variant="outline">
                <Paperclip size={16} />
              </Button>
              <Button onClick={handleSendMessage} size="sm">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
