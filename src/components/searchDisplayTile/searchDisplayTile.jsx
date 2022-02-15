import React from "react";

const SearchDisplayTile = ({ image, crypto_name, market_cap_rank }) => {
  return (
    <div className={"cryptoElement"}>
      <img src={image} alt="logo" />
      <h2>{crypto_name}</h2>
      <h2>{market_cap_rank}</h2>
    </div>
  );
};

export default SearchDisplayTile;
