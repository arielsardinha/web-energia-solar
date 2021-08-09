import react, { useEffect } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import {
  BoxFormETexto,
  Button_Enviar,
  FormElementsContainer,
  TextFieldStyled,
} from "../../../components/sistemaGeral/acess/components/componentes";

import { api } from "../../../src/services/api";

const Editar = () => {
  const { register, handleSubmit } = useForm();
  function handleSignIn(data) {
    console.log(data);
    api.post(`/roof-structure/register`, data);
    Router.push("/sistema");
  }

  return (
    <BoxFormETexto>
      <FormElementsContainer onSubmit={handleSubmit(handleSignIn)}>
        <TextFieldStyled
          label={"roof structure"}
          fullWidth
          type="text"
          required
          {...register("roof_structure")}
        />
        <Button_Enviar
          variant={"contained"}
          sx={{ width: "220px" }}
          type={"submit"}
        >
          Salvar
        </Button_Enviar>
      </FormElementsContainer>
    </BoxFormETexto>
  );
};

export default Editar;
