import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_ALL_FILMS = gql`
  query GET_ALL_FILMS  {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

const Movies=()=> {
    const { loading, error, data } = useQuery(GET_ALL_FILMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  return (
    <>
    <h2>Movies</h2>
    {data.allFilms.films.map((film,index)=>(
        <>
        <div>
        {film.title}
        </div>
        </>
    ))}

        {console.log("fetching data",data.allFilms.films)}

    </>
  )
}

export default Movies