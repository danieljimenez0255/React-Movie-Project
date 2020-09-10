import React, { useState, useEffect } from "react";
import "./App.css";
import { Main } from "./Components/Main";
import { MovieSection as MovieSectionGray } from "./Components/movieSectionGray";
import { mainURL } from "./Data/https";
import { movieRequests } from "./Data/httpsRequest";
import { MovieSectionBlue } from "./Components/movieSectionBlue";

function App() {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const data = async () => {
      const movieData = await mainURL.get(movieRequests.fetchUpComing);
      const topMovieData = await mainURL.get(movieRequests.fetchTopRated);
      const horrorData = await mainURL.get(movieRequests.fetchHorrorMovies);
      const actionData = await mainURL.get(movieRequests.fetchActionMovies);
      const comedyData = await mainURL.get(movieRequests.fetchComedyMovies);
      const crimeData = await mainURL.get(movieRequests.fetchCrimeMovies);
      const docData = await mainURL.get(movieRequests.fetchDocumentaries);
      const famData = await mainURL.get(movieRequests.fetchFamilyMovies);
      const fanData = await mainURL.get(movieRequests.fetchFantasyMovies);
      const musData = await mainURL.get(movieRequests.fetchMusicMovies);
      const mysData = await mainURL.get(movieRequests.fetchMysteryMovies);
      const romData = await mainURL.get(movieRequests.fetchRomanceMovies);
      const sciData = await mainURL.get(
        movieRequests.fetchScienceFictionMovies
      );
      const thrData = await mainURL.get(movieRequests.fetchThrillerMovies);
      const trenData = await mainURL.get(movieRequests.fetchTrending);

      let allDataC = [
        movieData.data.results,
        topMovieData.data.results,
        horrorData.data.results,
        actionData.data.results,
        comedyData.data.results,
        crimeData.data.results,
        docData.data.results,
        famData.data.results,
        fanData.data.results,
        musData.data.results,
        mysData.data.results,
        romData.data.results,
        sciData.data.results,
        thrData.data.results,
        trenData.data.results,
      ];
      setAllMovies(allDataC);
    };
    data();
  }, []);
  console.log(allMovies);
  return (
    <div className="app">
      <Main />
      {allMovies?.length > 0 && (
        <>
          <MovieSectionGray
            titleOne="Up coming Movies"
            titleTwo="Top Rated Movies"
            movieSetOne={allMovies[0]}
            movieSetTwo={allMovies[1]}
          />
          <MovieSectionBlue
            titleOne="Horror"
            titleTwo="Action"
            movieSetOne={allMovies[2]}
            movieSetTwo={allMovies[3]}
          />
          <MovieSectionGray
            titleOne="Comedy"
            titleTwo="Crime"
            movieSetOne={allMovies[4]}
            movieSetTwo={allMovies[5]}
          />
          <MovieSectionBlue
            titleOne="Documentaries"
            titleTwo="Family"
            movieSetOne={allMovies[6]}
            movieSetTwo={allMovies[7]}
          />
          <MovieSectionGray
            titleOne="Fantasy"
            titleTwo="Music"
            movieSetOne={allMovies[8]}
            movieSetTwo={allMovies[9]}
          />
          <MovieSectionBlue
            titleOne="Mystery"
            titleTwo="Romance"
            movieSetOne={allMovies[10]}
            movieSetTwo={allMovies[11]}
          />
          <MovieSectionGray
            titleOne="Science Fiction"
            titleTwo="Thriller"
            movieSetOne={allMovies[12]}
            movieSetTwo={allMovies[13]}
          />
          <MovieSectionBlue
            titleOne="Trending for the Week"
            movieSetOne={allMovies[14]}
          />
        </>
      )}
    </div>
  );
}

export default App;
