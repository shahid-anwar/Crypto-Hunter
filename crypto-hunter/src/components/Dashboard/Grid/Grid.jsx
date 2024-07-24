import React from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
const Grid = ({ coin }) => {
  return (
    <div
      className={`grid-container ${
        coin.price_change_percentage_24h < 0 && "grid-red"
      }`}
    >
      <div className="info-flex">
        <img src={coin.image} className="coin-logo" />
        <div className="name-col">
          <p className="symbol">{coin.symbol}</p>
          <p className="name">{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h >= 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="chip-icon">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="chip-icon red">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      <div className="info-container">
        <h3
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h >= 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="total-volume">
          Total Volume:${coin.total_volume.toLocaleString()}
        </p>
        <p className="market-cap">
          Market Cap:${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Grid;
