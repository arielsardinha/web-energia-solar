import React from "react";
import {
  Sessao,
  Item,
  ImagemFundo,
  TipoDeCliente,
} from "./sessa2Servicos.style";
import { Container } from "@material-ui/core";

const SessaoServicos= () => (
  <Container>
    {/* <TipoDeCliente>
      <div className="txt-topo">
        <p>Venha utilizar nossa plataforma:</p>
      </div>
      <div className="box-tipo-cliente">
        <div>
          <h2>Cliente</h2>
          <p>Venha ver um pouco do que temas preparados para vocês clientes.</p>
          <p>Em breve !</p>
        </div>
        <span className="esquerda"></span>
        <div className="central">
          <h2>Usina</h2>
          <p>Venha ver um pouco do que temas preparados para vocês clientes.</p>
          <p>Em breve !</p>
        </div>
        <span className="direita"></span>
        <div>
          <h2>Cliente</h2>
          <p>Venha ver um pouco do que temas preparados para vocês clientes.</p>
          <p className="select">Você está aqui !</p>
        </div>
      </div>
    </TipoDeCliente> */}
    <h1>
      Venha investir em energia solar
      <br />
      <span>Casos de sucesso</span>
    </h1>
    <Sessao>
      <Item>
        <div>
          <ImagemFundo src="./Rectangle45.png" alt="" />
          <h3>Instalação local</h3>
          <p>
            Gere sua própria energia limpa e renovável, além de contribuir com a
            geração de empregos na sua região.
          </p>
        </div>
      </Item>
      <Item>
        <div>
          <ImagemFundo src="./Rectangle51.png" alt="" />
          <h3>Instalação local</h3>
          <p>
            Gere sua própria energia limpa e renovável, além de contribuir com a
            geração de empregos na sua região.
          </p>
        </div>
      </Item>
      <Item>
        <div>
          <ImagemFundo src="./Rectangle57.png" alt="" />
          <h3>Instalação local</h3>
          <p>
            Gere sua própria energia limpa e renovável, além de contribuir com a
            geração de empregos na sua região.
          </p>
        </div>
      </Item>
    </Sessao>
  </Container>
);
export default SessaoServicos;
