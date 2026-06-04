import { FaLock } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { IoArrowForward } from "react-icons/io5";

export default function Account() {
  return (
    <>
      <section className="w-92 rounded-md pt-6 border border-slate-900/30 ">
        <div className="w-92 rounded-md px-5">
            <h2 className="text-md font-semibold mb-2">Account Access</h2>
            <p className='opacity-75 text-sm'>
                Update your credentials or re-authenticate.
            </p>

            <div className='flex flex-col gap-5 my-3 pb-3'>
                <div>
                    <label className="text-sm mb-1">Email Address</label>
                    <input type="email" placeholder="Enter email..." className='w-full border border-gray-200 focus:ring-none focus:outline-none text-sm rounded-md px-3 py-1.5 my-1' />
                </div>
                <div>
                    <label className="text-sm mb-1 flex items-center justify-between">
                        <span>Password</span>
                        <a href="#" className="text-sm hover:underline text-transform:uppercase opacity-75 hover:opacity-100">Forgot?</a>
                    </label>
                    <input type="password" placeholder="Enter password..." className='w-full border border-gray-200 focus:ring-none focus:outline-none text-sm rounded-md px-3 py-1.5' />
                </div>
            </div>
        </div>

        <div className='w-full px-5 py-4 border-t border-gray-200 mt-3'>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out w-full">
            <FaLock className="inline-block mr-2" />
            <span>Update Security</span>
          </button>
          <div className='flex items-center justify-between cursor-pointer bg-gray-100/80 hover:bg-gray-200 transition-colors duration-500 ease-in-out mt-3 rounded-md px-4 py-5'>
            <CgDanger className='-mt-5 text-red-600'/>
            <div>
                <h3 className="text-md font-semibold">Danger Zone</h3>
                <p className="text-sm opacity-75">Archieve account and remove catalog</p>
            </div>
            <IoArrowForward/>
          </div>
        </div>
      </section>
    </>
  );
}
