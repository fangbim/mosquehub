"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/lp/Navbar";
import JadwalSholat from "../utils/api/JadwalSholat";
import { Card, Typography } from "@material-tailwind/react";
import { pOne } from "../lib/fonts";
import Loading from "../components/loading";
import Search from "../components/Search";
import DatePicker from "../components/DatePicker";

const TABLE_HEAD = ["Waktu", "Jam"];

function capitalizeFirstLetter(str) {
  return str
      .split(' ') // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
      .join(' '); // Join the words back into a single string
}

export default function Page() {
  const Getdate = new Date();
  const date = `${String(Getdate.getDate()).padStart(2, "0")} ${String(
    Getdate.getMonth() + 1
  ).padStart(2, "0")} ${Getdate.getFullYear()}`;

  const location = "Surabaya";
  const country = "ID";

  const [dataSholat, setDataSholat] = useState<any[]>([]); // Define state to store the fetched data
  const [loading, setLoading] = useState<boolean>(true); // State to show loading status
  const [selectedCity, setSelectedCity] = useState<string >(location);
  const [selectedDate, setSelectedDate] = useState<string>(date);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await JadwalSholat(selectedDate, selectedCity, country);

        if (data) {
          setDataSholat(data); // Set the fetched data
        }
      } catch (error) {
        console.error("Error fetching prayer schedule:", error);
      } finally {
        setLoading(false); // Stop loading after fetching the data
      }
    };

    fetchData(); // Fetch the data when the component mounts
  }, [selectedCity, country, selectedDate]); // Dependencies for re-fetching if location or country changes

  const relevantKeys = [
    "Imsak",
    "Fajr",
    "Sunrise",
    "Dhuhr",
    "Asr",
    "Maghrib",
    "Isha",
    "Midnight",
  ];

  const sortByTime = (a: [string, string], b: [string, string]) => {
    const timeA = new Date(`1970-01-01T${a[1]}:00`).getTime(); // Convert to timestamp
    const timeB = new Date(`1970-01-01T${b[1]}:00`).getTime();
    return timeA - timeB; // Sort ascending by time
  };
  

  return (
    <>
      <Navbar />
      <div className="mx-5 md:mx-32">
        <div className="flex flex-col my-8">
          <h1
            className={`${pOne.className} text-xl md:text-4xl text-center justify-center`}
          >
            Jadwal Sholat Wilayah <br/> <span className="text-5xl md:text-8xl">{capitalizeFirstLetter(selectedCity)}</span>
          </h1>
          <div className="w-full h-[1px] bg-black"></div>
        </div>

        <div className="flex items-center justify-center py-4">
          {loading ? (
            <Loading /> // Show loading text while fetching data
          ) : (
            <section className="w-full bg-white mb-10 md:mx-80">
              <div className="flex flex-col justify-center md:justify-end gap-8 md:flex-row md:items-center p-6">
                <DatePicker onDate={handleDateChange}/>
                <div className="flex w-full shrink-0 gap-2 md:w-max">
                  <div className="w-full md:w-72">
                    <Search onSelectCity={setSelectedCity}/>
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
                            className="font-bold leading-none md:text-xl"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(dataSholat)
                      .filter(([prayer]) => relevantKeys.includes(prayer))
                      .sort(sortByTime)
                      .map(([prayer, time], index) => {
                        const isLast = index === dataSholat.length - 1;
                        const classes = isLast
                          ? "py-4"
                          : "py-4 border-b border-gray-300";

                        return (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold items-start md:text-lg"
                              >
                                {prayer}
                              </Typography>
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
        <div className="w-full items-start pb-10">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="py-3">
            API by{" "}
            <a href="https://aladhan.com/" target="_blank">
              Al Adhan
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
