"use client";
import {useState} from 'react';

export default function PayoutPreference() {
  const [accountHolderName, setAccountHolderName] = useState('Satish Kumar');
  const receiving = [
    { id: 1, method: 'Bank Transfer', para:'SWIFT/IBAN' },
    { id: 2, method: 'PayPal', para:'Instant Payout' },
  ]

  return (
    <>
      <section className="w-92 rounded-md pt-6 border border-slate-900/30 ">
        <div className="w-92 rounded-md px-5">
            <p className='opacity-75 text-sm'>
                Payout Preferences
            </p>
          <h2 className="text-md font-semibold mb-2">Receiving Method</h2>

        <div>
            <label className="text-sm mb-2">Account Holder Name</label>
            <input 
              type="text" 
              placeholder="Enter name" 
              className='w-full border border-gray-200 focus:ring-none focus:outline-none text-sm rounded-md px-3 py-1.5 my-1' 
              value={accountHolderName}
              onChange={(e) => setAccountHolderName(e.target.value)}
            />
        </div>

        <div className='my-3'>
            <h2 className="text-md font-semibold mb-2">Receiving Method</h2>
            <div className="space-y-2">
              {receiving.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out hover:border-gray-300    ">
                  <span className="text-sm">{item.method}</span>
                  <span className="text-xs opacity-75">{item.para}</span>
                </div>
              ))}
            </div>

            <h2 className="text-sm font-semibold mb-1 mt-5">IBAN Account Number </h2>
            <input 
              type="text" 
              placeholder="Enter IBAN Account Number" 
              className='w-full border border-gray-200 focus:ring-none focus:outline-none text-sm rounded-md px-3 py-1.5 my-1' 
            />
        </div>

        </div>
        <div className='w-full px-5 py-4 border-t border-gray-200 mt-3'>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out w-full opacity-75">
            Save Payout Settings
          </button>
        </div>
      </section>
    </>
  );
}
