import "../../styles/header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = ({ setCurrency, search, setSearch }) => {
  return (
    <div className="header">
      <div
        className="header-logo-container"
        onClick={() => {
          setSearch("");
        }}
      >
        <div className="header-logo-background">
          <img className="header-logo" src={logo} alt="Logo" />
        </div>
        <p>Crypto exchange</p>
      </div>
      <div className="header-controls">
        <div className="header-search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="header-currency">
          <select
            name="currency"
            id="currency"
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          >
            <option value="Usd">Usd</option>
            <option value="Eur">Eur</option>
          </select>
        </div>
      </div>
      <div className="header-navigation">
        <Link to="/">
          {" "}
          <p>Main</p>
        </Link>
        <Link to="/crypto">
          <p>Crypto</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
