import "./assets/styles/app.css";
import "./assets/styles/shared.css";
import Header from "./components/header/header";
import DisplayTile from "./components/displayTile/displayTile";
import useFetchCrypto from "./hooks/useFetchCrypto";
import { useState } from "react";
import useFetchCryptoSearch from "./hooks/useFetchCryptoSearch";
import SearchDisplayTile from "./components/searchDisplayTile/searchDisplayTile";

function App() {
  const [currency, setCurrency] = useState("USD");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { coin } = useFetchCrypto(currency, page);
  const { searchCoin } = useFetchCryptoSearch(search);

  return (
    <div className="App">
      <Header
        setCurrency={setCurrency}
        page={page}
        setPage={setPage}
        search={search}
        setSearch={setSearch}
      />
      <div className="cryptoData">
        {!search &&
          coin.map((coin, index) => {
            return (
              <DisplayTile
                key={coin.id}
                image={coin.image}
                crypto_name={coin.name}
                current_price={coin.current_price}
                market_cap_rank={coin.market_cap_rank}
                price_change={coin.price_change_24h}
                price_change_precentage={coin.price_change_percentage_24h}
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
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
