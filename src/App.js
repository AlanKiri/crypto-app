import "./assets/styles/app.css";
import "./assets/styles/shared.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import CryptoInfo from "./pages/cryptoInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route c exact path={"/"} element={<Index />} />
          <Route path={"/:id"} element={<CryptoInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
