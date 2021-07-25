import { styled } from "@material-ui/core";

export const Sessao = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 280px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    height: 100%;
  }
`;
export const Logo = styled("img")`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
export const Dados = styled("div")`
  color: var(--blue-light);
  h6 {
    font-size: 20px;
    font-weight: 700;
    margin: ${({ theme }) => theme.spacing(3, 0)};
  }
  p {
    margin: 10px 0;
    &::before {
      content: "aaa";
      color: transparent;
      border-radius: 5px;
      margin-right: ${({ theme }) => theme.spacing(2)};
      background-color: var(--cor-principal);
    }
  }
`;

export const Formulario = styled("form")`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-weight: 700;
    color: var(--blue-light);
  }
  textarea {
    padding: ${({ theme }) => theme.spacing()};
  }
  input {
    text-align: center;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing()};
    padding: ${({ theme }) => theme.spacing(0.8)};
  }
  input:last-child {
    background-color: var(--cor-principal);
    border: ${({ theme }) => theme.palette.warning.dark};
    padding: ${({ theme }) => theme.spacing(0.8, 8)};
    border-radius: ${({ theme }) => theme.spacing(0.5)};
    margin-top: ${({ theme }) => theme.spacing()};
    color: white;
    cursor: pointer;
    width: 50%;
    &:hover {
      background-color: var(--cor-principal-hover);
    }
  }
  ${({ theme }) => theme.breakpoints.down(400)} {
    align-items: center;
    input,
    textarea {
      width: 300px;
    }
  }
`;
