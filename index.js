fetchData();

async function fetchData() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/Squirtle`);

    if (!response.ok) {
      throw new Error("Could not fetch");
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
