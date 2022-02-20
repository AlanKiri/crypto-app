import "../../styles/cryptoInfoComponent.css";
import React from "react";
const CryptoInfoComponent = ({
  currency,
  image,
  crypto_name,
  current_price,
  market_cap_rank,
  price_change,
  price_change_percentage,
  crypto_id,
}) => {
  return (
    <div className="crypto_info_container">
      <img src={image} alt={crypto_id} />
      <h1>{crypto_name}</h1>
      <h2>
        {current_price && current_price.toFixed()}
        {""}
        {currency === "Eur" ? "€" : "$"}
      </h2>
      <div>
        <h3>
          {price_change && price_change.toFixed()}
          {""}
          {currency === "Eur" ? "€" : "$"}
        </h3>
        <h3>
          {price_change_percentage && price_change_percentage.toFixed(2)}%
        </h3>
      </div>
    </div>
  );
};

export default CryptoInfoComponent;
