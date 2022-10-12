import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../reusableComponents/Button";

const Home = () => {
  return (
    <>
      <>
        <h2>Welcome to Star Wars 🚀</h2>

        <nav>
          <div>
            <Link to="/movies">
              <Button btnTxt="View Movies List" className="route-btn" />
            </Link>
          </div>
          <div>
            <Link to="/planets">
              <Button btnTxt="View Planets List" className="route-btn" />
            </Link>
          </div>
        </nav>

        <Outlet />
      </>
    </>
  );
};

export default Home;
