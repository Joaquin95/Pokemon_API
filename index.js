document.getElementById("fetchButton").addEventListener("click", fetchData);

async function fetchData() {

  try {

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    

    if (!response.ok) {
      throw new Error("Pokemon not found");
    }

    const data = await response.json();
    document.getElementById("pokemonSprite").src = data.sprites.front_default;
    document.getElementById("pokemonNameDisplay").textContent = data.name.toUpperCase();
    document.getElementById("pokemonType").textContent = `Type: ${data.types[0].type.name}`;


    document.getElementById("pokemonCard").style.display = "block";
    document.getElementById("pokemonSprite").style.display = "block";


  } 
  catch (error) {
    console.log(error);
    alert("Oops!!! " + error.message);
  }
}
