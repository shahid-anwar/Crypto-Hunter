import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

export default function TabsComponent() {
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
        <TabPanel value="Grid">Grid</TabPanel>
        <TabPanel value="List">List</TabPanel>
      </TabContext>
    </div>
  );
}
