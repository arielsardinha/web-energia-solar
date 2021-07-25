import { styled } from "@material-ui/core";
export const Sessao = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin: ${({ theme }) => theme.spacing(5, 0)};
`;
export const TipoDeCliente = styled("div")`
  position: relative;
  bottom: 100px;
  p {
    margin: 10px 0;
  }
  div {
    text-align: center;
    color: white;
  }
  span {
    padding: ${({ theme }) => theme.spacing(0, 3)};
    height: 100px;
    margin: auto;
  }
  .txt-topo {
    position: relative;
    width: 34%;
    border-radius: 3px;
    p {
      padding: ${({ theme }) => theme.spacing(1)};
      margin: 0;
    }
  }
  .box-tipo-cliente {
    background-color: var(--blue-light);
    display: flex;
    padding: ${({ theme }) => theme.spacing(1, 3)};
    border-radius: 3px;
  }
  .txt-topo {
    background-color: var(--cor-principal);
  }
  .esquerda {
    border-right: solid 1px white;
  }
  .direita {
    border-left: solid 1px white;
  }
  .central {
    padding: ${({ theme }) => theme.spacing(1, 3)};
  }
  .select {
    background-color: var(--cor-principal);
    width: 70%;
    margin: auto;
    border-radius: 3px;
    padding: 3px 0;
    font-weight: 500;
    cursor: pointer;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    bottom: 25px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    span {
      height: 0;
      width: 50%;
      padding: ${({ theme }) => theme.spacing(2, 0)};
    }
    .box-tipo-cliente {
      flex-direction: column;
    }
    .txt-topo {
      width: 100%;
    }
    .esquerda {
      border-bottom: solid 1px white;
      border-right: none;
    }
    .direita {
      border-top: solid 1px white;
      border-left: none;
    }
  }
`;
export const Item = styled("div")`
  width: 250px;
  text-align: center;
  h3,
  p {
    color: var(--blue-black);
  }
  div {
    background-color: #fbfbfb;
  }
`;
export const ImagemFundo = styled("img")`
  width: 100%;
`;
