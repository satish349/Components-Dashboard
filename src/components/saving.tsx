
export default function SavingTarget() {
    const savingTargets = [
        {
            id: 1,
            name: "Retirement",
            targetAmount: "$420,000",
            achievedPercentage: "75%",
            achievedAmount: "$273,000",
            stylew: "75%"
        },
        {
            id: 2,
            name: "Vacation",
            targetAmount: "$10,000",
            achievedPercentage: "50%",
            achievedAmount: "$5,000",
            stylew: "50%"
        }
    ]
  return (
    <>
      <section className="w-92 rounded-md pt-6 border border-slate-900/30 ">
        <div className="w-92 rounded-md px-5 flex justify-between">
          <div>
            <h2 className="text-md font-semibold mb-2">Savings Targets</h2>
            <p className="text-sm opacity-60">Active milestones for 2024</p>
          </div>
          <p className='text-sm font-medium px-4 h-7 py-1 hover:bg-gray-200 rounded-md border border-gray-300 transition-all duration-300 ease-in-out'>New Goal</p>
        </div>
        <div className='w-full px-5 py-4'>
            {savingTargets.map((target, idx) => (
                <div key={idx} className=' px-5 py-4 border border-gray-200 mt-3 rounded-md'>
                    <p className='flex items-center justify-between text-sm font-medium opacity-75 text-transform: uppercase'>{target.name}</p>
                    <h1 className='text-xl font-semibold mt-4'>{target.targetAmount}</h1>
                    <div className='w-full flex items-center bg-gray-100 rounded-full my-2'>
                        <p style={{ width: target.stylew }} className=' h-1 bg-slate-900 rounded-l-full'></p>
                        <p className='w-1/2 h-1  rounded-r-full'></p>
                    </div>
                    <p className='flex items-center justify-between text-sm font-medium opacity-75'>
                        <span>{target.achievedPercentage} achieved</span>
                        <span>{target.achievedAmount}</span>
                    </p>
                </div>
            ))}
        </div>
        <div className='w-full px-5 py-4 border-t border-gray-200 mt-3 bg-gray-100'>
          <p className="pr-4 py-2 text-sm rounded-md">
            You have not met your targets for this year.
          </p>
        </div>
      </section>
    </>
  );
}
