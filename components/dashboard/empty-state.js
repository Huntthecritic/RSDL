'use client';

import React from 'react';

export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {Icon && (
        <div className="mb-4 p-3 bg-gradient-to-br from-[#AE14D9]/10 to-[#7216F2]/10 rounded-full">
          <Icon className="text-[#AE14D9]" size={40} />
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-sm">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
}
