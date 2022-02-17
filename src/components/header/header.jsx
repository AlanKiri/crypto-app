import "../../assets/styles/header/header.css";

const Header = ({ setCurrency, page, setPage, search, setSearch }) => {
  return (
    <div>
      <div className="header">
        <div
          className="header-logo"
          onClick={() => {
            setSearch("");
            console.log(1);
          }}
        >
          MYBTC<span>.COM</span>{" "}
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSearch("");
              console.log(1);
            }}
          >
            Reset
          </button>
        </div>
        <div className="controls">
          <div className="header-page">
            <input
              type="number"
              placeholder="Page"
              value={page}
              onChange={(e) => {
                setPage(e.target.value);
                console.log(page);
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
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </div>
      <hr style={{ color: "white" }} />
    </div>
  );
};

export default Header;
