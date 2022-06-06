
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
const ResponsiveAppBar = () => {
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
        <ShoppingCartOutlinedIcon 
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
                marginLeft: "auto",
              }}
              />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

