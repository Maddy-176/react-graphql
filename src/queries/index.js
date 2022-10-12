export const GET_ALL_FILMS = `
  query GET_ALL_FILMS  {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        }
      }
    }
  
`;

export const GET_MOVIE_DTLS = `
 query GET_MOVIE_DTLS ($movieId: ID!){
  film(id: $movieId){
    title
    director
    producers
    releaseDate
    openingCrawl
    speciesConnection {
      species {
        name
        id
      }
    }
    
  }
 
}
`;

export const GET_ALL_PLANETS = `
query GET_ALL_PLANETS {
  allPlanets {
    planets {
      name
      climates
      terrains
      surfaceWater
      gravity
      diameter
      orbitalPeriod
      population
      rotationPeriod
    }
  }
}

`;
