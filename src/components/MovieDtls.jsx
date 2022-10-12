import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_MOVIE_DTLS } from "../queries";
import { useParams } from "react-router";
import "../styles/movies.css";
import Button from "../reusableComponents/Button";
import { useNavigate } from "react-router";

function MovieDtls() {
  let navigate = useNavigate();

  const { movieId } = useParams();
  const { loading, error, data } = useQuery(
    gql`
      ${GET_MOVIE_DTLS}
    `,
    {
      variables: { movieId },
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const {
    director,
    openingCrawl,
    producers,
    releaseDate,
    speciesConnection,
    title,
  } = data.film;

  return (
    <>
      <div className=" row movie-container shadow-lg p-3 mb-5 bg-white rounded  ">
        <div className="col movie-dtls-col">
          <b>Name: </b>
          {title}
        </div>
        <div className="col movie-dtls-col">
          <b>Director: </b>
          {director}
        </div>

        <div className="w-100 col-break"></div>

        <div className="col movie-dtls-col">
          <b>Producer: </b>
          {producers}
        </div>

        <div className="col movie-dtls-col">
          <b>Release Date: </b>
          {releaseDate}
        </div>
        <div className="w-100 col-break"></div>

        <div className="col movie-dtls-col">
          <b>Species Connection: </b>
          {speciesConnection.species.map((species) => (
            <>
              <span>{species.name}</span>
              {","}
            </>
          ))}
        </div>
        <div className="col movie-dtls-col">
          <b>Opening Crawl: </b>
          {openingCrawl}
        </div>
      </div>
      <div>
        <Button
          className={"navigate-back-btn"}
          btnTxt={"Back"}
          onClick={() => navigate(-1)}
        />
      </div>
    </>
  );
}

export default MovieDtls;
