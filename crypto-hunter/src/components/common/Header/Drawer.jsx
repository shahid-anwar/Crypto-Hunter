import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { toast } from "react-toastify";
import { IconButton, Switch } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState, useEffect } from "react";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
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
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
          console.log("Clicked");
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="">
            <p className="link">Compare</p>
          </a>
          <a href="">
            <p className="link">WatchList</p>
          </a>
          <a href="">
            <p className="link">Dashboard</p>
          </a>
          <Switch checked={darkMode} onClick={() => changeMode()} />
        </div>
      </Drawer>
    </div>
  );
}
