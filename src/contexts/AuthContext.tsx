import { createContext } from "react";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";
import { useState } from "react";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { useEffect } from "react";
import { api } from "../services/api";
type User = {
  name: string;
  email: string;
};
type SignInData = {
  email: string;
  password: string;
};
type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
};

// createContext vem de dentro do react
export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    //   estou pegando o nome do meu token e renomeando ele
    const { "nextauth-token": token } = parseCookies();
    if (token) {
      // vai atualizar o usuario
      recoverUserInformation().then((res) => setUser(res.user));
    }
  }, []);
  // função de autenticação com a data desestruturada
  async function signIn({ email, password }: SignInData) {
    // seria o lugar correto que se chama a api envia o email e senha e salva o token
    const { token, user } = await signInRequest({
      // data desestruturado
      email,
      password,
    });

    // função da biblioteca nookies ela salva a informação nos cookies
    setCookie(undefined, "nextauth-token", token, {
      // para ver os parametros que posso utilizar preciso instalar a tipagem da biblioteca cookies que roda por de baixo dos panos da nookies

      // informa o tempo que o cookie vai expirar
      maxAge: 60 * 60 * 1, //1 hora
    });

    // faz com que toda vez que o usuario realize a autenticação seja gerado um novo token
    api.defaults.headers["Autorization"] = `Bearer ${token}`;

    // informações do usuario logado
    // dessa forma faz com que o cook busca o usuario de dentro do banco para
    setUser(user);

    // biblioteca next que leva o usuario para a rota desejada
    Router.push("/sistema");
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
