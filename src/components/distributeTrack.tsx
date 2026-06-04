import { FaPlus } from "react-icons/fa";


export default function DistributeTrack() {
  return (
    <>
      <section>
        <div className="w-92 rounded-md px-5 py-6 border border-gray-200 text-center flex flex-col gap-3">
            <div  className='m-auto py-3 bg-gray-200 w-10 flex justify-center items-center rounded-xl' >
                <FaPlus/>
            </div>
            <h3 className="text-sm font-semibold">Distribute Track</h3>
            <p className="text-sm opacity-60">Upload your first master to start reaching listeners on Spotify, Apple Music, and more.</p>
            <button className="px-4 py-2 w-1/2 m-auto bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out">
                Create Release
            </button>
        </div>
      </section>
    </>
  );
}
