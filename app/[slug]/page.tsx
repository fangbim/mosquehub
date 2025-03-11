'use client'
import Image from 'next/image'
import { DrawerDefault } from '../components/Drawer'
import { Typography } from '@material-tailwind/react'
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { pOne } from '../lib/fonts'

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false })

interface Mosque {
  id: string
  name: string
  address: string
  about: string
  coverImg: string
  phone: string
  email: string
  facilities: { facility: { name: string; icon: string } }[]
  organizations: { name: string; jumlah: number }[]

  coordinates: { lat: number; lng: number }
}

export default function MosqueDetail ({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [mosque, setMosque] = useState<Mosque | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  // Fetch mosque data by UUID
  useEffect(() => {
    const fetchMosque = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/mosque/${slug}`)
        if (!response.ok) throw new Error('Failed to fetch mosque data')
        const data = await response.json()
        setMosque(data)
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchMosque()
  }, [slug])

  if (error) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Typography variant='h3'>{error}</Typography>
      </div>
    )
  }

  if (!mosque) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Typography variant='h3'>Loading...</Typography>
      </div>
    )
  }

  return (
    <>
      <main className='w-full h-screen p-8'>
        <div className='relative w-full h-3/4 rounded-3xl '>
          <Image
            src={mosque.coverImg}
            alt='masjid'
            layout='fill'
            objectFit='cover'
            className='rounded-3xl'
          />
          <div
            className={`absolute left-0 w-fit md:w-3/4 xl:w-1/3 bg-white bg-opacity-95 px-8 py-4 md:py-12 rounded-xl m-4 border transition-all duration-500 ${
              isExpanded ? 'bottom-auto top-0' : 'top-auto bottom-0'
            }`}
          >
            <h1
              className={`${pOne.className} text-3xl xl:text-6xl  font-bold text-gray-800 break-words`}
            >
              {mosque.name}
            </h1>
            <p className='text-gray-700 text-xs font-medium'>
              {mosque.address}
            </p>
            <div
              className={` mt-8  overflow-hidden transition-all duration-500 ${
                isExpanded ? 'max-h-[none]' : 'max-h-[12rem]'
              }`}
            >
              <p className='text-gray-700 font-light text-xs md:text-base text-justify'>
                {mosque.about}
              </p>
            </div>

            {/* Button for Toggle */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='mt-4 text-blue-600 hover:text-blue-gray-300 font-medium'
            >
              {isExpanded ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya'}
            </button>
          </div>
        </div>

        <div className='gap-4 mt-4 p-8'>
          <div className='flex flex-col md:flex-row h-auto'>
            <div className='w-1/2'>
              <h1 className='text-3xl text-gray-900 font-normal'>Fasilitas</h1>
              <div className='grid grid-cols-1 md:grid-cols-3'>
                {mosque.facilities.map((facility, index) => (
                  <div key={index} className='flex items-center p-4 gap-3'>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center border-4 border-gray-400'>
                      <Image
                        src={facility.facility.icon}
                        alt={facility.facility.name}
                        width={35}
                        height={35}
                      />
                    </div>
                    <p className='text-gray-800 font-light text-xl'>
                      {facility.facility.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-1/2  items-center px-16'>
              <div className='w-auto h-auto flex justify-center'>
                <div className='w-fit h-fit bg-secondary rounded-2xl px-12 py-6'>
                  <p className='text-2xl font-semibold text-white py-2'>
                    Kontak Informasi
                  </p>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center text-white gap-2'>
                      <AtSymbolIcon className='h-6 w-6' />
                      <p>{mosque.email}</p>
                    </div>
                    <div className='flex items-center text-white gap-2'>
                      <PhoneIcon className='h-6 w-6' />
                      <p>{mosque.phone}</p>
                    </div>
                    <p className='text-lg font-semibold text-white py-2'>
                      Sosial Media
                    </p>
                    <div className='flex flex-row items-center justify-center gap-4 w-full'>
                      <button
                        type='button'
                        className='inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
                        style={{ backgroundColor: '#1877f2' }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
                        style={{ backgroundColor: '#c13584' }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
                        style={{ backgroundColor: '#1da1f2' }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl text-gray-900 font-normal'>Lokasi</h1>
            <div className='w-full h-[500px] bg-blue-gray-50 border rounded-2xl overflow-hidden'>
              <Map
                latitude={mosque.coordinates.lat}
                longitude={mosque.coordinates.lng}
              />
            </div>
          </div>
        </div>
      </main>
      <DrawerDefault />
    </>
  )
}
