import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, AccountCircle, Logout } from '@mui/icons-material';
import { Avatar, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const nav = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    login(dispatch, { type: "LOGOUT", user: null });
    handleClose();
    nav(0);
    nav("/login");
    // nav("/");

  }
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AURA.</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          {!user && (
            <>
              <Link to={"/register"} style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem >REGISTER</MenuItem>
              </Link>
              <Link to={"/login"} style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem >SIGN IN</MenuItem>
              </Link>
            </>
          )}
          {
            user && (
              <>

                <AccountCircle sx={{ width: 30, height: 30 }} fontSize='40' style={{ paddingTop: '3px', paddingBottom: 'px' }} onClick={handleClick} />
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  style={{
                    elevation: 0,
                    overflow: 'visible',

                  }}
                >
                  <MenuItem onClick={handleClose} style={{
                    display: 'flex', justifyContent: 'space-between', paddingRight: '25px', paddingBottom: '5px'
                  }}>
                    <Avatar sx={{ width: 20, height: 20 }} /> Profile
                  </MenuItem>

                  <MenuItem onClick={handleClose} style={{
                    display: 'flex', justifyContent: 'space-between', paddingRight: '25px', paddingBottom: '5px'
                  }}>
                    <ListItemIcon>
                      <Settings sx={{ width: 20, height: 20 }} />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={logout} style={{
                    display: 'flex', justifyContent: 'space-between', paddingRight: '25px', paddingBottom: '5px'
                  }}>
                    <ListItemIcon>
                      <Logout sx={{ width: 20, height: 20 }} />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}
