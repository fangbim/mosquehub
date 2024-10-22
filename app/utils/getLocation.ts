import { useEffect, useState } from "react";

export function GetLocation () {
    const defaultCity = "Surabaya"
    const [city, setCity] = useState<string>(defaultCity);

    useEffect(() => {
        const getLocation = () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              async (position) => {
                console.log("Geolocation berhasil"); // Tambahkan log setelah getCurrentPosition
                
                const { latitude, longitude } = position.coords;
                const API_KEY_OPENCAGE = '5203e019312b4570b0fc47bc1f358f40'
                console.log(`latitude: ${latitude}, longitude: ${longitude}`);
                
                try {
                  const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY_OPENCAGE}`)
                  if (!res.ok) {
                    throw new Error('Failed to fetch city data');
                  }
    
                  const data = await res.json();
                  console.log("Respons API:", data); 
    
                  const city = data.results[0].components.city ||
                             data.results[0].components.town ||
                             data.results[0].components.village ||
                             data.results[0].components.state || 
                             data.results[0].components.country;
                  setCity(city)
                } catch (error) {
                  return "Unable to retrieve city name"
                }
              },
              (error) => {
                console.error("Geolocation error: ", error);
              }
            );
          } else {
            console.error("Geolocation not supported");
          }
        };
    
        getLocation();
      }, [])

      return city;
}