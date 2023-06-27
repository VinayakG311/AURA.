import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined, AccountCircle, Logout, Settings } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, ListItemIcon, Menu } from '@mui/material';
import { login } from '../redux/apiCalls';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    login(dispatch, { type: "LOGOUT", user: null });
    handleClose();

  }
  const quantity = useSelector(state => state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);
  return (

    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>AURA.</Logo>
        </Center>
        <Right>{
          !user && (
            <>
              <Link to={"/register"} style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem >REGISTER</MenuItem>
              </Link>
              <Link to={"/login"} style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem >SIGN IN</MenuItem>
              </Link>
            </>
          )
        }{
            user && (
              <>

                <AccountCircle fontSize='40' style={{ paddingTop: '3px' }} onClick={handleClick} />
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

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
