import React, { useState, useEffect } from "react";
import Avatar from "../test_avatar.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Card, Modal } from "@material-ui/core";
import { responsive, responsiveT, ButtonGroup } from "../util.js";
import { makeStyles } from "@material-ui/core/styles";
import { mainURL } from "../Data/https";
import CastSlides from "./castModal";

let content;

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieInfo = ({
  title,
  titleTwo,
  movieInfoCast,
  movieInfoReviews,
  movieInfoMain,
}) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      /*  display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative", */
      width: "50vw",
      height: "80vh",
      overflowY: "scroll",
      // backgroundColor: "#0F0F0F",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      fontFamily: `"Roboto", sans-serif`,
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "& img": {
        width: "35vw",
        height: "36vw",
      },
      "& h1": {
        color: "white",
        margin: 0,
        marginTop: "10px",
        fontSize: "3rem",
      },
      "& p": {
        margin: 0,
        color: "white",
      },
      "& p:last-of-type": {
        marginTop: "10px",
        textIndent: "4vw",
        padding: "0 15px 15px 15px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "70vw",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90vw",
      },
    },
  }));
  const classesT = useStyles();

  const [underline, setUnderline] = useState(true);
  const [truncatedTextM, setTruncatedTextM] = useState([]);
  const [open, setOpen] = useState(false);
  const [cast, setCast] = useState([]);
  const [castMain, setCastMain] = useState([]);
  const [slideNum, setSlideNum] = useState(4);

  useEffect(() => {
    let reviews = [];
    const truncate = (content, limit) => {
      for (let i = 0; i < content.length; i++) {
        let reviewText = content[i].content;
        if (reviewText.length > 500) {
          reviewText = reviewText.split("").slice(0, limit).join("") + "...";
        }
        reviews.push(reviewText);
      }
      setTruncatedTextM(reviews);
    };
    truncate(movieInfoReviews, 500);
  }, [movieInfoReviews]);

  useEffect(() => {
    let allCastInfo = [];
    const castInfo = /* async */ (id) => {
      for (let castMember of movieInfoCast) {
        allCastInfo.push(castMember.id);
      }
      setCast(allCastInfo);
    };
    castInfo();
  }, [movieInfoCast]);

  const openCastModal = (id) => {
    setSlideNum(id);
    setOpen(true);
  };
  const castModal = async () => {
    let castMain = [];
    for (let id of cast) {
      let castMember = await mainURL.get(
        `/person/${id}?api_key=bf1b3fd4435437af3a76683b39ca1572&language=en-US`
      );
      castMain.push(castMember.data);
    }
    setCastMain(castMain);
  };

  if (underline === true) {
    content = (
      <div className="movie__sectionsInfo">
        <h1 className="movie__sectionsInfoDescTitle">Movie description:</h1>

        <p className="movie__sectionsInfoDesc">{movieInfoMain.overview}</p>

        <h1 className="movie__sectionsInfoCastTitle">Movie Cast:</h1>

        <Carousel
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
          infinite={true}
        >
          {movieInfoCast.map((character, i) => (
            <div
              className="cast__profile"
              onClick={() => {
                castModal();
                openCastModal(i);
              }}
            >
              <img
                src={
                  character.profile_path !== null
                    ? base_url + character.profile_path
                    : Avatar
                }
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                }}
                alt={"character info"}
              />
              <p style={{ fontSize: "14px" }}>{character.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    );
  } else {
    content = (
      <div className="movie__reviews">
        {movieInfoReviews.length > 0 ? (
          movieInfoReviews.map((review, i) => (
            <div className="movie__reviewDesc">
              <h2>Movie Review #{i + 1}</h2>
              <Card className="movie__reviewDescM">
                <p>{truncatedTextM[i]}</p>
              </Card>
              <div className="movie__reviewAuthor">
                <a href={review.url}>
                  <Button variant="contained" color="primary">
                    Go to Review
                  </Button>
                </a>
                <p>Reviewer: {review.author}</p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Reviews for the movie yet</h1>
        )}
      </div>
    );
  }

  const about = () => {
    if (underline === false) {
      setUnderline(true);
    }
  };

  const reviews = () => {
    if (underline === true) {
      setUnderline(false);
    }
  };

  console.log(cast);
  return (
    <>
      <div className="movie__sections">
        <div
          onClick={about}
          className={`movieInfo__sections${title} ${
            underline ? "movieInfo__sectionsUnderline" : false
          }`}
        >
          <h1 className={`movie__sections${title}`}>{title}</h1>
        </div>
        <div
          onClick={reviews}
          className={`movieInfo__sections${titleTwo} ${
            underline ? false : "movieInfo__sectionsUnderline"
          }`}
        >
          <h1 className={`movie__sections${titleTwo}`}>{titleTwo}</h1>
        </div>
      </div>

      {content}
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={() => {
          setOpen(false);
          setSlideNum(0);
        }}
      >
        <div className={`${classesT.paper} cast-test`}>
          <CastSlides slideNumM={slideNum} castMainM={castMain} />
        </div>
      </Modal>
    </>
  );
};

export default MovieInfo;
