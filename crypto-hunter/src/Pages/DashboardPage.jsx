import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";
import axios from "axios";
const DashboardPage = () => {
  const [coins, setCoins] = useState([]);

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
      <TabsComponent coins={coins} />
    </div>
  );
};

export default DashboardPage;
