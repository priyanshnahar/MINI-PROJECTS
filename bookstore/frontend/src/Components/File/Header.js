import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

function Header() {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#8a2be2" }}>
        <Toolbar>
          <Typography>
            <MenuBookIcon/>
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} label="Add Book" to="/add" />
            <Tab LinkComponent={NavLink} label="Books" to="/books" />
            <Tab LinkComponent={NavLink} label="About Us" to="/about" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
