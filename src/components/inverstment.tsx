
export default function Investment() {
  return (
    <>
      <section className="w-92 rounded-md pt-6 border border-slate-900/30 ">
        <div className="w-92 rounded-md px-5">
          <h2 className="text-md font-semibold mb-2">Buy Investment</h2>

        <div>
            <label className="text-sm mb-2">Amount to Invest</label>
            <input type="number" placeholder="Enter amount" className='w-full border border-gray-200 focus:ring-none focus:outline-none text-sm rounded-md px-3 py-1.5 my-1' />
        </div>

        <div className='my-3'>
            <label className="text-sm mb-2">Order Types</label>
            <select className=' w-full border border-gray-200 focus:ring-none focus:outline-none text-sm rounded-md px-2 py-1.5 my-1'>
                <option>Maker Order</option>
                <option>Stop Order</option>
                <option>Limit Order</option>
            </select>
            <p className='opacity-75 text-sm'>
                Market orders execute at the current price.
            </p>
        </div>
        <div className='my-5'>
            <p className='py-1 flex items-center justify-between text-sm'>
                <span className="text-sm  opacity-75">Estimated Shares:</span>
                <span className="text-sm font-semibold">1.95</span>
            </p>
            <p className='py-1 flex items-center justify-between text-sm'>
                <span className="text-sm  opacity-75">Buying Power</span>
                <span className="text-sm font-semibold">$12,450.00</span>
            </p>
        </div>

        </div>
        <div className='w-full px-5 py-4 border-t border-gray-200 mt-3'>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out w-full">
            Review Order
          </button>
          <p className='pt-5 text-center opacity-75 text-sm'>
            Trades are typically executed within minutes during market hours.
          </p>
        </div>
      </section>
    </>
  );
}
