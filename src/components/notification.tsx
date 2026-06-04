'use client';

import React, { useState } from 'react';

// Define layout structure for the notification options
interface NotificationOption {
  id: string;
  title: string;
  description: string;
}

const NOTIFICATION_OPTIONS: NotificationOption[] = [
  {
    id: 'transaction_alerts',
    title: 'Transaction alerts',
    description: 'Deposits, withdrawals, and transfers.',
  },
  {
    id: 'security_alerts',
    title: 'Security alerts',
    description: 'Login attempts and account changes.',
  },
  {
    id: 'goal_milestones',
    title: 'Goal milestones',
    description: 'Updates at 25%, 50%, 75%, and 100%.',
  },
  {
    id: 'market_updates',
    title: 'Market updates',
    description: 'Daily portfolio summary and price alerts.',
  },
];

export default function Notification() {
  // Store selected sub-checkboxes in a Record state object
  const [selectedIds, setSelectedIds] = useState<Record<string, boolean>>({
    transaction_alerts: false,
    security_alerts: false,
    goal_milestones: false,
    market_updates: false,
  });

  // Check if every individual option is true
  const isAllSelected = NOTIFICATION_OPTIONS.every(
    (option) => selectedIds[option.id]
  );

  // Master toggle: Select All or Deselect All
  const handleSelectAllChange = () => {
    const nextState = !isAllSelected;
    const updatedState = NOTIFICATION_OPTIONS.reduce((acc, option) => {
      acc[option.id] = nextState;
      return acc;
    }, {} as Record<string, boolean>);
    
    setSelectedIds(updatedState);
  };

  // Single item toggle logic
  const handleSingleItemChange = (id: string) => {
    setSelectedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-92 rounded-md pt-6 border border-slate-900/30 ">
        <div className="w-92 rounded-md px-5">
            <div className="max-w-md mx-auto bg-white font-sans text-gray-900 selection:bg-indigo-100">
            {/* Header Titles */}
            <h2 className="text-md font-semibold mb-2">Notifications</h2>
            <p className="text-sm opacity-60 mb-7">Choose what you want to be notified about.</p>

            {/* Main List Container */}
            <div className="space-y-5">
                
                {/* Select All Row */}
                <label className="flex items-center gap-3 cursor-pointer group">
                <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAllChange}
                    className="w-[18px] h-[18px] rounded border-gray-300 text-black focus:ring-black accent-black cursor-pointer transition-all"
                />
                <span className="text-sm font-semibold tracking-wide text-gray-900 group-hover:text-black">
                    Select all
                </span>
                </label>

                {/* Dynamic Sub-items Mapping */}
                {NOTIFICATION_OPTIONS.map((item) => (
                <label 
                    key={item.id} 
                    className="flex items-start gap-3 cursor-pointer group pt-1"
                >
                    <input
                    type="checkbox"
                    checked={selectedIds[item.id] || false}
                    onChange={() => handleSingleItemChange(item.id)}
                    className="w-[18px] h-[18px] mt-0.5 rounded border-gray-300 text-black focus:ring-black accent-black cursor-pointer transition-all"
                    />
                    <div className="flex flex-col select-none">
                    <span className="text-sm font-semibold tracking-wide text-gray-900 group-hover:text-black">
                        {item.title}
                    </span>
                    <span className="text-sm font-normal text-gray-500 mt-0.5 leading-relaxed">
                        {item.description}
                    </span>
                    </div>
                </label>
                ))}

            </div>
            </div>
        </div>
        <div className='w-full px-5 py-4 border-t border-gray-200 mt-3'>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out w-full opacity-75">
            Save Payout Settings
          </button>
        </div>
    </section>
  );
}
