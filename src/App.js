import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoList from "./pages/cryptoList";
import Index from "./pages";
import { useState } from "react";
import "./styles/app.scss";
import NotFound from "./pages/NotFound";

function App() {
  const [currency, setCurrency] = useState("USD");

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path={"/"} element={<Index />} />
          <Route
            exact
            path={"/crypto"}
            element={
              <CryptoList currency={currency} setCurrency={setCurrency} />
            }
          />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
