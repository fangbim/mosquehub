'use client'
import Link from 'next/link'
import Logo from './Logo'
import BTNPrimary from './button/BtnPrimary'
import React from 'react'

export default function Navbar () {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className='md:py-5 md:px-24 p-3 flex flex-wrap flex-col items-center w-full justify-between sticky top-0 z-50 bg-white md:flex-row'>
      <Link href='#header' onClick={handleScroll}>
        <Logo />
      </Link>
      <div className='flex md:gap-5 gap-3 md:text-2xl font-light items-center md:ml-auto text-lg'>
        <Link href='#header' onClick={handleScroll}>
          Home
        </Link>
        <Link href='#features' onClick={handleScroll}>
          Features
        </Link>
        <Link href='#about' onClick={handleScroll}>
          About
        </Link>
        <BTNPrimary>Get Started</BTNPrimary>
      </div>
    </div>
  )
}
