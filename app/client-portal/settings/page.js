'use client';

import React, { useState } from 'react';
import { Save, Lock, User } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/app/dashboard/context/auth-context';

export default function ClientSettingsPage() {
  const { user } = useAuth();

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 987-6543',
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
      <ContentHeader title="Settings" subtitle="Manage your account preferences" />

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">Profile</TabsTrigger>
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

                <Button onClick={() => handleSave('Profile')} className="w-full">
                  <Save size={16} className="mr-2" />
                  Save Changes
                </Button>

                {savedMessage && (
                  <p className="text-sm text-green-600 dark:text-green-400">{savedMessage}</p>
                )}
              </div>
            </div>

            {/* Avatar */}
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
