const query = `
query {
  characters {
    info {
      count
    }
    results {
      name,
      image
    }
  }
}`;

export const getCardData = () => {
  const endpoint = "https://rickandmortyapi.com/graphql";
  const headers = new Headers();
  headers.append("Content-Type", "application/graphql");

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query }),
    redirect: "follow",
  };

  return fetch(endpoint, requestOptions).then((res) => res.json());
};

export const getMockData = () => {
  return [
    {
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      name: "Summer Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      name: "Beth Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      name: "Jerry Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
    {
      name: "Abadango Cluster Princess",
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    },
    {
      name: "Abradolf Lincler",
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    },
    {
      name: "Adjudicator Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    },
    {
      name: "Agency Director",
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    },
    {
      name: "Alan Rails",
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    },
    {
      name: "Albert Einstein",
      image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    },
    {
      name: "Alexander",
      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    },
    {
      name: "Alien Googah",
      image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
    },
    {
      name: "Alien Morty",
      image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    },
    {
      name: "Alien Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    },
    {
      name: "Amish Cyborg",
      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    },
    {
      name: "Annie",
      image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
    },
    {
      name: "Antenna Morty",
      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    },
    {
      name: "Antenna Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    },
    {
      name: "Ants in my Eyes Johnson",
      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    },
  ];
};
