'use client'
import Link from 'next/link'
import Logo from './Logo'
import BTNPrimary from '../button/BtnPrimary'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar () {
  const pathName = usePathname();
  const route = useRouter()
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href : any) => {
    e.preventDefault()

    if (href.startsWith("#")) {
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, '');

      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      route.push(href)
    }

    
  };

  const isHomePage = pathName == '/'


  return (
    <div className='md:py-5 md:px-24 p-3 flex flex-wrap flex-col items-center w-full justify-between sticky top-0 z-50 bg-white md:flex-row'>
      <Link href='/' onClick={(e) => handleScroll(e, '/')}>
        <Logo />
      </Link>
     {isHomePage ? (
      <div className='flex md:gap-5 gap-3 md:text-2xl font-light items-center md:ml-auto text-lg'>
      <Link href='#header' onClick={(e) => handleScroll(e, '#header')}>
        Home
      </Link>
      <Link href='#features' onClick={(e) => handleScroll(e, '#features')}>
        Features
      </Link>
      <Link href='#about' onClick={(e) => handleScroll(e, '#about')}>
        About
      </Link>
      <BTNPrimary>Get Started</BTNPrimary>
    </div> 
     ) : <div className='flex md:gap-5 gap-3 md:text-2xl font-light items-center md:ml-auto text-lg'>
     <BTNPrimary>Get Started</BTNPrimary>
   </div> } 
    </div>
  )
}
