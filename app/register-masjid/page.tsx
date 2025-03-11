'use client'
import { useState } from 'react'
import Navbar from '../components/lp/Navbar'
import { WithAuth } from '../components/WithAuth'
import {
  Form,
  Input,
  Textarea,
  Select,
  SelectItem,
  Button
} from '@nextui-org/react'
import MapInput from '../components/Map/MapInput'

export const fasilitas = [
  { key: 'toilet', label: 'Toilet' },
  { key: 'wudhu', label: 'Wudhu' },
  { key: 'parkir', label: 'Parkir' },
  { key: 'kantin', label: 'Kantin' },
  { key: 'perpustakaan', label: 'Perpustakaan' },
  { key: 'playground', label: 'Playground' },
  { key: 'wifi', label: 'Free Wifi' }
]

const RegisterMasjid = () => {
  const [action, setAction] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  const [formData, setFormData] = useState({
    latitude: -7.257472, // Default latitude
    longitude: 112.752088, // Default longitude
    address: ''
  })

  console.log(formData)
  
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleMapLocationChange = ({ latitude, longitude, address }) => {
    setFormData(prev => ({
      ...prev,
      latitude,
      longitude,
      address
    }))
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-50 py-40'>
        <div className='bg-white rounded-2xl shadow-lg px-10 max-w-4xl mx-auto py-20'>
          <h1 className='text-xl font-bold text-center mb-6'>Create Mosque</h1>
          <Form
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
            validationBehavior='native'
            onReset={() => setAction('reset')}
            onSubmit={e => {
              e.preventDefault()
              let data = Object.fromEntries(new FormData(e.currentTarget))

              setAction(`submit ${JSON.stringify(data)}`)
            }}
          >
            <Input
              isRequired
              errorMessage='Masukkan Nama Masjid'
              label='Nama Masjid'
              labelPlacement='outside'
              name='namaMasjid'
              placeholder='e.g Masjid Agung Surabaya'
              type='text'
            />
            <Input
              isRequired
              errorMessage='Masukkan Alamat Masjid'
              label='Alamat'
              labelPlacement='outside'
              name='alamat'
              placeholder='e.g jl. Kebon Rojo No. 1'
              type='text'
            />
            <Textarea
              isRequired
              className='max-w-full'
              label='Deskripsi'
              labelPlacement='outside'
              placeholder='Masukkan deskripsi masjid (sejarah, visi, misi, dll) maksimal 950 karakter'
            />
            <Select
              className='max-w-full'
              label='Fasilitas'
              labelPlacement='outside'
              placeholder='Pilih fasilitas masjid'
              selectionMode='multiple'
            >
              {fasilitas.map(fasilitas => (
                <SelectItem key={fasilitas.key}>{fasilitas.label}</SelectItem>
              ))}
            </Select>
            <Input
              isRequired
              errorMessage='Masukkan No Telepon'
              label='No Telepom'
              labelPlacement='outside'
              name='telp'
              placeholder='e.g 085125763542'
              type='number'
            />
            <Input
              isRequired
              errorMessage='Masukkan Email'
              label='Email'
              labelPlacement='outside'
              name='email'
              placeholder='e.g masjidku@gmail.com'
              type='email'
            />
            <Input
              errorMessage='Masukkan Username Facebook'
              label='Facebook'
              labelPlacement='outside'
              name='facebook'
              placeholder='e.g masjid.ku'
              type='text'
            />
            <Input
              errorMessage='Masukkan Username Instagram'
              label='Instagram'
              labelPlacement='outside'
              name='instagram'
              placeholder='e.g masjid.ku'
              type='text'
            />
            <Input
              errorMessage='Masukkan Username X'
              label='X'
              labelPlacement='outside'
              name='x'
              placeholder='e.g masjid.ku'
              type='text'
            />
            <Input
              errorMessage='Masukkan Username Facebook'
              label='Lokasi'
              readOnly
              labelPlacement='outside'
              name='lokasi'
              value={formData.address}
              onChange={handleInputChange}
              type='text'
            />
            <Input
              isRequired
              errorMessage='Upload Foto Masjid'
              label='Foto Cover Masjid'
              labelPlacement='outside'
              name='fotoMasjid'
              placeholder='e.g masjid.ku'
              type='file'
              onChange={imageChange}
              accept='image/*'
            />
            {selectedImage && (
          <div className='w-full h-40 overflow-hidden rounded-md border border-gray-300'> 
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
            />
          </div>
        )}
            <div className='w-full h-40 rounded-lg overflow-hidden col-span-1'>
              <MapInput
                latitude={formData.latitude}
                longitude={formData.longitude}
                onLocationChange={handleMapLocationChange}
              />
            </div>
            <div className=' w-full col-span-2 py-6'>
              <Button
                color='primary'
                type='submit'
                className='w-full'
                size='lg'
              >
                Submit
              </Button>
            </div>

            {action && (
              <div className='text-small text-default-500'>
                Action: <code>{action}</code>
              </div>
            )}
          </Form>
        </div>
      </div>
    </>
  )
}

export default WithAuth(RegisterMasjid)
