import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CoinPage from "../Pages/CoinPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
