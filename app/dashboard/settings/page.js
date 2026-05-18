'use client';

import React, { useState } from 'react';
import { Save, Lock, User, Building2, Key } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/app/dashboard/context/auth-context';

export default function SettingsPage() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    title: 'Digital Manager',
  });

  const [companyData, setCompanyData] = useState({
    name: 'Reel Span Digital',
    email: 'hello@reelspandigital.com',
    phone: '+1 (555) 000-0000',
    address: '123 Digital Street, San Francisco, CA',
    website: 'https://reelspandigital.com',
  });

  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [savedMessage, setSavedMessage] = useState('');

  const handleSave = (section) => {
    setSavedMessage(`${section} updated successfully!`);
    setTimeout(() => setSavedMessage(''), 3000);
  };

  return (
    <div className="w-full">
      <ContentHeader title="Settings" subtitle="Manage your account and preferences" />

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          {isAdmin && <TabsTrigger value="company">Company</TabsTrigger>}
          {isAdmin && <TabsTrigger value="integrations">Integrations</TabsTrigger>}
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <User size={20} />
                Profile Information
              </h3>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Full Name</Label>
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Email</Label>
                  <Input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Phone</Label>
                  <Input
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Job Title</Label>
                  <Input
                    value={profileData.title}
                    onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>

                <Button onClick={() => handleSave('Profile')} className="w-full">
                  <Save size={16} className="mr-2" />
                  Save Changes
                </Button>

                {savedMessage && (
                  <p className="text-sm text-green-600 dark:text-green-400">{savedMessage}</p>
                )}
              </div>
            </div>

            {/* Avatar Card */}
            <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <h3 className="text-lg font-semibold text-foreground mb-4">Avatar</h3>
              <div className="flex flex-col items-center py-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#AE14D9] to-[#7216F2] flex items-center justify-center text-2xl font-bold text-white mb-4">
                  {user?.avatar}
                </div>
                <Button variant="outline">Upload Photo</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Company Tab (Admin Only) */}
        {isAdmin && (
          <TabsContent value="company" className="space-y-6 mt-6">
            <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building2 size={20} />
                Company Information
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Company Name</Label>
                  <Input
                    value={companyData.name}
                    onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Email</Label>
                  <Input
                    type="email"
                    value={companyData.email}
                    onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Phone</Label>
                  <Input
                    value={companyData.phone}
                    onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Website</Label>
                  <Input
                    value={companyData.website}
                    onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>

                <div className="lg:col-span-2">
                  <Label className="text-sm font-semibold text-foreground mb-2 block">Address</Label>
                  <Input
                    value={companyData.address}
                    onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                    className="bg-muted/30 dark:bg-white/5"
                  />
                </div>
              </div>

              <Button onClick={() => handleSave('Company')} className="w-full mt-6">
                <Save size={16} className="mr-2" />
                Save Changes
              </Button>
            </div>
          </TabsContent>
        )}

        {/* Integrations Tab (Admin Only) */}
        {isAdmin && (
          <TabsContent value="integrations" className="space-y-6 mt-6">
            <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
              <h3 className="text-lg font-semibold text-foreground mb-4">Connected Services</h3>

              <div className="space-y-4">
                {[
                  { name: 'Firestore', status: 'connected', description: 'Database connection' },
                  { name: 'Stripe', status: 'disconnected', description: 'Payment processing' },
                  { name: 'Resend', status: 'connected', description: 'Email service' },
                  { name: 'AWS S3', status: 'disconnected', description: 'File storage' },
                ].map((service) => (
                  <div key={service.name} className="flex items-center justify-between p-4 bg-muted/30 dark:bg-white/5 rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">{service.name}</p>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {service.status === 'connected' ? (
                        <span className="text-xs font-bold text-green-600 dark:text-green-400">✓ Connected</span>
                      ) : (
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400">Not Connected</span>
                      )}
                      <Button size="sm" variant="outline">
                        {service.status === 'connected' ? 'Manage' : 'Connect'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        )}

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6 mt-6">
          <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Lock size={20} />
              Change Password
            </h3>

            <div className="space-y-4 max-w-md">
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">Current Password</Label>
                <Input
                  type="password"
                  value={passwordData.current}
                  onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                  placeholder="Enter your current password"
                  className="bg-muted/30 dark:bg-white/5"
                />
              </div>

              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">New Password</Label>
                <Input
                  type="password"
                  value={passwordData.new}
                  onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                  placeholder="Enter a new password"
                  className="bg-muted/30 dark:bg-white/5"
                />
              </div>

              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">Confirm Password</Label>
                <Input
                  type="password"
                  value={passwordData.confirm}
                  onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                  placeholder="Confirm your new password"
                  className="bg-muted/30 dark:bg-white/5"
                />
              </div>

              <Button onClick={() => handleSave('Password')} className="w-full">
                <Lock size={16} className="mr-2" />
                Update Password
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
