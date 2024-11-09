'use client'
import { useState } from 'react';
import Navbar from '../components/lp/Navbar';
import { WithAuth } from '../components/WithAuth';

const RegisterMasjid = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        image: '',
        description: '',
        about: '',
        facilities: '',
        organization: '',
        contactPhone: '',
        contactEmail: '',
        socialMedia: '',
        locationLatitude: '',
        locationLongitude: '',
        rating: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };
    
      return (
        <>
        <Navbar/>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-44 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Create Mosque</h2>
          <label className="block mb-2">
            Mosque Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Image URL:
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            About:
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Facilities (comma-separated):
            <input
              type="text"
              name="facilities"
              value={formData.facilities}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Organization (JSON format):
            <textarea
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Contact Phone:
            <input
              type="tel"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Contact Email:
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Social Media (JSON format):
            <textarea
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
    
          <label className="block mb-2">
            Location Latitude:
            <input
              type="number"
              name="locationLatitude"
              value={formData.locationLatitude}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              step="any"
              required
            />
          </label>
    
          <label className="block mb-2">
            Location Longitude:
            <input
              type="number"
              name="locationLongitude"
              value={formData.locationLongitude}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              step="any"
              required
            />
          </label>
    
          <label className="block mb-2">
            Rating:
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              step="0.1"
              min="0"
              max="5"
              required
            />
          </label>
    
          <button
            type="submit"
            className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Mosque
          </button>
        </form>
        </>
    );
}

export default WithAuth(RegisterMasjid);