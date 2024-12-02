'use client'
import { DataMasjidTemp } from '../data/masjidTemp'
import Image from 'next/image'
import { DrawerDefault } from '../components/Drawer'
import { Typography } from '@material-tailwind/react'
import { CarouselCustomArrows } from '../components/Carausel'
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { RatingWithText } from '../components/RatingBar'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false })

interface Mosque {
  id: string
  name: string
  address: string
  about: string
  coverImg: string
  phone: string,
  email: string, 
  facilities: { facility: { name: string; icon: string } }[]
  organizations: { name: string; jumlah: number }[]
  
  coordinates: { lat: number; lng: number }
}

export default function MosqueDetail ({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [mosque, setMosque] = useState<Mosque | null>(null)
  const [error, setError] = useState<string | null>(null)

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

  console.log(mosque)

  return (
    <>
      <div className='relative w-full h-[36rem]'>
        <Image
          src={mosque.coverImg}
          alt={`img-${mosque.name}`}
          fill={true}
          objectFit='cover'
          className='rounded-b-3xl'
        />
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <div className='text-center bg-black bg-opacity-10 p-4 bg-gradient-to-r from-transparent'>
            <Typography variant='h1' className='text-white'>
              {mosque.name}
            </Typography>
            <Typography variant='h5' className='text-white'>
              {mosque.address}
            </Typography>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className='flex flex-col sm:flex-row my-20 gap-12 px-2 sm:px-44'>
        <div className='basis-1/5 space-y-6'>
          <div className='relative w-[442px] h-[700px] bg-white rounded-2xl -mt-72 p-8 border shadow-sm'>
            <div className='flex flex-col items-center'>
              <Typography variant='h3'>Tentang Masjid</Typography>
            </div>
            <div className='py-3'>
              <Typography variant='small' className='text-justify'>
                {mosque.about}
              </Typography>
            </div>
          </div>
          <div className='flex w-[442px] h-[300px] bg-white rounded-2xl border shadow-sm items-center justify-center'>
            <RatingWithText />
          </div>
        </div>
        <div className='basis-4/5 grid gap-8'>
          <div className='flex gap-6 justify-center'>
            <div className='w-[344px] h-[208px] bg-white rounded-2xl border shadow-sm items-center justify-center flex flex-col p-3'>
              <Typography variant='h3'>Fasilitas</Typography>
              <CarouselCustomArrows>
                {mosque.facilities.map((facility, index) => (
                  <div key={index} className='flex flex-col items-center py-6'>
                    {/* Akses facility.facility.icon dan facility.facility.name */}
                    <Image
                      src={facility.facility.icon} // Mengambil icon dari property facility
                      alt={facility.facility.name} // Mengambil nama dari property facility
                      width={50}
                      height={50}
                    />
                    <Typography variant='small'>
                      {facility.facility.name}
                    </Typography>
                  </div>
                ))}
              </CarouselCustomArrows>
            </div>
            <div className='w-[344px] h-[208px] bg-white rounded-2xl border shadow-sm items-center justify-center flex flex-col p-3'>
              <Typography variant='h3'>Kepengurusan</Typography>
              <CarouselCustomArrows>
                {mosque.organizations.map((org, index) => (
                  <div key={index} className='flex flex-col items-center py-6'>
                    {/* Akses jumlah dan name langsung dari objek org */}
                    <Typography variant='h2'>{org.jumlah}</Typography>
                    <Typography variant='small'>{org.name}</Typography>
                  </div>
                ))}
              </CarouselCustomArrows>
            </div>
            <div className='w-[344px] h-[208px] bg-white rounded-2xl border shadow-sm flex flex-col p-3'>
              <Typography variant='h3' className='text-center'>
                Kontak Informasi
              </Typography>
              <div className='flex flex-col items-start gap-2 p-6'>
                <div className='flex gap-2'>
                  <PhoneIcon className='h-6 w-6' />
                  <Typography variant='small'>
                    {mosque.phone}
                  </Typography>
                </div>
                <div className='flex gap-2'>
                  <AtSymbolIcon className='h-6 w-6' />
                  <Typography variant='small'>
                    {mosque.email}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className='grid'>
            <div className='w-full h-[500px] bg-blue-gray-50 border rounded-2xl'>
              <Map
                latitude={mosque.coordinates.lat}
                longitude={mosque.coordinates.lng}
              />
            </div>
          </div>
        </div>
      </div>
      <DrawerDefault />
    </>
  )
}
