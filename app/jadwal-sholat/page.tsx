"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/lp/Navbar";
import JadwalSholat from "../utils/api/JadwalSholat";
import { Card, Typography } from "@material-tailwind/react";
import { pOne } from "../lib/fonts";
import Loading from "../components/loading";
import Search from "../components/Search";
import DatePicker from "../components/DatePicker";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { GetLocation } from "../utils/getLocation";
import Footer from "../components/lp/Footer";

const TABLE_HEAD = ["Waktu Sholat", "Jam"];

export default function Page() {
  const today = new Date();
  const date = `${String(today.getDate()).padStart(2, "0")} ${String(
    today.getMonth() + 1
  ).padStart(2, "0")} ${today.getFullYear()}`;

  const options : Intl.DateTimeFormatOptions = { 
    weekday: 'long',  
    year: 'numeric',  
    month: 'long',    
    day: 'numeric'    
  };

  const dateIDN = today.toLocaleDateString('id-ID', options);
  const country = "ID";
  const city = GetLocation()

  const [dataSholat, setDataSholat] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [selectedCity, setSelectedCity] = useState<string>(' ');
  const [selectedDate, setSelectedDate] = useState<string>(date);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if(city) {
      setSelectedCity(city)
    } 
  }, [city])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await JadwalSholat(selectedDate, selectedCity, country);

        if (data) {
          setDataSholat(data);
          console.log(data);
          console.log(selectedCity)
        }
      } catch (error) {
        console.error("Error fetching prayer schedule:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [selectedCity, country, selectedDate]); 

  const relevantKeys = [
    {
      time: "Imsak",
      icon: "imsak",
    },
    {
      time: "Fajr",
      icon: "fajr",
    },
    {
      time: "Sunrise",
      icon: "sunrise",
    },
    {
      time: "Dhuhr",
      icon: "dhuhr",
    },
    {
      time: "Asr",
      icon: "asr",
    },
    {
      time: "Maghrib",
      icon: "maghrib",
    },
    {
      time: "Isha",
      icon: "isha",
    },
    {
      time: "Midnight",
      icon: "midnight",
    },
  ];

  const sortByTime = (a: [string, string], b: [string, string]) => {
    const timeA = new Date(`1970-01-01T${a[1]}:00`).getTime(); // Convert to timestamp
    const timeB = new Date(`1970-01-01T${b[1]}:00`).getTime();
    return timeA - timeB; // Sort ascending by time
  };

  return (
    <>
      <Navbar />
      <div className="mx-5 md:mx-32 mt-36">
        <div className="flex flex-col md:flex-row my-8 justify-center md:justify-between items-center md:items-end">
          <h1
            className={`${pOne.className} text-5xl md:text-8xl text-start justify-start`}
          >
            Waktu Sholat
            <br />
          </h1>
          <div className="text-lg md:text-xl">{dateIDN}</div>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex items-center w-auto h-screen justify-center py-4">
          {loading ? (
            <Loading /> 
          ) : (
            <section className="w-full bg-white mb-10 md:mx-80">
              <div className="flex flex-col justify-center md:justify-between gap-8 md:flex-row md:items-center p-6">
                <div className="flex items-center justify-center gap-0 md:gap-1">
                  <MapPinIcon strokeWidth={2} className="w-9" />
                  <span className="text-xl ">
                    { selectedCity }
                  </span>
                </div>
                <div className="flex gap-2 md:gap-7 flex-col sm:flex-row">
                  <DatePicker onDate={handleDateChange} />
                  <div className="flex w-full shrink-0 gap-2 md:w-max">
                    <div className="w-full md:w-72">
                      <Search onSelectCity={setSelectedCity} />
                    </div>
                  </div>
                </div>
              </div>

              <Card className="h-full w-full border border-gray-300 px-6">
                <table className="w-full min-w-max table-auto text-center">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-gray-300 pb-4 pt-10"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold leading-none md:text-xl text-primary"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(dataSholat)
                      .filter(([prayer]) =>
                        relevantKeys.some((key) => key.time.includes(prayer))
                      )
                      .sort(sortByTime)
                      .map(([prayer, time], index) => {
                        const isLast = index === dataSholat.length - 1;
                        const classes = isLast
                          ? "py-4"
                          : "py-4 border-b border-gray-300";
                        const matchedKey = relevantKeys.find(
                          (key) => key.time === prayer
                        );

                        return (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className={`${classes} flex items-center justify-center`}>
                                <div className="flex w-24 items-center gap-2 md:gap-3">
                                    <Image
                                      src={`/icons/time-prayer/${matchedKey?.icon}.png`}
                                      alt={`icon${matchedKey?.icon}`}
                                      width={30}
                                      height={30}
                                    />
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-bold items-start md:text-lg"
                                    >
                                      {prayer}
                                    </Typography>
                                </div>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                className="font-normal text-gray-600 md:text-lg"
                              >
                                {time}
                              </Typography>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </Card>
            </section>
          )}
        </div>
      </div>
      <Footer credit="API by Al Adhan" linkAPI="https://aladhan.com/"/>
    </>
  );
}
