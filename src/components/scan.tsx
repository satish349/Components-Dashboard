import { FaPlus } from "react-icons/fa";


export default function QrGenerator() {
  return (
    <>
      <section>
        <div className="w-92 rounded-md px-5 py-6 border border-slate-900/30 flex flex-col gap-3 text-start">
            <h3 className="text-sm font-semibold">Dollar-Cost Averaging</h3>
            <p className="text-sm opacity-60">A strategy for building wealth over time.</p>
            <p className="text-sm">
                <a href="" className="text-slate-900 underline hover:opacity-100 opacity-60">Over time</a> <span className='opacity-60'>
                    , this smooths out the average cost of your investments. When prices drop, your fixed amount buys more shares. When prices rise, you buy fewer. The result is a lower average cost per share compared to lump-sum investing during volatile periods.
                </span>
            </p>
        </div>
      </section>
    </>
  );
}
