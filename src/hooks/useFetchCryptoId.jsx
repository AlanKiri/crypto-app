import { useEffect, useState } from "react";
import axios from "axios";

const UseFetchCryptoId = (id, currency) => {
  const [idMarketCoin, setIdMarketCoin] = useState([]);
  const [idCoin, setIdCoin] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      .then((data) => {
        setIdMarketCoin(data.data["market_data"]);
        setIdCoin(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { idCoin, idMarketCoin };
};

export default UseFetchCryptoId;
