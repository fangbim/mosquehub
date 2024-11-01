import { DataMasjidTemp } from '../data/masjidTemp'
import Image from 'next/image'
import { roboto } from '../lib/fonts'

export default function Page ({ slug }) {
  const masjid = DataMasjidTemp.masjid[0]

  return (
    <>
      <div className='relative w-full h-[36rem]'>
        <div className='absolute bottom-0 left-0 py-6 px-6 md:px-12 z-10 w-full lg::w-2/4 bg-gradient-to-t from-black to-transparent '>
          <h1
            className={`${roboto.className} text-4xl md:text-5xl font-bold leading-tight tracking-wide text-white`}
          >
            <span className='font-light text-2xl md:text-3xl'>
              {masjid.Adress}
              <br />
            </span>
            {masjid.name}
          </h1>
        </div>
        <Image
          src={masjid.image}
          alt={`img-${masjid.name}`}
          fill={true}
          objectFit='cover'
          className=' rounded-b-3xl'
        />
      </div>
      <div>
        <h1>{masjid.name}</h1>
        <p>{masjid.description}</p>
      </div>
    </>
  )
}
