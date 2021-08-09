import react, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  BoxFormETexto,
  Button_Enviar,
  FormElementsContainer,
  TextFieldStyled,
} from "../../../components/sistemaGeral/acess/components/componentes";

import { api } from "../../../src/services/api";

const EditarId = () => {
  const [telhas, setTelhas] = useState([]);
  const router = useRouter();
  const id = router.query.id;

  const { register, handleSubmit } = useForm();

  function handleSignIn(data) {
    console.log(data);
    api.put(`/roof-structure/${id}`, data);
    Router.push("/sistema");
  }

  api
    .get(`roof-structure/${id}`)
    .then((res) => setTelhas(res.data.roof_structure.roof_structure));

  return (
    <BoxFormETexto>
      <FormElementsContainer onSubmit={handleSubmit(handleSignIn)}>
        <TextFieldStyled
          label={telhas}
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

export default EditarId;
