import React from "react";
import {
  BoxTotal,
  TextFieldStyled,
  Conteudo,
  Button_Enviar,
  FormElementsContainer,
} from "../components/componentes";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../../src/contexts/AuthContext";
import axios from "axios";

const LoginCadastro = () => {
  const { register, handleSubmit } = useForm();

  //  pega a função que esta dentro da AuthContext
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    await signIn(data);
  }

  return (
    <Conteudo>
      <BoxTotal>
        <div className="logo">
          <Image src="/logo.png" alt="" width={150} height={150} />
          <h2>Formulário de login</h2>
        </div>
        {/* quando o usuario fizer um submit ele chama a função handleSignIn
            a função handleSubmit faz algumas tratativas automaticamente
        */}
        <FormElementsContainer onSubmit={handleSubmit(handleSignIn)}>
          <TextFieldStyled
            label={"Email"}
            fullWidth
            type="email"
            required
            {...register("email")}
          />
          <TextFieldStyled
            label={"Senha"}
            fullWidth
            type="password"
            required
            {...register("password")}
          />
          <div className="linkLogin">
            {/* <a href="http://localhost:3000/cadastro/cadastro">Criar Conta</a> */}
            <a href="">Esqueceu a senha? Clique aqui</a>
          </div>

          <div className="btnEntrar">
            <Button_Enviar
              variant={"contained"}
              sx={{ width: "220px" }}
              type={"submit"}
            >
              Entrar
            </Button_Enviar>
          </div>
        </FormElementsContainer>
      </BoxTotal>
    </Conteudo>
  );
};

export default LoginCadastro;
