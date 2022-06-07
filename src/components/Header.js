import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import { styled } from "@mui/system";
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
import { useSelector } from "react-redux";


let countCart;
const ResponsiveAppBar = () => {
  countCart = useSelector((state) => state.cart.count);
  
  return (
    <AppBar sx={{ backgroundColor: " #2c3e50" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StoreMallDirectoryOutlinedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Virtual Store
          </Typography>
        
      
          <AccessibleBadges/>
         
          
    
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// import MailIcon from '@mui/icons-material/Mail';

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin-left: 1000px;
  font-size: 14px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #07f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;

function notificationsLabel(count) {
  if (count === 0) {
    return `${count} notifications`;
  }

  return `${count} notifications`;
}

export function AccessibleBadges() {
  return (
    <div aria-label={notificationsLabel({ countCart })}>
      <StyledBadge badgeContent={countCart}>
        <ShoppingCartOutlinedIcon  />
      </StyledBadge>
    </div>
  );
}





export default ResponsiveAppBar;
