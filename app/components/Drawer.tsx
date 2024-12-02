import React from 'react'
import Image from 'next/image'
import { Drawer, IconButton } from '@material-tailwind/react'
import { oswald } from '../lib/fonts'
import Link from 'next/link'
import Features from './lp/Features'

export function DrawerDefault () {
  const [open, setOpen] = React.useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <React.Fragment>
      <div className='fixed top-4 left-4 z-50'>
        <button className='' onClick={openDrawer}>
          <Image
            width={80}
            height={80}
            src='/images/logo4.png'
            alt='logo'
            className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20'
          />
        </button>
      </div>
      <Drawer open={open} onClose={closeDrawer} className='p-4'>
        <div className='mb-6 flex items-center justify-between'>
          <Link href='/'>
            <div className='px-3 items-center h-fit w-fit justify-center'>
              <h1
                className={`${oswald.className} text-2xl  sm:text-4xl font-bold cursor-pointer`}
              >
                Mosque<span className='text-primary'>Hub</span>
              </h1>
              <h5 className='font-light -tracking-[-0.27em] text-[8px] sm:text-[12px]'>
                Solusi Digital Umat
              </h5>
            </div>
          </Link>
          <IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </IconButton>
        </div>
      </Drawer>
    </React.Fragment>
  )
}
