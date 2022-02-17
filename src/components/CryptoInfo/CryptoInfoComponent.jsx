import React from "react";

import "../../assets/styles/cryptoInfo/cryptoInfo.css";

const CryptoInfoComponent = ({
  image,
  crypto_name,
  current_price,
  market_cap_rank,
  price_change,
  price_change_percentage,
  crypto_id,
}) => {
  console.log(typeof current_price);
  return (
    <div className="cryptoInfoContainer">
      <h1>{crypto_name}</h1>
      <h2>Market cap: {market_cap_rank}</h2>
      <img src={image} alt={crypto_id} />
      <h3>Current price: {current_price && current_price.toFixed()} Eur</h3>
      <h3>Price change: {price_change && price_change.toFixed()} Eur in 24h</h3>
      <h3>
        Price change in percentage:{" "}
        {price_change_percentage && price_change_percentage.toFixed(2)}% in 24h
      </h3>
    </div>
  );
};

export default CryptoInfoComponent;
