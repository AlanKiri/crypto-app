import React, { useEffect, useState } from "react";
import axios from "axios";

const UseFetchCryptoSearch = (search) => {
  const [searchCoin, setSearchCoin] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/search?query=${search}`)
      .then((data) => {
        setSearchCoin(data.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  return { searchCoin };
};

export default UseFetchCryptoSearch;
