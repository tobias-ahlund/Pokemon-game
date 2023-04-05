const randomId = Math.ceil(Math.random() * 151);

const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

export const getData = () => {fetch(url)
    .then((resolve => {
      return resolve.json();
    }))
    .then((data => {
        return data;
    }));
}

const randomPokemon = (data) => {
    console.log(data);
}