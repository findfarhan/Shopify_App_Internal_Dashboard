import {
  RiAlignJustify,
  RiCloseLargeLine,
  RiFileList2Line,
} from '@remixicon/react';
import { Button, Icon } from '@tremor/react';

import Link from 'next/link';

export default function SideBar({ logout, open, setOpen }) {
  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <div className='flex justify-between p-3 bg-gray-800 text-white'>
        <div className='flex'>
          <button
            className='border-none bg-none'
            onClick={() => toggleSidebar()}
          >
            {open ? (
              <Icon icon={RiCloseLargeLine} className='text-white' />
            ) : (
              <Icon icon={RiAlignJustify} className='text-white' />
            )}
          </button>
          <h1 className='mt-1 font-semibold text-lg pl-2'>Admin Dashboard</h1>
        </div>

        <Button
          onClick={logout}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Logout
        </Button>

        <>
          <div
            className={
              open
                ? 'absolute top-0 left-0 z-50 h-screen w-1/5 bg-gray-800 border border-2 border-white text-center pt-4 font-semibold text-2xl'
                : 'hidden'
            }
          >
            Menu
            <div className='flex mt-5'>
              <Icon icon={RiFileList2Line} className='pl-4 text-white' />
              <Link
                key='Competition List'
                href='/'
                className='pt-1 text-base hover:font-semibold text-white font-normal'
              >
                Competition List
              </Link>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
