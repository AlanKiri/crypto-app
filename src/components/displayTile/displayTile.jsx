import React from "react";
import { Box, Modal } from "@mui/material";
import CryptoInfoComponent from "../CryptoInfo/CryptoInfoComponent";

const DisplayTile = ({
  image,
  crypto_name,
  current_price,
  market_cap_rank,
  price_change,
  price_change_percentage,
  crypto_id,
  currency,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    bgcolor: "rgba(99, 95, 65, 1)",
    borderRadius: 10,
    boxShadow: 24,
    outline: "none",
    display: "flex",
    justifyContent: "center",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isNegative = (value) => {
    if (value < 0) {
      return "negative";
    } else {
      return "";
    }
  };

  return (
    <div className={"crypto_element"} onClick={handleOpen}>
      <div className="crypto_element_header">
        <p>{market_cap_rank}</p>
        <img src={image} alt="logo" />
      </div>
      <div className="crypto_element_text">
        <p>{crypto_name}</p>
        <p>
          {current_price && current_price.toFixed(2)}
          {""}
          {currency === "Eur" ? "€" : "$"}
        </p>
        <p className={isNegative(price_change)}>
          {price_change && price_change.toFixed(2)}
          {""}
          {currency === "Eur" ? "€" : "$"}
        </p>
        <p className={isNegative(price_change)}>
          {price_change_percentage && price_change_percentage.toFixed(2)}%
        </p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CryptoInfoComponent
            isNegative={isNegative}
            currency={currency}
            crypto_id={crypto_id}
            current_price={current_price}
            market_cap_rank={market_cap_rank}
            price_change={price_change}
            price_change_percentage={price_change_percentage}
            image={image}
            crypto_name={crypto_name}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayTile;
