import React from "react";
import { Sessao, Dados, Formulario, Logo } from "./footerHome.style";
import { Container, Box } from "@material-ui/core";

const Footer = () => (
  <>
    <Container>
      <Sessao>
        <Logo src="/logo.png" alt="logo" width={200} height={200} />
        <Box>
          <Dados>
            <h6>Contatos:</h6>
            <p>teste.gmail.com</p>
            <p>(84) 99999-9999</p>
            <p>endereço tal, rua tal, etc</p>
          </Dados>
        </Box>
        <Box>
          <Formulario action="" method="POST">
            <p>Envie nos um email:</p>
            <input type="text" name="" placeholder="email@email" />
            <textarea name="" rows={4} cols={50} />
            <input type="submit" />
          </Formulario>
        </Box>
      </Sessao>
    </Container>
    <Box style={{ backgroundColor: "#1A233A" }}>
      <p
        style={{
          color: "white",
          textAlign: "center",
          margin: "0",
          padding: "5px 0",
        }}
      >
        Como a Solfácil seleciona os instaladores parceiros?
      </p>
    </Box>
  </>
);

export default Footer;
