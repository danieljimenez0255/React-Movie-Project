import React, { useState } from "react";
import "./movieSectionGray.css";
import { Modal, Button } from "@material-ui/core";
import { mainURL } from "../Data/https";
import { useStylesM, buttonStyles } from "../util.js";
import "../Modal.css";
import MovieInfo from "./MovieInfo";

const base_url = "https://image.tmdb.org/t/p/original/";
let count = 0;
export const MovieSection = ({
  titleOne,
  titleTwo,
  movieSetOne,
  movieSetTwo,
}) => {
  const [movieInfoM, setMovieInfoM] = useState([]);
  const [open, setOpen] = useState(false);
  const movieInfo = async (movieID) => {
    count = 0;
    setOpen(true);
    setMovieInfoM("");
    const movieC = await mainURL.get(
      `/movie/${movieID}/credits?api_key=bf1b3fd4435437af3a76683b39ca1572`
    );

    const movieI = await mainURL.get(
      `/movie/${movieID}?api_key=bf1b3fd4435437af3a76683b39ca1572`
    );

    const movieR = await mainURL.get(
      `/movie/${movieID}/reviews?api_key=bf1b3fd4435437af3a76683b39ca1572&language=en-US&page=1`
    );
    //save info to moveInfoM state
    //then add to modal which is currently being worked on
    let movieAll = [movieC.data.cast, movieI.data, movieR.data.results];
    setMovieInfoM(movieAll);
  };

  if (movieInfoM.length > 0 && count === 0) {
    count++;
  }

  const classes = useStylesM();
  const closeClass = buttonStyles();
  return (
    <div className="movieSection">
      <div className="movieSection__header">
        <h1>{titleOne}</h1>
      </div>
      <div className="movieSection__movies">
        {movieSetOne.map((movieTitle) => (
          <img
            key={movieTitle.id}
            src={base_url + movieTitle.poster_path}
            className="movie__poster"
            alt={movieTitle.title}
            onClick={() => movieInfo(movieTitle.id)}
          />
        ))}
      </div>
      <div className="movieSection__header">
        <h1>{titleTwo}</h1>
      </div>

      <div className="movieSection__movies">
        {movieSetTwo.map((movieTitle) => (
          <img
            key={movieTitle.id}
            src={base_url + movieTitle.poster_path}
            className="movie__poster"
            alt={movieTitle.title}
            onClick={() => movieInfo(movieTitle.id)}
          />
        ))}
      </div>

      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          {movieInfoM?.length > 0 && (
            <>
              <img
                className="movie__infoImg"
                src={base_url + movieInfoM[1].backdrop_path}
                alt={movieInfoM}
              />
              <div className="movie__info">
                <h3 className="movie__infoTitle">{movieInfoM[1].title}</h3>
                <h3 className="movie__infoRelease">
                  Release Date: {movieInfoM[1].release_date}
                </h3>
                {/* add rating here */}
              </div>
              <MovieInfo
                title="About"
                titleTwo="Reviews"
                movieInfoCast={movieInfoM[0]}
                movieInfoReviews={movieInfoM[2]}
                movieInfoMain={movieInfoM[1]}
              />
            </>
          )}

          <Button
            color="secondary"
            variant="contained"
            className={closeClass.sty}
            onClick={() => setOpen(false)}
          >
            Close Modal
          </Button>
        </div>
      </Modal>
    </div>
  );
};
