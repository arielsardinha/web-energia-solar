import { styled } from "@material-ui/core";

export const Sessao = styled("div")`
  background-image: url("./Rectangle100.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 770px;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down(465)} {
    height: 100%;
  }
`;
export const Conteudo = styled("div")`
  h1 {
    color: var(--cor-principal);
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    background: none;
  }
`;
export const BoxConteudo = styled("div")`
  margin: 20px 0;
  p {
    color: white;
    background-color: var(--blue-light);
    width: 50%;
    padding: ${({ theme }) => theme.spacing(2)};
    margin: 0;
    border-radius: 5px;
    position: relative;
    z-index: 1;
    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 80%;
    }
    ${({ theme }) => theme.breakpoints.down(400)} {
      width: 90%;
    }
  }
  p:last-child {
    color: ${({ theme }) => theme.palette.warning.dark};
    background-color: var(--branco);
    margin: 0 20px;
    position: relative;
    bottom: 5px;
  }
`;
