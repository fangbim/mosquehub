

export default async function getSurat () {
    const surat : number = Math.floor(Math.random() * 114) + 1;
    
    try {
      const res = await fetch('https://equran.id/api/v2/surat/' + surat);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();

    } catch (error) {
      console.log(error); 
    }
  }