'use client';

import React from 'react';

export function ContentHeader({ title, subtitle, action }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        {action && <div>{action}</div>}
      </div>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
