import React from "react";
import { Container } from "@material-ui/core";
import { TituloBox, BoxProposito,Imagem } from "./sessao2Produtos.style";

const SessaoProdutos = () => (
  <>
    <TituloBox>
      <Container>
        <h1>Nosso proposito</h1>
        <p>
          Nosso propósito é fazer com que todos os brasileiros e brasileiras
          possam investir na fonte mais sustentável e abundante de energia que
          existe – o Sol.
        </p>
      </Container>
    </TituloBox>
    <Container>
      <BoxProposito>
        <aside className="txt-top">
          <div>
            <h1>Nosso proposito</h1>
            <p>
              Temos uma rede de parceiros instaladores em todos os estados do
              Brasil que executa o projeto de energia solar no telhado do seu
              imóvel e você paga em até 120x com juros muito acessíveis. Tão
              acessíveis que a prestação mensal fica até 30% inferior à economia
              de energia que você tem com o sistema.
            </p>
          </div>
          <Imagem src="./Rectangle163.png" alt="" />
        </aside>
      </BoxProposito>
      <BoxProposito>
        <aside className="txt-bottom">
          <div>
            <h1>Nosso proposito</h1>
            <p>
              Temos uma rede de parceiros instaladores em todos os estados do
              Brasil que executa o projeto de energia solar no telhado do seu
              imóvel e você paga em até 120x com juros muito acessíveis. Tão
              acessíveis que a prestação mensal fica até 30% inferior à economia
              de energia que você tem com o sistema.
            </p>
          </div>
          <Imagem src="./Rectangle99.png" alt="" />
        </aside>
      </BoxProposito>
    </Container>
  </>
);

export default SessaoProdutos;
