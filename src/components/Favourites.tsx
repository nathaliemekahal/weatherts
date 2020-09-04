import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../FavouritesBtn.css";

interface props {
  data: any;
}
class Favourites extends Component<props> {
  addFavourites = async () => {
    let response = await fetch("http://localhost:3001/users/favourite", {
      headers: new Headers({
        "Content-type": "applicaton/json",
        "Access-Control-Allow-Origin": "http://localhost:3001",
        "Access-Control-Allow-Credentials": "true",
      }),
      credentials: "include",
      body: JSON.stringify(this.props.data.name),
      method: "POST",
    });
  };
  render() {
    return (
      <>
        <Button
          onClick={() => {
            this.addFavourites();
          }}
          className="Favourites"
        >
          Add to Favourites
        </Button>
      </>
    );
  }
}

export default Favourites;
