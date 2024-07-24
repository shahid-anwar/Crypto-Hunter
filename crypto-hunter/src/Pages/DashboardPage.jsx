import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";
import axios from "axios";
import Search from "../components/Dashboard/Search/Search";
const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

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
  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={filteredCoins} />
    </div>
  );
};

export default DashboardPage;
