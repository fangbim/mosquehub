'use client'
import Navbar from '../components/lp/Navbar'
import { Button, Input, Typography } from '@material-tailwind/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function Register () {
  const route = useRouter()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [alamat, setAlamat] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      route.push('/')
    }
  })

  const handleRegister = async e => {
    e.preventDefault()

    if (fullName === '' || email === '' || alamat === '' || phone === '' || password === '') {
      toast.error('Data tidak boleh kosong')
      return
    }

    const response = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fullName, email, alamat, phone, password })
    })

    const data = await response.json()

    if (!data) {
      toast.error('Gagal mendaftar')
      return;
    }

    if (data) {
      toast.success('Berhasil mendaftar')
      route.push('/login')
    }
  }

  return (
    <>
      <Navbar />
      <div className='w-full min-h-screen flex items-center justify-center overflow-hidden bg-register'>
        <div className='bg-[#F5F5F5] w-auto h-auto px-6 py-12 mt-16 flex flex-col items-center justify-center rounded-sm sm:rounded-3xl'>
          <Typography variant='h4' color='blue-gray'>
            Daftar Akun
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Daftar untuk memulai perjalananmu bersama kami
          </Typography>
          <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-1 flex flex-col gap-3'>
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Nama Lengkap
              </Typography>
              <Input
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                size='lg'
                placeholder='Nama Lengkap'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Email
              </Typography>
              <Input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                size='lg'
                placeholder='name@mail.com'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Alamat
              </Typography>
              <Input
                value={alamat}
                onChange={e => setAlamat(e.target.value)}
                size='lg'
                placeholder='Alamat'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
              <Typography variant='h6' color='blue-gray' className='-mb-3'>
                Phone Number
              </Typography>
              <Input
                type='number'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                size='lg'
                placeholder=''
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
                onChange={e => setPassword(e.target.value)}
                type='password'
                size='lg'
                placeholder='********'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: 'before:content-none after:content-none'
                }}
              />
            </div>
            <Button className='mt-6' fullWidth onClick={handleRegister}>
              sign up
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
              Sign up with Google
            </Button>
            <Typography color='gray' className='mt-4 text-center font-normal'>
              Sudah punya akun?{' '}
              <a href='/login' className='font-medium text-gray-900'>
                Masuk sekarang
              </a>
            </Typography>
          </form>
        </div>
      </div>
    </>
  )
}
