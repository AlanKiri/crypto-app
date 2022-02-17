import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/searchDisplayTile/searchDisplayTile.css";

const SearchDisplayTile = ({ image, crypto_name, market_cap_rank, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={"cryptoElement"}
      onClick={() => {
        navigate(`/${id}`);
      }}
    >
      <img src={image} alt="logo" />
      <h2>{crypto_name}</h2>
      <h2>{market_cap_rank}</h2>
    </div>
  );
};

export default SearchDisplayTile;
