import React from "react";
import "./movieSectionBlue.css";
const base_url = "https://image.tmdb.org/t/p/original/";
export const MovieSectionBlue = ({
  titleOne,
  titleTwo,
  movieSetOne,
  movieSetTwo,
}) => {
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
              />
            ))}
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
