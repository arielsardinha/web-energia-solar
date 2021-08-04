import axios from "axios";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../src/contexts/AuthContext";
// import { api } from "../../src/services/api";

function Sistema() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://api.solarangels.com.br/public/api/roof-structure")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <div>sistema</div>
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
