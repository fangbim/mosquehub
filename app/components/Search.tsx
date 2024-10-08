import React, { useEffect, useRef, useState } from 'react';
import { KOTA } from '../lib/kota';
import { Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


interface CitySearchProps {
    onSelectCity: (city: string) => void; // Prop type definition
  }

export default function Search({onSelectCity }) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredCities, setFilteredCities] = useState<string[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null); // Track highlighted city
    const listRef = useRef<HTMLUListElement>(null); // Reference for the city list
  
    const MAX_VISIBLE_CITIES = 5; // Limit the number of visible cities
    
    // Handle the input change and filter cities
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
  
      if (value) {
        const filtered = KOTA.cities.filter(city =>
          city.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCities(filtered);
        setHighlightedIndex(null); // Reset highlighted index
      } else {
        setFilteredCities([]);
      }
    };
  
    // Handle city click
    const handleCityClick = (city: string) => {
      console.log("Selected City:", city);
      setSearchTerm(city); // Set the search term to the clicked city
      setFilteredCities([]); // Clear the list after selecting
      setHighlightedIndex(null); // Reset highlighted index
      onSelectCity(city);
    };
  
    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prevIndex) =>
          prevIndex === null
            ? 0
            : Math.min(prevIndex + 1, filteredCities.length - 1)
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prevIndex) =>
          prevIndex === null ? 0 : Math.max(prevIndex - 1, 0)
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (highlightedIndex !== null) {
          handleCityClick(filteredCities[highlightedIndex]);
        }
      }
    };
  
    // Scroll the highlighted city into view
    useEffect(() => {
      if (listRef.current && highlightedIndex !== null) {
        const listItems = listRef.current.children;
        const highlightedItem = listItems[highlightedIndex];
  
        if (highlightedItem) {
          highlightedItem.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest', // Scroll the nearest edge of the element to the visible area
          });
        }
      }
    }, [highlightedIndex]);
  
    return (
      <div className="relative w-full max-w-md mx-auto">
        <Input
          label="Search"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="mb-2" // Add margin bottom for spacing
        />
        {filteredCities.length > 0 && (
          <ul
            ref={listRef}
            className="absolute z-10 mt-1 border border-gray-300 rounded-md max-h-40 overflow-y-auto bg-white shadow-lg" // Added absolute positioning
            style={{ width: '100%' }} // Ensure it matches the input width
          >
            {filteredCities.slice(0, MAX_VISIBLE_CITIES).map((city, index) => (
              <li
                key={index}
                onClick={() => handleCityClick(city)}
                className={`p-2 cursor-pointer ${
                  highlightedIndex === index ? 'bg-blue-100' : ''
                } hover:bg-blue-100`}
                onMouseEnter={() => setHighlightedIndex(index)} // Highlight city on mouse enter
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};
