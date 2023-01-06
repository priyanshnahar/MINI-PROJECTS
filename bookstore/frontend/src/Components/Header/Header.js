import React from "react";
import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <div>
      <AppBar position="sticky">
        <Typography>
            Book Store
        </Typography>
      </AppBar>
    </div>
  );
}

export default Header;
