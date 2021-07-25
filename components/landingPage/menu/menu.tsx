import React from "react";
import { BoxMenu, Nav, LinkAcesso, BoxMenuP } from "./menu.style";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

const MenuNav = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BoxMenu>
      <BoxMenuP>
        <AppBar position="static">
          <Toolbar>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar2"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Acessar2</MenuItem>
                <MenuItem onClick={handleClose}>Nova Conta2</MenuItem>
              </Menu>
            </div>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
      </BoxMenuP>

      <Container>
        <Nav>
          <div>
            <Image src="/logo.png" alt="logo" width={90} height={90} />
            <div
              style={{
                borderRight: "solid 2px black",
                paddingRight: "50px",
                height: "50px",
              }}
            ></div>
            <a href={"#"}>Home</a>
            <a href={"#"}>Produtos</a>
            <a href={"#"}>Simulação</a>
          </div>
          <LinkAcesso href={"http://localhost:3000/login/Login"}>
            Acesse já
          </LinkAcesso>
        </Nav>
      </Container>
    </BoxMenu>
  );
};

export default MenuNav;
