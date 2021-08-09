import axios from "axios";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React, { useEffect } from "react";
import { useContext } from "react";
import HomeSistema from "../../components/sistemaGeral/sistema/sistema";
import { AuthContext } from "../../src/contexts/AuthContext";
// import { api } from "../../src/services/api";

function Sistema() {
  return <HomeSistema></HomeSistema>;
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // pega o token
  // const { ["nextauth-token"]: token } = parseCookies(ctx);

  // verifica se nao tem o token, caso nao tenha faz um redirect
//   if (!token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export default Sistema;
