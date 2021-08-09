import {
  AppBar,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Menu,
} from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { BoxMenu, BoxMenuP, Nav } from "../../landingPage/menu/menu.style";
import {
  BoxUsinas,
  MenuLateral,
  QualUsuario,
} from "../acess/components/componentes";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { api } from "../../../src/services/api";

const HomeSistema = () => {
  const [telhas, setTelhas] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function deletar(id) {
    api.delete(`/roof-structure/${id}`);
  }

  useEffect(() => {
    console.log('procurando')
    api
      .get(`/roof-structure`)
      .then((res) => setTelhas(res.data.roof_structures));
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ display: "flex" }}>
      <MenuLateral>
        <a href="" className="target">
          test
        </a>
        <a href="">test</a>
        <a href="">test</a>
        <a href="">test</a>
        <a href="">test</a>
      </MenuLateral>
      <div>
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
              <QualUsuario>Logado Como Investidor</QualUsuario>
            </Nav>
          </Container>
        </BoxMenu>
        <BoxUsinas>
          <div className="selecao">
            <h2>Usina</h2>
            <h2>
              <Link href={`/sistema/criar`}>Registrar</Link>
            </h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>telhas</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {telhas.map((telha) => (
                    <p key={telha.id}>{telha.roof_structure}</p>
                  ))}
                </td>
                <td>
                  {telhas.map((telha) => (
                    <div key={telha.id}>
                      <Link href={`/sistema/editar/${telha.id}`}>editar</Link>
                      <button type="button" onClick={() => deletar(telha.id)}>
                        excluir
                      </button>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </BoxUsinas>
      </div>
    </div>
  );
};
export default HomeSistema;
