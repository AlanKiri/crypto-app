import React from "react";
import "../../assets/styles/displayTile/displayTile.css";
import CryptoInfoComponent from "../CryptoInfo/CryptoInfoComponent";
import { useNavigate } from "react-router-dom";

const DisplayTile = ({
  image,
  crypto_name,
  current_price,
  market_cap_rank,
  price_change,
  price_change_percentage,
  crypto_id,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={"cryptoElement"}
      onClick={() => {
        navigate(`/${crypto_id}`);
      }}
    >
      <img src={image} alt="logo" />
      <h2>{crypto_name}</h2>
      <h2>{current_price && current_price.toFixed(2)}</h2>
      <h2>{market_cap_rank}</h2>
      <h2>{price_change && price_change.toFixed(2)}</h2>
      <h2>{price_change_percentage && price_change_percentage.toFixed(2)}</h2>
    </div>
  );
};

export default DisplayTile;
