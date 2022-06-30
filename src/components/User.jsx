import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("logout");
    window.location.reload();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        User
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/profile">
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
        </Link>
        <Link to="/myproduct">
          <MenuItem onClick={handleClose}>My product</MenuItem>
        </Link>
        <Link to="/createproduct">
          <MenuItem onClick={handleClose}>Add product</MenuItem>
        </Link>
        <Link to="/orderhistory">
          <MenuItem onClick={handleClose}>History Order</MenuItem>
        </Link>
        <Link to="/ ">
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
