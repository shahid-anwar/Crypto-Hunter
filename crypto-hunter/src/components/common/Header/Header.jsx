import { Switch } from "@mui/material";
import TemporaryDrawer from "./Drawer";
import "./Styles.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Header = () => {
  const [darkMode, setDarkmode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkmode(!darkMode);
    toast.success("Theme Changed");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">
          CryptoHunter<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links">
        <Switch checked={darkMode} onClick={() => changeMode()} />
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare </p>
        </Link>
        <Link to="/watchlist">
          <p className="link">WatchList</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} />
        </Link>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
