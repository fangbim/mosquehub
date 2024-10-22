export default async function JadwalSholat(date : string ,city: string, country: string) {
  try {

    const res = await fetch(`https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}`, {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    if (data && data.data && data.data.timings) {
      return data.data.timings;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
