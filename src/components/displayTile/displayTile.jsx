import React from "react";
import "../../assets/styles/displayTile/displayTile.css";

const DisplayTile = ({
  image,
  crypto_name,
  current_price,
  market_cap_rank,
  price_change,
  price_change_precentage,
}) => {
  return (
    <div className={"cryptoElement"}>
      <img src={image} alt="logo" />
      <h2>{crypto_name}</h2>
      <h2>{current_price}</h2>
      <h2>{market_cap_rank}</h2>
      <h2>{price_change}</h2>
      <h2>{price_change_precentage}</h2>
    </div>
  );
};

export default DisplayTile;
