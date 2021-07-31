import { v4 as uuid } from "uuid";
import axios from "axios";

type SignInRequestData = {
  email: string;
  password: string;
};


// promisses para simular o tempo de requisição
// const delay = (amount = 750) =>
//   new Promise((resolve) => setTimeout(resolve, amount));

//  função que simula uma chamada API
export async function signInRequest(data: SignInRequestData) {
  // await delay();

  return {
    // uuid ela gera um id unico universal
    token: uuid(),
    user: {
      name: "ariel",
      email: "res",
    },
  };
}

// função que recebe o token e devolve as informações do usuario que tem o token
// precisa receber o token do back para poder fazer a validação do token e retornar o usuario
export async function recoverUserInformation() {
  // await delay();

  return {
    user: {
      name: "ariel",
      email: "email@email",
    },
  };
}
