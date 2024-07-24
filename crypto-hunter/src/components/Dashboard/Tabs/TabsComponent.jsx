import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Grid from "../Grid/Grid";
import "./styles.css";
import List from "../List/List";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };
  return (
    <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
          </TabList>
        </div>
        <TabPanel value="Grid">
          <div className="grid-flex">
            {coins.map((coin) => (
              <Grid coin={coin} key={coin.id} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="List">
          <div className="list-flex">
            {coins.map((coin) => (
              <List coin={coin} key={coin.id} />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
