import React, { useState } from "react";
import "./movieSectionBlue.css";
import { mainURL } from "../Data/https";
import MovieInfo from "./MovieInfo";
import { useStylesM, buttonStyles } from "../util";
import { Modal, Button } from "@material-ui/core";

const base_url = "https://image.tmdb.org/t/p/original/";
let count = 0;
export const MovieSectionBlue = ({
  titleOne,
  titleTwo,
  movieSetOne,
  movieSetTwo,
}) => {
  const [blueMovieInfoM, setBlueMainMovieInfoM] = useState([]);
  const [open, setOpen] = useState(false);
  const blueMovieInfo = async (movieID) => {
    count = 0;
    setOpen(true);
    setBlueMainMovieInfoM("");
    const movieC = await mainURL.get(
      `/movie/${movieID}/credits?api_key=bf1b3fd4435437af3a76683b39ca1572`
    );

    const movieI = await mainURL.get(
      `/movie/${movieID}?api_key=bf1b3fd4435437af3a76683b39ca1572`
    );

    const movieR = await mainURL.get(
      `/movie/${movieID}/reviews?api_key=bf1b3fd4435437af3a76683b39ca1572&language=en-US&page=1`
    );
    let movieAll = [movieC.data.cast, movieI.data, movieR.data.results];
    setBlueMainMovieInfoM(movieAll);
  };
  if (blueMovieInfoM.length > 0 && count === 0) {
    count++;
  }
  const classes = useStylesM();
  const closeClass = buttonStyles();
  return (
    <div className="movieSectionBlue">
      {movieSetOne?.length > 0 && movieSetTwo?.length > 0 ? (
        <>
          <div className="movieSection__headerBlue">
            <h1>{titleOne}</h1>
          </div>
          <div className="movieSection__movies">
            {movieSetOne.map((movieTitle) => (
              <img
                key={movieTitle.id}
                src={base_url + movieTitle.poster_path}
                className="movie__poster"
                alt={movieTitle.title}
                onClick={() => blueMovieInfo(movieTitle.id)}
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
                onClick={() => blueMovieInfo(movieTitle.id)}
              />
            ))}
            <Modal
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              open={open}
              onClose={() => setOpen(false)}
            >
              <div className={classes.paper}>
                {blueMovieInfoM?.length > 0 && (
                  <>
                    <img
                      className="movie__infoImg"
                      src={base_url + blueMovieInfoM[1].backdrop_path}
                      alt={blueMovieInfoM}
                    />
                    <div className="movie__info">
                      <h3 className="movie__infoTitle">
                        {blueMovieInfoM[1].title}
                      </h3>
                      <h3 className="movie__infoRelease">
                        Release Date: {blueMovieInfoM[1].release_date}
                      </h3>
                      {/* add rating here */}
                    </div>
                    <MovieInfo
                      title="About"
                      titleTwo="Reviews"
                      movieInfoCast={blueMovieInfoM[0]}
                      movieInfoReviews={blueMovieInfoM[2]}
                      movieInfoMain={blueMovieInfoM[1]}
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
        </>
      ) : (
        <>
          <div className="movieSection__headerBlue">
            <h1>{titleOne}</h1>
          </div>
          <div className="movieSection__movies">
            {movieSetOne.map((movieTitle) => (
              <img
                key={movieTitle.id}
                src={base_url + movieTitle.poster_path}
                className="movie__poster"
                alt={movieTitle.title}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
