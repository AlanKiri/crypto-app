import React, { useState } from "react";
import Header from "../components/header/header";
import DisplayTile from "../components/displayTile/displayTile";
import useFetchCrypto from "../hooks/useFetchCrypto";
import "../styles/cryptoList.css";

const CryptoList = ({ currency, setCurrency }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { coin } = useFetchCrypto(currency, page);
  return (
    <div className="crypto_list">
      <div className="container">
        <Header
          setCurrency={setCurrency}
          search={search}
          setSearch={setSearch}
        />
        <div className="crypto_data">
          {!search &&
            coin.map((coin) => {
              return (
                <DisplayTile
                  key={coin.id}
                  image={coin.image}
                  crypto_name={coin.name}
                  current_price={coin.current_price}
                  market_cap_rank={coin.market_cap_rank}
                  price_change={coin["price_change_24h"]}
                  price_change_percentage={coin["price_change_percentage_24h"]}
                  crypto_id={coin.id}
                  currency={currency}
                />
              );
            })}

          {search &&
            coin
              // eslint-disable-next-line array-callback-return
              .filter((coin) => {
                if (coin.id.toLowerCase().includes(search.toLowerCase())) {
                  return coin;
                }
              })
              .map((coin) => {
                return (
                  <DisplayTile
                    key={coin.id}
                    image={coin.image}
                    crypto_name={coin.name}
                    current_price={coin.current_price}
                    market_cap_rank={coin.market_cap_rank}
                    price_change={coin["price_change_24h"]}
                    price_change_percentage={
                      coin["price_change_percentage_24h"]
                    }
                    crypto_id={coin.id}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
