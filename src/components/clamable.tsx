

export default function Clamable() {
  return (
    <>
      <section className='w-92 rounded-md border border-slate-900/30 '>
        <div className=" px-5 py-6  flex flex-col gap-3 text-start">
            <div className='text-sm flex flex-col gap-3'>
                <p className='opacity-75'>Claimable Balance</p>
                <h1 className='text-4xl font-semibold'>$0.00</h1>
                <button className='px-4 py-1 text-[10px] w-30 border border-gray-200 flex items-center gap-2 bg-gray-100 rounded-full'>
                    <p className='h-1.5 w-1.5 rounded-full bg-yellow-400'></p>
                    <p>Pending Setup</p>
                </button>
                <div className="flex flex-col gap-3 px-3 py-2 bg-gray-100 rounded-md mt-2">
                    <div className='flex justify-between '>
                        <p className='opacity-75'>Net Royalties</p>
                        <p>$0.00</p>
                    </div>
                    <div className='flex justify-between '>
                        <p className='opacity-75'>Processing Fee</p>
                        <p>-$0.00</p>
                    </div>
                    <hr className='border-gray-200'/>
                    <div className='flex justify-between '>
                        <p className='opacity-75'>Total Ready to Claim</p>
                        <p>$0.00 USD</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-3 px-4 bg-gray-100 border-t border-gray-200 rounded-b-md'>
            <p>Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution on the 15th of each month.</p>
        </div>
      </section>
    </>
  );
}
