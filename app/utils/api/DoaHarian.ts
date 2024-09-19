export default async function DoaHarian () {
    try {
      const res = await fetch('https://open-api.my.id/api/doa');

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();

    } catch (error) {
      console.log(error); 
    }
  }