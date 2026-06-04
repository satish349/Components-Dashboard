
const absoluteData = [
  {
    id:1,
    contribution:'Contribution 800',
    hig:'80%'
  },
  {
    id:2,
    contribution:'Contribution 600',
    hig:'60%'
  },
  {
    id:3,
    contribution:'Contribution 750',
    hig:'75%'
  },
  {
    id:4,
    contribution:'Contribution 500',
    hig:'50%'
  },
  {
    id:5,
    contribution:'Contribution 870',
    hig:'87%'
  },
  {
    id:6,
    contribution:'Contribution 550',
    hig:'55%'
  },
]
const months = [
  {
    id:1,
    month:'Dec'
  },
  {
    id:2,
    month:'Jan'
  },
  {
    id:3,
    month:'Feb'
  },
  {
    id:4,
    month:'Mar'
  },
  {
    id:5,
    month:'Apr'
  },
  {
    id:6,
    month:'May'
  },
]

const box = [
  {
    id:1,
    up:'Upcoming',
    main:'May 25, 2024',
    fot:'$1,000 scheduled'
  },
  {
    id:2,
    up:'Auto-Save Plan',
    main:'Accelerated',
    fot:'Recurring weekly'
  }
]

export default function ContributionHistory() {
  return (
    <>
      <section>
        <div className="w-92 rounded-md px-5 py-6 border border-slate-900/30 ">
          <h2 className="text-sm font-semibold">Contribution History</h2>
          <p className="text-sm opacity-60">Last 6 months of activity</p>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex gap-4 h-47 justify-evenly items-end">
              {absoluteData.map((items, idx) => (
                <div key={idx} style={{height:`${items.hig}`}} className=" w-9 group hover:bg-gray-500/90 h-[100%] bg-gray-400 rounded-t-md">
                  <p className="absolute hidden group-hover:block mt-2 text-sm bg-slate-700 px-2 py-1 text-white rounded-md">{items.contribution}</p>
                </div>
              ))}
            </div>
            <div className="flex text-center gap-4 -mt-1 justify-evenly">
              {months.map((items, idx) => (
                <p key={idx} className=" w-9 rounded-t-md text-[12px] opacity-50">{items.month}</p>
              ))}
            </div>
          </div>
          <div className="my-5 mt-5 flex gap-3">
            {box.map((item, idx) => (
              <div key={idx} className="bg-gray-100  px-5 py-2 rounded-md">
                <p className="opacity-70 text-transform: uppercase text-sm">{item.up}</p>
                <h2 className="text-lg font-semibold">{item.main}</h2>
                <p className="opacity-70 text-sm">{item.fot}</p>
              </div>
            ))}
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out w-full">
            View full report
          </button>
        </div>
      </section>
    </>
  );
}
