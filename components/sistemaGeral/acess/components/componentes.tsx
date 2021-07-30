import { styled } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export const Conteudo = styled("div")`
  width: 100%;
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(11, 67, 93, 1) 43%,
    rgba(0, 212, 255, 1) 100%
  );
`;
export const BoxTotal = styled("div")`
  width: 50%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
  border-radius: ${({ theme }) => theme.spacing()};
  .logo {
    text-align: center;
    color: var(--blue-light);
  }
`;
export const TextFieldStyled = styled(TextField)`
  .muiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiOutlineInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
export const Button_Enviar = styled(Button)`
  background-color: var(--blue-light);
  font-weight: 600;
`;
export const BoxFormETexto = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .closeForm2 {
    display: none;
  }
  .opemForm2 {
    display: flex;
  }
  .closeForm1 {
    display: none;
  }
  .texto_fora {
    width: 50%;
  }
  .texto {
    display: flex;
    p,
    button {
      background-color: #e5e5e5;
      margin: 0;
      padding: 10px;
      border-radius: 0 ${({ theme }) => theme.spacing(2)} 0 0;
      color: black;
      font-weight: 500;
      border: solid 1px black;
    }
    p:first-child {
      background-color: var(--blue-light);
      color: white;
      &.proximo {
        background-color: #e5e5e5;
        color: black;
      }
    }
    p.proximo {
      background-color: var(--blue-light);
      color: white;
    }
    button {
      cursor: pointer;
      background-color: #e5e5e5;
      color: black;
      &.target {
        background-color: var(--blue-light);
        color: white;
      }
    }
  }
  .btn-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }) => theme.spacing(5)} 0;
  }
`;
export const FormElementsContainer = styled("form")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 90%;
  max-width: 650px;
  margin: ${({ theme }) => theme.spacing(5)} auto;
  .btnEntrar {
    text-align: center;
  }
  .linkLogin {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing()};
    a {
      color: var(--cor-principal);
      &:hover {
        color: var(--cor-principal-hover);
      }
    }
  }
  .texto_dentro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .form2 {
    border: solid 1px black;
    width: 100%;
  }
  .user {
    background-color: #c8c8c8;
    width: 100%;
    padding: 20px;
    border-radius: 2px;
    text-align: left;
    p {
      font-weight: 500;
      color: #626569;
    }
  }
`;
export const FormCliente = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)} 0;
  a {
    color: var(--blue-light);
    padding: ${({ theme }) => theme.spacing()};
    background-color: white;
    border-radius: ${({ theme }) => theme.spacing()};
    font-weight: 500;
  }
  .politicaPrivacidade {
    display: flex;
    align-items: center;
    width: 90%;
    input {
      margin-right: 10px;
    }
  }
`;
export const FormInvestidor = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)} 0;
  .box-investidor-data-investiu {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }
  .box-investidor-investiu {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
    }
  }
  .radios {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    label {
      font-weight: 500;
      color: #626569;
    }
  }
`;
export const FormUsina = styled("div")``;
