import React, { useState } from "react";
import Header from "../components/header/header";
import DisplayTile from "../components/displayTile/displayTile";
import SearchDisplayTile from "../components/searchDisplayTile/searchDisplayTile";
import useFetchCrypto from "../hooks/useFetchCrypto";
import useFetchCryptoSearch from "../hooks/useFetchCryptoSearch";
import ListParams from "../components/listParams/listParams";

const Index = () => {
  const [currency, setCurrency] = useState("USD");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { coin } = useFetchCrypto(currency, page);
  const { searchCoin } = useFetchCryptoSearch(search);
  return (
    <div>
      <Header
        setCurrency={setCurrency}
        page={page}
        setPage={setPage}
        search={search}
        setSearch={setSearch}
      />
      {!search && <ListParams />}
      <div className="cryptoData">
        {!search &&
          coin.map((coin) => {
            return (
              <DisplayTile
                key={coin.id}
                image={coin.image}
                crypto_name={coin.name}
                current_price={coin.current_price}
                market_cap_rank={coin.market_cap_rank}
                price_change={coin.price_change_24h}
                price_change_percentage={coin.price_change_percentage_24h}
                crypto_id={coin.id}
              />
            );
          })}

        {search &&
          searchCoin.map((coin, index) => {
            return (
              <SearchDisplayTile
                key={coin.id}
                image={coin.large}
                crypto_name={coin.name}
                market_cap_rank={coin.market_cap_rank}
                id={coin.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Index;
