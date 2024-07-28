import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header/Header";
// import Loader from "../components/common/Loader/Loader";
import List from "../components/Dashboard/List/List";
import { getCoinData } from "../functions/getCoinData";
import { settingCoinObject } from "../functions/settingCoinObject";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  console.log(id);
  const getData = async () => {
    let coinData = await getCoinData(id, setError);
    console.log("Coin DATA", coinData);
    settingCoinObject(coinData, setCoin);
    // if (coinData) {
    //   const prices = await getPrices(id, days, priceType, setError);
    //   if (prices) {
    //     settingChartData(setChartData, prices);
    //   }
    // }
  };

  return (
    <div>
      <Header />
      <div className="grey-wrapper">
        <List coin={coin} />
      </div>
    </div>
  );
};

export default CoinPage;
