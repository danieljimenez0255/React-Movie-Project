import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Main Info js exports
export const useStyles = makeStyles((theme) => ({
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
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const responsiveT = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const ButtonGroup = ({ previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  console.log(currentSlide);
  return (
    <div className="carousel-button-group">
      <Button variant="contained" color="primary" onClick={() => previous()}>
        Prev
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goToSlide(currentSlide + 1)}
      >
        Next
      </Button>
    </div>
  );
};

// Cast Modal exports
export const responsiveC = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const ButtonGroupC = ({ previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  console.log(currentSlide);
  return (
    <div className="carousel-button-group-cast">
      <Button variant="contained" color="primary" onClick={() => previous()}>
        Prev
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goToSlide(currentSlide + 1)}
      >
        Next
      </Button>
    </div>
  );
};
