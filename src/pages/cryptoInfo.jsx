import React from "react";
import HeaderCrop from "../components/headerCrop/headerCrop";
import UseFetchCryptoId from "../hooks/useFetchCryptoId";
import { useParams } from "react-router-dom";
import CryptoInfoComponent from "../components/CryptoInfo/CryptoInfoComponent";

const CryptoInfo = () => {
  const { id } = useParams();
  const { idCoin, idMarketCoin } = UseFetchCryptoId(id);
  console.log(idCoin);
  return (
    <div>
      <HeaderCrop />
      <CryptoInfoComponent
        crypto_id={id}
        current_price={
          idMarketCoin.current_price && idMarketCoin.current_price.eur
        }
        market_cap_rank={idMarketCoin && idMarketCoin.market_cap_rank}
        price_change={
          idMarketCoin.price_change_24h_in_currency &&
          idMarketCoin.price_change_24h_in_currency.eur
        }
        price_change_percentage={
          idMarketCoin.price_change_percentage_24h_in_currency &&
          idMarketCoin.price_change_percentage_24h_in_currency.eur
        }
        image={idCoin.image && idCoin.image.large}
        crypto_name={idCoin.name}
      />
    </div>
  );
};

export default CryptoInfo;
