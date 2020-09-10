import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from "../test_avatar.jpg";
import { responsiveC, ButtonGroupC } from "../util.js";

const base_url = "https://image.tmdb.org/t/p/original/";

export default class CarouselM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }

  componentDidMount() {
    this.setState({ val: 0 });
    setTimeout(() => {
      this.setState({ val: 1 });
    }, 3000);
    setTimeout(() => {
      this.initB();
    }, 4000);
  }

  initB() {
    const nextSlide = this.Carousel.state.currentSlide + this.props.slideNumM;
    this.Carousel.goToSlide(nextSlide);
  }
  render() {
    return (
      <>
        {this.state.val === 1 ? (
          <Carousel
            arrows={false}
            infinite={true}
            ref={(el) => (this.Carousel = el)}
            responsive={responsiveC}
            customButtonGroup={<ButtonGroupC />}
          >
            {this.props.castMainM.map((c) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0F0F0F",
                }}
              >
                <img
                  src={
                    c.profile_path !== null ? base_url + c.profile_path : Avatar
                  }
                  alt={c.name}
                />
                <h1 className="movieSection__castTitleM">{c.name}</h1>
                <p>Born in: {c.place_of_birth}</p>
                <p>DOB: {c.birthday}</p>
                <p>{c.biography}</p>
              </div>
            ))}
          </Carousel>
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    );
  }
}
