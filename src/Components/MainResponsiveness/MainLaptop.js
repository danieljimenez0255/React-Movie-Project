import React from "react";
import { Zoom, Flip } from "react-reveal";

const MainLaptop = ({ moviePosters, base }) => {
  return (
    <div className="main__content">
      <div className="main__contentPosters">
        <Zoom delay={1000} duration={2000} top>
          <h1>
            Some titles
            <br /> you'll find on
            <br /> here:
          </h1>
        </Zoom>
        <div className="main__postersContent">
          {moviePosters?.length > 0 && (
            <>
              <div className="main__posterContentRowOne">
                <Flip delay={2000} duration={2000} left>
                  <img
                    className="movie__Poster"
                    src={base + moviePosters[15].poster_path}
                    alt={moviePosters[15].title}
                  />
                </Flip>
                <Flip delay={2200} duration={2000} right>
                  <img
                    className="movie__Poster"
                    src={base + moviePosters[3].poster_path}
                    alt={moviePosters[3].title}
                  />
                </Flip>
              </div>
              <div className="main__posterContentRowTwo">
                <Flip delay={2400} duration={2000} right>
                  <img
                    className="movie__Poster"
                    src={base + moviePosters[8].poster_path}
                    alt={moviePosters[8].title}
                  />
                </Flip>
                <Flip delay={2600} duration={2000} left>
                  <img
                    className="movie__Poster"
                    src={base + moviePosters[5].poster_path}
                    alt={moviePosters[5].title}
                  />
                </Flip>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="main__contentHeadings">
        <div className="main__contentHeadingsIntro">
          <Zoom delay={1000} duration={2000} left>
            <h1>Welcome to my Page!</h1>
          </Zoom>
          <Zoom delay={1500} duration={2000} top>
            <p>
              On here you'll find all the information you need
              <br /> on all sorts of movies! Ranging from Horror to
              <br /> Romance and from Romance to Action. Plus so
              <br /> many more! You'll find a lot out on this website.
              <br /> I hope you enjoy!
            </p>
          </Zoom>
        </div>
        <div className="main__contentHeadingsPosters">
          {moviePosters?.length > 0 && (
            <>
              <Flip delay={2800} duration={2000} bottom>
                <img
                  className="movie__Poster"
                  src={base + moviePosters[9].poster_path}
                  alt={moviePosters[9].title}
                />
              </Flip>
              <Flip delay={3000} duration={2000} top>
                <img
                  className="movie__Poster"
                  src={base + moviePosters[3].poster_path}
                  alt={moviePosters[3].title}
                />
              </Flip>
              <Flip delay={3200} duration={2000} bottom>
                <img
                  className="movie__Poster"
                  src={base + moviePosters[6].poster_path}
                  alt={moviePosters[6].title}
                />
              </Flip>
              <Flip delay={3400} duration={2000} top>
                <img
                  className="movie__Poster"
                  src={base + moviePosters[7].poster_path}
                  alt={moviePosters[7].title}
                />
              </Flip>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLaptop;
