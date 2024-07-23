import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoinPage from "./Pages/CoinPage";
import ComparePage from "./Pages/ComparePage";
import DashboardPage from "./Pages/DashboardPage";

import HomePage from "./Pages/HomePage";
import WatchListPage from "./Pages/WatchListPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
