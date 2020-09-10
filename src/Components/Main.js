import React, { useState, useEffect } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Navbar/Navbar";
import { NavB } from "./Navbar/Nav";
import { Dropdown } from "./Navbar/Dropdown";
import { movieRequests } from "../Data/httpsRequest";
import { mainURL } from "../Data/https";
import MainLaptop from "../Components/MainResponsiveness/MainLaptop";
import { MainPhone } from "../Components/MainResponsiveness/MainPhone";
import { MainTab } from "../Components/MainResponsiveness/MainTab";
import { Slide } from "react-reveal";

const base_url = "https://image.tmdb.org/t/p/original/";
let resizeM;

export const Main = () => {
  const [moviePostersIntro, setMoviePostersIntro] = useState([]);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const postersData = async () => {
      const fetchData = await mainURL.get(movieRequests.fetchActionMovies);

      setMoviePostersIntro(fetchData.data.results);
    };
    postersData();
  }, []);

  useEffect(() => {
    const debouncedResize = function handleResize() {
      clearTimeout(resizeM);
      resizeM = setTimeout(() => {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }, 1000);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div className="main">
      <Slide delay={500} duration={2000} left>
        <div className="NavBar__container">
          <NavBar
            NavM={
              <NavB
                dropDownOne={<Dropdown titleM="Movie" />}
                dropDownTwo={<Dropdown titleM="Type" />}
              />
            }
          />
        </div>
      </Slide>
      {dimensions.width > 749 ? (
        <>
          <MainLaptop moviePosters={moviePostersIntro} base={base_url} />
        </>
      ) : dimensions.width < 500 ? (
        <MainPhone moviePosters={moviePostersIntro} base={base_url} />
      ) : (
        <MainTab moviePosters={moviePostersIntro} base={base_url} />
      )}
    </div>
  );
};
