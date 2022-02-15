import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCrypto = (currency, page) => {
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
      )
      .then((data) => {
        setCoin(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency, page]);
  return { coin };
};

export default useFetchCrypto;
