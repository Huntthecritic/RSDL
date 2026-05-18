'use client';

import React from 'react';
import { Check } from 'lucide-react';

export function PhaseStepper({ phases, currentPhaseIndex, onPhaseClick }) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        {phases.map((phase, index) => {
          const isCompleted = index < currentPhaseIndex;
          const isCurrent = index === currentPhaseIndex;

          return (
            <div key={phase.id} className="flex-1">
              <button
                onClick={() => onPhaseClick && onPhaseClick(index)}
                disabled={!isCompleted && !isCurrent}
                className="w-full flex flex-col items-center"
                title={phase.name}
              >
                {/* Phase Node */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-2 transition-all ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isCurrent
                        ? 'bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white ring-2 ring-[#AE14D9] ring-offset-2 dark:ring-offset-[#16162A]'
                        : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {isCompleted ? <Check size={20} /> : index + 1}
                </div>

                {/* Phase Label */}
                <span
                  className={`text-xs font-medium text-center transition-colors ${
                    isCurrent
                      ? 'text-[#AE14D9]'
                      : isCompleted
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-muted-foreground'
                  }`}
                >
                  {phase.name}
                </span>
              </button>

              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div
                  className={`absolute h-0.5 w-[calc(100%-20px)] transform translate-x-[calc(5px+20px)] -translate-y-[calc(20px+8px)] transition-all ${
                    isCompleted
                      ? 'bg-green-500'
                      : isCurrent
                        ? 'bg-gradient-to-r from-[#AE14D9] to-muted'
                        : 'bg-muted'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Connecting Lines */}
      <div className="flex items-center justify-between px-5 mb-4 relative h-1">
        {phases.map((_, index) => {
          if (index >= phases.length - 1) return null;

          const isCompleted = index < currentPhaseIndex;
          const isCurrent = index === currentPhaseIndex;

          return (
            <div
              key={`line-${index}`}
              className={`flex-1 h-1 transition-all ${
                isCompleted
                  ? 'bg-green-500'
                  : isCurrent
                    ? 'bg-gradient-to-r from-[#AE14D9] to-muted'
                    : 'bg-muted'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
