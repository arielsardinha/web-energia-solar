import React from "react";
import {
  BoxTotal,
  TextFieldStyled,
  Conteudo,
  Button_Enviar,
  FormElementsContainer,
} from "../components/componentes";
import Image from "next/image";
import { Typography, CircularProgress } from "@material-ui/core";
import useIndex from "../../../../public/hooks/useAcess";
const LoginCadastro = () => {
  const {
    email,
    setEmail,
    setSenha,
    senha,
    erro,
    carregando,
    verificarEmailESenha,
  } = useIndex();
  return (
    <Conteudo>
      <BoxTotal>
        <div className="logo">
          <Image src="/logo.png" alt="" width={150} height={150} />
          <h2>Formulário de login</h2>
        </div>
        <FormElementsContainer>
          <TextFieldStyled
            label={"Email"}
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            required
          />
          <TextFieldStyled
            label={"Senha"}
            fullWidth
            value={senha}
            type="password"
            onChange={(event) => setSenha(event.target.value)}
            required
          />
          <div className="linkLogin">
            {/* <a href="http://localhost:3000/cadastro/cadastro">Criar Conta</a> */}
            <a href="">Esqueceu a senha? Clique aqui</a>
          </div>

          <div className="btnEntrar">
            {erro && <Typography color={"error"}>{erro}</Typography>}
            <Button_Enviar
              variant={"contained"}
              sx={{ width: "220px" }}
              disabled={!email || !senha || carregando}
              onClick={() => verificarEmailESenha(email, senha)}
            >
              {carregando ? <CircularProgress /> : "Entrar"}
            </Button_Enviar>
          </div>
        </FormElementsContainer>
      </BoxTotal>
    </Conteudo>
  );
};

export default LoginCadastro;
