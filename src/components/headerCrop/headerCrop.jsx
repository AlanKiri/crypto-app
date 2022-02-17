import "../../assets/styles/header/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div
        className="header-logo"
        onClick={() => {
          navigate("/");
        }}
      >
        MYBTC<span>.COM</span>{" "}
      </div>
    </div>
  );
};

export default Header;
