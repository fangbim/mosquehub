export default async function Dzikir(condition: string) {
  try {
    const res = await fetch(`/api/dzikir/${condition}`, {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
