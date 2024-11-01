'use client'
import Link from 'next/link'
import Logo from './Logo'
import BTNPrimary from '../button/BtnPrimary'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Profile from '../Profile'


export default function Navbar () {
  const [isSignUp, setIsSignUp] = React.useState(false)
  const pathName = usePathname();
  const route = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token'); // Periksa token autentikasi
    if (token) {
      setIsSignUp(true); // Jika token ada, pengguna dianggap login
    }
  }, []);

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
    <div className='fixed md:py-5 md:px-24 p-3 flex flex-wrap flex-col items-center w-full justify-between top-0 z-50 bg-white md:flex-row'>
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
      
      {isSignUp ? <Profile/> : <BTNPrimary path={'/register'} onClick={null}>Get Started</BTNPrimary>}
        
    </div> 
     ) : <div className='flex md:gap-5 gap-3 md:text-2xl font-light items-center md:ml-auto text-lg'>
     {isSignUp ? <Profile/> : <BTNPrimary path={'/register'} onClick={null}>Get Started</BTNPrimary>}
   </div> } 
    </div>
  )
}

