import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function AccessibleTabs2(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {props.hidden && (
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value} onChange={handleChange}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            <Tab
              onClick={props.handleChangeShow}
              sx={{ width: "100%", justifyItems: "center", fontWeight: 900 }}
              label="Get Categories"
            />
            
          </Tabs>
          
        </Box>
      )}
    </>
  );
}
