import React from "react";
import Header from "../components/header/header";
import "../styles/index.scss";
import bitcoin from "../images/bitcoin.png";
import ethereum from "../images/ethereum.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="index">
      <div className="container">
        <Header displayControls={false} indexPage={true} />
        <div className="content">
          <div className="left-section">
            <h2>Start your career right now and here!</h2>
            <p>
              Crypto exchange is your best friend in finding latest info about
              cryptocurrencies, head right into crypto page and start earning
            </p>
            <Link to="/crypto">
              <button className="left-section-button">Start</button>
            </Link>
          </div>
          <div className="right-section">
            <div className="bitcoin-card">
              <img src={bitcoin} alt="bitcoin" />
              <p>btc</p>
              <p className="negative">-1088$</p>
            </div>
            <div className="ethereum-card">
              <img src={ethereum} alt="ethereum" />
              <p>eth</p>
              <p className="negative">-132$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
