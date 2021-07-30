import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  // pega o token e renomeia ele
  const { "nextauth-token": token } = parseCookies();

  // variavel que retorna as requisições da  api
  const api = axios.create({
    baseURL: "http://localhost:3333",
  });

  // só pra ver os dados que estao sendo enviados
  api.interceptors.request.use((config) => {
    console.log(config);
    return config;
  });
  // autenticação jwt
  // verifica se ja existe um token para preencher a informação
  if (token) {
    // pega a api, envia uma informação default, coloca um novo cabeçalho padrao chamado "autorization"
    api.defaults.headers["Autorization"] = `Bearer ${token}`;
  }
  return api;
}
