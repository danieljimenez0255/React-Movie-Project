import React from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const NavB = ({ dropDownOne, dropDownTwo }) => {
  return (
    <>
      <Nav className="mr-auto navOne">
        {dropDownOne}
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav className="navTwo">
        {dropDownTwo}
        <div className="search__movie">
          <input
            type="text"
            placeholder="Search for Movie"
            name="searchMovies"
            id="moviesSearch"
          />
          {/*   <Button
            className="search__movieButton"
            as="input"
            variant="primary"
            type="Submit"
            value="Search"
          /> */}
          <Button variant="contained" size="medium" color="primary">
            <>
              {" "}
              <span style={{ marginRight: "5px" }}>
                Search
              </span> <SearchIcon />{" "}
            </>
          </Button>
        </div>
      </Nav>
    </>
  );
};
