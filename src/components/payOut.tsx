'use client';
import {useState} from 'react';
export default function Payout() {
    const [payoutAmount, setPayoutAmount] = useState(23000);
    const handlePayoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPayoutAmount(Number(e.target.value));
    }
  return (
    <>
      <section className="w-92 rounded-md pt-6 border border-slate-900/30 ">
        <div className="w-92 rounded-md px-5">
          <h2 className="text-md font-semibold mb-2">Payout Threshold</h2>
          <p className="text-sm opacity-60">Set the minimum balance required before a payout is triggered.</p>

          <div className='my-3'>
            <label className="text-sm mb-2">Preferred Currency</label>
            <select className=' w-full border border-gray-200 focus:ring-none focus:outline-none text-sm rounded-md px-2 py-1.5 my-1'>
                <option>INR - Indian Rupees</option>
                <option>USD - United States Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
            </select>
          </div>
          <div className='mt-7 mb-2'>
            <div className='flex items-center justify-between'>
                <p className="text-sm">Minimum Payout Amount</p>
                <h1 className='text-lg font-semibold'>${payoutAmount.toFixed(2)}</h1>
            </div>
            <input type="range" className="w-full" min={50} max={100000} value={payoutAmount}  onChange={handlePayoutChange}/>
            <div className='flex items-center justify-between opacity-60 text-sm -mt-1'>
                <p>$50 (MIN)</p>
                <p>$10,000 (MAX)</p>
            </div>
          </div>
            <div>
                <label className="text-sm mb-2 font-semibold">Notes</label>
                <textarea className="w-full border border-gray-200 focus:ring-none focus:outline-none text-sm rounded-md px-2 py-1.5 my-1" rows={3} placeholder="Add any specific instructions or notes regarding payouts..."></textarea>
            </div>
        </div>
        <div className='w-full px-5 py-4 border-t border-gray-200 mt-3'>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out w-full">
            View full report
          </button>
        </div>
      </section>
    </>
  );
}
