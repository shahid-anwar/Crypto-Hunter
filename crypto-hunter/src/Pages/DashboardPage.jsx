import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";
import axios from "axios";
import Search from "../components/Dashboard/Search/Search";
import PaginationComp from "../components/Dashboard/Pagination/Pagination";
const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  let filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );
  useEffect(() => {
    axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => {
        console.log("Response:", res.data);
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
    let initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };
  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
      {!search && (
        <PaginationComp page={page} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default DashboardPage;
