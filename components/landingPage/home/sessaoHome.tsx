import React from "react";
import { Home, Sessao, ImagemFundo } from "./sessaoHome.style";
import { Container } from "@material-ui/core";

const SessaoHome = () => (
  <Sessao>
    <Container style={{ position: "relative" }}>
      <ImagemFundo src="./logo.png" />
      <Home>
        <h1>
          Venha ser um <span>investidor!</span>
        </h1>
        <div>
          <span></span>
          <p>
            Gere sua própria energia limpa e renovável, além de contribuir com a
            geração de empregos na sua região.
          </p>
        </div>
        <div>
          <span></span>
          <p>
            Ganhe com economia imediata na sua conta de luz e com mais de 20
            anos de geração de energia grátis após o período de investimento.
          </p>
        </div>
        <div>
          <span></span>
          <p>
            Fazemos parcerias com instaladores cuidadosamente selecionados para
            executar o seu projeto.
          </p>
        </div>
      </Home>
    </Container>
  </Sessao>
);
export default SessaoHome;
