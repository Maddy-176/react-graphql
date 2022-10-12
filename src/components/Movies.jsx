import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_FILMS } from "../queries/index";
import { useNavigate } from "react-router";

import "../styles/movies.css";
import Button from "../reusableComponents/Button";

const Movies = () => {
  const { loading, error, data } = useQuery(
    gql`
      ${GET_ALL_FILMS}
    `
  );

  let navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <>
      <h2>Movies</h2>

      <div className="navigate-btn-container">
        <Button
          className={"navigate-back-btn"}
          btnTxt={"Back"}
          onClick={() => navigate("/")}
        />
      </div>

      <table
        className="table table-striped table-bordered"
        style={{ width: "80%", margin: "auto" }}
      >
        <thead>
          <tr>
            <th scope="col">Movie Title</th>
            <th scope="col">Director</th>
            <th scope="col">Release Date</th>
          </tr>
        </thead>
        <tbody>
          {data.allFilms.films.map((film, index) => (
            <tr
              key={index}
              onClick={() => navigate(`/movies/${film.id}`)}
              className="movie-row"
            >
              <td>{film.title}</td>
              <td>{film.director}</td>
              <td>{film.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
