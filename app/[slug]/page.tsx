'use client'
import { DataMasjidTemp } from '../data/masjidTemp'
import Image from 'next/image'
import { DrawerDefault } from '../components/Drawer'
import { Typography } from '@material-tailwind/react'
import { CarouselCustomArrows } from '../components/Carausel'
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { RatingWithText } from '../components/RatingBar'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false })

export default function Page ({ slug }) {
  const masjid = DataMasjidTemp.masjid[0]

  return (
    <>
      <div className='relative w-full h-[36rem]'>
        <Image
          src={masjid.image}
          alt={`img-${masjid.name}`}
          fill={true}
          objectFit='cover'
          className='rounded-b-3xl'
        />
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <div className='text-center bg-black bg-opacity-10 p-4 bg-gradient-to-r from-transparent'>
            <Typography variant='h1' className='text-white'>
              {masjid.name}
            </Typography>
            <Typography variant='h5' className='text-white'>
              {masjid.Adress}
            </Typography>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className='flex flex-col sm:flex-row  my-20 gap-12 px-2 sm:px-44  '>
        <div className='basis-1/5 space-y-6'>
          <div className='relative w-[442px] h-[700px] bg-white rounded-2xl -mt-72 p-8 border shadow-sm'>
            <div className='flex flex-col items-center'>
              <Typography variant='h3' className='item center'>
                Tentang masjid
              </Typography>
            </div>
            <div className='py-3'>
              <Typography variant='small' className='text-justify'>
                {masjid.about}
              </Typography>
            </div>
          </div>
          <div className='flex w-[442px] h-[300px] bg-white rounded-2xl border shadow-sm items-center justify-center'>
            <RatingWithText />
          </div>
        </div>
        <div className='basis-4/5 grid gap-8  '>
          <div className='flex gap-6 justify-center'>
            <div className='w-[344px] h-[208px] bg-white rounded-2xl border shadow-sm items-center justify-center flex flex-col p-3'>
              <Typography variant='h3'>Fasilitas</Typography>
              <CarouselCustomArrows>
                {masjid.facilities.map((facility, index) => (
                  <div key={index} className='flex flex-col items-center py-6'>
                    <Image
                      src={facility.icon}
                      alt={facility.name}
                      width={50}
                      height={50}
                    />
                    <Typography variant='small'>{facility.name}</Typography>
                  </div>
                ))}
              </CarouselCustomArrows>
            </div>
            <div className='w-[344px] h-[208px] bg-white rounded-2xl border shadow-sm items-center justify-center flex flex-col p-3'>
              <Typography variant='h3'>Kepengurusan</Typography>
              <CarouselCustomArrows>
                {masjid.organization.map((org, index) => (
                  <div key={index} className='flex flex-col items-center py-6'>
                    <Typography variant='h2' className=''>{org.jumlah}</Typography>
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
                    {masjid.contact.phone}
                  </Typography>
                </div>
                <div className='flex gap-2'>
                  <AtSymbolIcon className='h-6 w-6' />
                  <Typography variant='small'>
                    {masjid.contact.email}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className='grid'>
            <div className='w-full h-[500px] bg-blue-gray-50 border rounded-2xl'>
              <Map/>
            </div>
          </div>
        </div>
      </div>
      <DrawerDefault />
    </>
  )
}
