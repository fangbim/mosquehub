'use client'
import Link from 'next/link'
import Logo from './Logo'
import BTNPrimary from '../button/BtnPrimary'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Profile from '../Profile'
import { Drawer, IconButton, Typography } from '@material-tailwind/react'
import { Bars3Icon } from '@heroicons/react/24/solid'


export default function Navbar () {
  const [isSignUp, setIsSignUp] = React.useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const pathName = usePathname();
  const route = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token'); // Check authentication token
    if (token) {
      setIsSignUp(true); // If token exists, user is considered logged in
    }
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault()
    if (href.startsWith("#")) {
      const targetId = href.replace(/.*#/, '');
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({ behavior: 'smooth' });
    } else {
      route.push(href)
    }
  };

  const isHomePage = pathName === '/';

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className='fixed md:py-5 md:px-24 p-3 flex items-center w-full justify-between top-0 z-50 bg-white md:flex-row'>
      <Link href='/' onClick={(e) => handleScroll(e, '/')}>
        <Logo />
      </Link>

      {/* Button outside drawer on mobile */}
      <div className='flex items-center gap-2 md:hidden'>
        {isSignUp ? <Profile /> : <BTNPrimary onClick={''} path='/register'>Get Started</BTNPrimary>}

        {/* Drawer Toggle Icon */}
        {isHomePage && (
          <IconButton onClick={toggleDrawer} variant='text' color='blue-gray'>
            <Bars3Icon className='w-8 h-8' />
          </IconButton>
        )}
      </div>

      {/* Menu for larger screens */}
      {isHomePage ? (
        <div className='hidden md:flex gap-5 text-2xl font-light items-center ml-auto'>
          <Link href='#header' onClick={(e) => handleScroll(e, '#header')}>
            Home
          </Link>
          <Link href='#features' onClick={(e) => handleScroll(e, '#features')}>
            Features
          </Link>
          <Link href='#about' onClick={(e) => handleScroll(e, '#about')}>
            About
          </Link>
          {isSignUp ? <Profile /> : <BTNPrimary onClick={''} path='/register'>Get Started</BTNPrimary>}
        </div>
      ) : (
        <div className='hidden md:flex gap-5 text-2xl font-light items-center ml-auto'>
          {isSignUp ? <Profile /> : <BTNPrimary onClick={''} path='/register'>Get Started</BTNPrimary>}
        </div>
      )}

      {/* Drawer for Mobile */}
      <Drawer open={isDrawerOpen} onClose={toggleDrawer} className='p-4'>
        <div className='mb-6 flex items-center justify-between'>
          <Typography variant='h5' color='blue-gray'>
            Menu
          </Typography>
          <IconButton variant='text' color='blue-gray' onClick={toggleDrawer}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </IconButton>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col gap-4 mb-4'>
          <Link href='#header' onClick={(e) => { handleScroll(e, '#header'); toggleDrawer(); }}>
            Home
          </Link>
          <Link href='#features' onClick={(e) => { handleScroll(e, '#features'); toggleDrawer(); }}>
            Features
          </Link>
          <Link href='#about' onClick={(e) => { handleScroll(e, '#about'); toggleDrawer(); }}>
            About
          </Link>
        </div>
      </Drawer>
    </div>
  );
}