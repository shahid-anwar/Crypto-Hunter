import { Switch } from "@mui/material";
import TemporaryDrawer from "./Drawer";
import "./Styles.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../Button/Button";
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
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Switch checked={darkMode} onClick={() => changeMode()} />
        <a href="">
          <p className="link">Home</p>
        </a>
        <a href="">
          <p className="link">Compare </p>
        </a>
        <a href="">
          <p className="link">WatchList</p>
        </a>
        <a href="">
          <Button text={"Dashboard"} />
        </a>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
