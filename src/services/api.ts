import axios from "axios";
import { parseCookies } from "nookies";

// // pega o token e renomeia ele
const { "nextauth-token": token } = parseCookies();

// // variavel que retorna as requisições da  api
export const api = axios.create({
  baseURL: "http://api.solarangels.com.br/public/api",
});

// // só pra ver os dados que estao sendo enviados
api.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
// // autenticação jwt
// // verifica se ja existe um token para preencher a informação
if (token) {
  // pega a api, envia uma informação default, coloca um novo cabeçalho padrao chamado "autorization"
  api.defaults.headers.common["Autorization"] = token;
}
