import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../src/contexts/AuthContext";
import { api } from "../../src/services/api";


function Sistema() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/users");
  }, []);

  return (
    <div>
      <div>sistema</div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  // pega o token
  const { ["nextauth-token"]: token } = parseCookies(ctx);

  // verifica se nao tem o token, caso nao tenha faz um redirect
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Sistema;
