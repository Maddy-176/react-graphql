import React from 'react'
import { useQuery, gql } from '@apollo/client';
import {GET_ALL_FILMS} from "../queries/index"
// const GET_ALL_FILMS = gql`
//   query GET_ALL_FILMS  {
//     allFilms {
//       films {
//         title
//         director
//         releaseDate
//         speciesConnection {
//           species {
//             name
//             classification
//             homeworld {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const Movies=()=> {
    const { loading, error, data } = useQuery(gql`${GET_ALL_FILMS}`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  return (
    <>
    <h2>Movies</h2>

    <table className="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">Movie Title</th>
      <th scope="col">Director</th>
      <th scope="col">Release Date</th>
      {/* <th scope="col">Species Connection</th> */}
    </tr>
  </thead>
  <tbody>
  {data.allFilms.films.map((film,index)=>(
  <tr  key={index}>
    <td>{film.title}</td>
    <td>{film.director}</td>
    <td>{film.releaseDate}</td>
    
    </tr>
       
    ))}
    
  </tbody>
</table>
   

        {console.log("fetching data",data.allFilms.films)}

    </>
  )
}

export default Movies