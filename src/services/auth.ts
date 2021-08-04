import axios from "axios";

type SignInRequestData = {
  email: string;
  password: string;
};

//  função que simula uma chamada API
export async function signInRequest(data: SignInRequestData) {
  return await axios
    .post("http://api.solarangels.com.br/public/api/auth/login", data)
    .then((res) => {
      return {
        token: res.data.access_token,
        user: {
          name: res.data.name,
          email: res.data.state,
        },
      };
    });
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
