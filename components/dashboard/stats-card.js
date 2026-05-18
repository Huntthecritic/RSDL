'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function StatsCard({ label, value, change, changeType, icon: Icon }) {
  return (
    <div className="bg-white dark:bg-[#21213D] rounded-xl p-6 shadow-sm border border-[#F2F2F2] dark:border-[#2a2a4a]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <h3 className="text-2xl font-bold text-foreground">{value}</h3>
        </div>
        {Icon && (
          <div className="p-2 bg-gradient-to-br from-[#AE14D9]/10 to-[#7216F2]/10 rounded-lg">
            <Icon className="text-[#AE14D9]" size={24} />
          </div>
        )}
      </div>

      {change && (
        <div className="flex items-center gap-2">
          {changeType === 'increase' ? (
            <TrendingUp size={16} className="text-green-500" />
          ) : (
            <TrendingDown size={16} className="text-red-500" />
          )}
          <span className={`text-xs font-semibold ${changeType === 'increase' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {change}% vs last month
          </span>
        </div>
      )}
    </div>
  );
}
