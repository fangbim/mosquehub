'use client'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/lp/Navbar';
import { Button, Input, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Login() {
  const route = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      route.push('/')
    }
  })

  const handleSignIn = async (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      toast.error('Masukkan email dan password')
      return
    } 

    const response = await fetch('http://localhost:8080/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json();

    if (!data.token) {
      toast.error('Email atau password salah')
      return;
    }
    
    if (data.token) {
      localStorage.setItem('token', data.token)
      route.push('/');
    }
  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-login">
        <div className='bg-[#F5F5F5] w-auto h-auto px-6 py-12 flex flex-col mt-44 sm:mt-0 items-center justify-center rounded-sm sm:rounded-3xl'>
          <ArrowRightEndOnRectangleIcon className='h-16 w-16' />
          <Typography variant='h4' color='blue-gray'>
            Selamat datang kembali
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            silahkan masuk dengan email dan password
          </Typography>
          <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-1 flex flex-col gap-3'>
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Email
              </Typography>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size='lg'
                placeholder='name@mail.com'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Password
              </Typography>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                size='lg'
                placeholder='********'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
            </div>
            <Button className='mt-6' fullWidth onClick={handleSignIn}>
              sign in
            </Button>
            <Button
              variant='outlined'
              className='flex w-full items-center justify-center gap-2 mt-3'
            >
              <img
                src='https://docs.material-tailwind.com/icons/google.svg'
                alt='google'
                className='h-4 w-4'
              />
              Sign in with Google
            </Button>
            <Typography color='gray' className='mt-4 text-center font-normal'>
              Belum punya akun?{' '}
              <a href='/register' className='font-medium text-gray-900'>
                Daftar sekarang
              </a>
            </Typography>
          </form>
        </div>
      </div>
    </>
  )
}
