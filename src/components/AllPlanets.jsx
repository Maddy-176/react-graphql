import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_PLANETS } from "../queries";
import Button from "../reusableComponents/Button";
import { useNavigate } from "react-router";

function AllPlanets() {
  const { loading, error, data } = useQuery(
    gql`
      ${GET_ALL_PLANETS}
    `
  );

  let navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      <h2>All Planets</h2>
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
            <th scope="col">Planet Name</th>
            <th scope="col">Terrain</th>
            <th scope="col">Climate</th>
            <th scope="col">Population</th>
            <th scope="col">Diameter</th>
            <th scope="col">Gravity</th>
            <th scope="col">Surface Water</th>
            <th scope="col"> Orbital Period</th>
            <th scope="col"> Rotation Period</th>

            {/* <th scope="col">Species Connection</th> */}
          </tr>
        </thead>
        <tbody>
          {data.allPlanets.planets.map((planet, index) => (
            <tr key={index} className="movie-row">
              <td>{planet.name}</td>
              <td>
                {planet.terrains.map((data, index) => (
                  <div key={index}>{data}</div>
                ))}
              </td>
              <td>
                {planet.climates.map((climate, index) => (
                  <div key={index}>{climate}</div>
                ))}
              </td>
              <td>{planet.population ? planet.population : "N/A"}</td>

              <td>{planet.diameter ? planet.diameter : "N/A"}</td>
              <td>{planet.gravity ? planet.gravity : "N/A"}</td>
              <td>{planet.surfaceWater ? planet.surfaceWater : "N/A"}</td>
              <td>{planet.orbitalPeriod ? planet.orbitalPeriod : "N/A"}</td>
              <td>{planet.rotationPeriod ? planet.rotationPeriod : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AllPlanets;
