
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { sideBarData } from "./allData";



const Sidebar = () => {
  return (
    <>
        <section className='w-full border sm:h-full h-40 bg-white/90 rounded-md px-5 py-5 '>
            <div className='sm:flex hidden items-center flex-shrink-0 gap-3 py-2 justify-between px-8 border-b border-gray-300 border rounded-md mb-5 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer'>
                <div>
                    <h1 className='text-sm font-semibold'>Menu</h1>
                </div>
                <div>
                    <HiOutlineMenuAlt4 className='text-lg'/>
                </div>
            </div>
            <div className='flex sm:flex-col gap-4 overflow-y-auto sm:h-85 h-20 scrollbar-none'>
                {sideBarData.map((item, idx) => (
                    <div key={idx} className='flex sm:w-full w-50 h-15 items-center flex-shrink-0 gap-3 justify-between px-8 border-b border-gray-300 border rounded-md hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer'>
                        <div>
                            <p className='text-sm opacity-70'>{item.paraTitle}</p>
                            <h1 className='text-sm font-semibold'>{item.title}</h1>
                        </div>
                        <div>
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
            <div className='sm:mt-2 mt-0 flex sm:flex-col gap-2 items-center justify-evenly'>
                <div className='bg-gray-200 text-center sm:w-full w-30 rounded-md border border-gray-100/50 py-2 text-sm cursor-pointer hover:bg-gray-100 '>
                    --preset 0
                </div>
                <div className='bg-gray-200 text-center sm:w-full w-30 rounded-md border border-gray-100/50 py-2 text-sm cursor-pointer hover:bg-gray-100 '>
                    Open Preset
                </div>
                <div className='bg-gray-200 text-center sm:w-full w-30 rounded-md border border-gray-100/50 py-2 text-sm cursor-pointer hover:bg-gray-100 '>
                    Shuffle
                </div>
                <div className='bg-slate-900 text-white w-full hidden sm:block text-center rounded-md border border-gray-100/50 py-2 text-sm cursor-pointer hover:bg-slate-800 '>
                    Get Code
                </div>
            </div>
        </section>
    </>
  )
}

export default Sidebar
