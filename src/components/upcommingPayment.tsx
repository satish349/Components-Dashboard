"use client";

import React, { useState, useEffect } from 'react';
export default function UpcommingPayment() {

    const [mounted, setMounted] = useState(false);
    const [viewDate, setViewDate] = useState<Date | null>(null);

    // Core configuration for India timezone
    const TIMEZONE = 'Asia/Kolkata';
    const LOCALE = 'en-IN';

    useEffect(() => {
        setMounted(true);
        // Initialize with current date forced to Asia/Kolkata context
        setViewDate(new Date());
    }, []);

    if (!mounted || !viewDate) {
        return <div className="p-4 text-center text-gray-500 animate-pulse">Loading dynamic calendar...</div>;
    }

    // Helper function to extract fields localized to India
    const getIndiaFields = (date: Date) => {
        const formatter = new Intl.DateTimeFormat(LOCALE, {
            timeZone: TIMEZONE,
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
        const parts = formatter.formatToParts(date);
        const map = Object.fromEntries(parts.map(p => [p.type, parseInt(p.value, 10)]));
        return { year: map.year, month: map.month - 1, day: map.day }; // month is 0-indexed in JS
    };

    const { year: currentYear, month: currentMonth } = getIndiaFields(viewDate);

    // Generate localized header (e.g., "June 2026")
    const monthYearHeader = viewDate.toLocaleDateString(LOCALE, {
        timeZone: TIMEZONE,
        month: 'long',
        year: 'numeric',
    });

    // Calculate grid properties safely for the Asia/Kolkata zone
    const firstDayOfMonth = new Date(Date.UTC(currentYear, currentMonth, 1));

    // Get day of the week for the 1st of the month (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeekParts = new Intl.DateTimeFormat(LOCALE, {
        timeZone: TIMEZONE,
        hour12: false,
        year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric'
    }).formatToParts(firstDayOfMonth);

    // This ensures we determine the weekday index cleanly via standard JS instantiation
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Total days in the active month
    const totalDays = new Date(Date.UTC(currentYear, currentMonth + 1, 0)).getUTCDate();

    // Create an array for the grid items
    const calendarDays = [];

    // Add empty slots for days before the 1st of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
        calendarDays.push(null);
    }

    // Add the actual days of the month
    for (let day = 1; day <= totalDays; day++) {
        calendarDays.push(day);
    }

    // Check if a specific grid day matches today's date in India
    const isTodayInIndia = (day: number | null) => {
        if (!day) return false;
        const todayFields = getIndiaFields(new Date());
        return todayFields.year === currentYear && todayFields.month === currentMonth && todayFields.day === day;
    };

    // Safe month increment/decrement handlers
    const handlePrevMonth = () => {
        setViewDate(new Date(Date.UTC(currentYear, currentMonth - 1, 1)));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(Date.UTC(currentYear, currentMonth + 1, 1)));
    };

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    const insu = [
        {
            title:'Netflix Subscription',
            data:'Apr 15, 2026',
            rupees:'$19.99'
        },
        {
            title:'Rent Payment',
            data:'Apr 1, 2026',
            rupees:'$2,400.00'
        },
        {
            title:'Auto Insurance',
            data:'Apr 22, 2024',
            rupees:'$186.00'
        },
    ]

    return (
        <>
            <section className="w-92 rounded-md pt-6 border border-slate-900/30git branch -M main ">
                <div className="w-92 rounded-md px-5">

                    <h2 className="text-md font-semibold mb-2">Upcoming Payments</h2>
                    <p className='opacity-75 text-sm'>
                        Select a date to view scheduled payments.
                    </p>
                    <div className="max-w-md mx-auto mt-3 p-6 bg-white rounded-2xl border border-gray-200">

                        {/* Calendar Header with Navigation */}
                        <div className="flex items-center justify-between mb-6">
                            <button
                                onClick={handlePrevMonth}
                                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-lg font-bold"
                            >
                                &larr;
                            </button>
                            <div className="text-center">
                                <h2 className="text-xl font-bold text-gray-800 capitalize">{monthYearHeader}</h2>
                            </div>
                            <button
                                onClick={handleNextMonth}
                                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-lg font-bold"
                            >
                                &rarr;
                            </button>
                        </div>

                        {/* Weekdays Labels */}
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                            {weekdays.map((day) => (
                                <div key={day} className="text-xs font-medium text-gray-400  py-1">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {calendarDays.map((day, index) => {
                                const currentIsToday = isTodayInIndia(day);
                                return (
                                    <div
                                        key={index}
                                        className={`h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${!day ? 'bg-transparent' : 'hover:bg-indigo-50 text-gray-700 cursor-pointer'} ${currentIsToday ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md font-bold' : ''}
              `}
                                    >
                                        {day}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                <div className="mb-5">
                    {insu.map((item,index)=>(
                        <div key={index} className="flex items-center justify-between mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-xs text-gray-500">{item.data}</p>
                            </div>
                            <div className="text-sm font-medium text-gray-900">{item.rupees}</div>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    );
}
