'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface Mosque {
  id: string
  name: string
  address: string
  coverImg?: string
}

export default function SearchListMosque () {
  const [listMosque, setListMosque] = useState<Mosque[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Fetch data masjid dari API
  useEffect(() => {
    inputRef.current?.focus()

    const fetchMosques = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/mosque')
        const data = await response.json()

        // Mapping data masjid
        const mappedMosques = data.map((mosque: any) => ({
          id: mosque.id, // UUID
          name: mosque.name,
          address: mosque.address,
          coverImg: mosque.coverImg
        }))

        setListMosque(mappedMosques)
      } catch (error) {
        console.error('Error fetching mosques:', error)
      }
    }

    fetchMosques()
  }, [])

  // Filter masjid berdasarkan search term
  const filteredMosques = listMosque
    .filter(mosque =>
      searchTerm
        .toLowerCase()
        .split(' ')
        .every(term => mosque.name.toLowerCase().includes(term))
    )
    .sort(
      (a, b) =>
        a.name.toLowerCase().indexOf(searchTerm.toLowerCase()) -
        b.name.toLowerCase().indexOf(searchTerm.toLowerCase())
    )

  return (
    <div className='py-5 flex justify-center md:w-[31rem] w-screen relative px-5 md:px-0'>
      <div className='relative w-full'>
        <input
          ref={inputRef}
          className='w-full h-10 md:h-12 rounded-full bg-transparent border-white border border-opacity-50 outline-none font-light text-base md:text-2xl p-5 pr-14 md:pr-16 backdrop-blur-sm text-white placeholder-gray-200 placeholder-opacity-50 placeholder:text-sm md:placeholder:text-xl'
          placeholder='Cari masjid yang ingin kamu tahu!'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <MagnifyingGlassIcon
          strokeWidth={2}
          className='absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 text-white'
        />
        {searchTerm && filteredMosques.length > 0 && (
          <ul className='absolute z-10 left-0 right-0 mt-2 border border-gray-300 rounded-md max-h-60 overflow-y-auto bg-white shadow-lg'>
            {filteredMosques.map(mosque => (
              <li
                key={mosque.id}
                className='flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100'
              >
                {/* Gantilah URL dengan UUID */}
                <Link href={`/${mosque.id}`}>
                  {' '}
                  {/* Menggunakan UUID */}
                  <div className='flex items-center gap-3'>
                    {mosque.coverImg ? (
                      <img
                        src={mosque.coverImg}
                        alt={mosque.name}
                        className='w-12 h-12 md:w-16 md:h-16 rounded-md object-cover'
                      />
                    ) : (
                      <div className='w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-md'></div> // Placeholder jika tidak ada gambar
                    )}
                    <div>
                      <h3 className='font-semibold text-gray-700 text-sm md:text-base'>
                        {mosque.name}
                      </h3>
                      <p className='text-xs md:text-sm text-gray-500'>
                        {mosque.address}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
