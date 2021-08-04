import { useState } from "react";
export default function useIndex() {

  const [email, setEmail] = useState(""),
    [nome, setNome] = useState(""),
    [senha, setSenha] = useState(""),
    [confirmSenha, setConfirmSenha] = useState(""),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [proximo, setProximo] = useState(false),
    [formDois, setFormDois] = useState(false),
    [investidor, setInvestidor] = useState(false),
    [usina, setUsina] = useState(false),
    [cliente, setCliente] = useState(true);

  function cadastro2(target, event) {
    event.preventDefault();
    let btns = document.querySelectorAll(".box-btn-texto button");
    setCliente(false);
    setUsina(false);
    setInvestidor(false);
    if (target.value === "formCliente") {
      setCliente(true);
    } else if (target.value === "formUsina") {
      setUsina(true);
    } else if (target.value === "formInvestidor") {
      setInvestidor(true);
    }
    btns.forEach((btn) => {
      if (target === btn) {
        btn.classList.add("target");
      } else {
        btn.classList.remove("target");
      }
    });
  }
  function cadastroFormulario1(event) {
    setErro("");
    if (senha.length < 8) {
      setErro("A senha deve ter no mínimo: 8 digitos com letras e números!");
    } else if (senha != confirmSenha && senha.length >= 8) {
      setErro("a senha não é igual");
      if (nome) {
        event.preventDefault();
      }
    } else {
      setErro("");
      if (nome) {
        event.preventDefault();
      }
    }
    if (
      senha === confirmSenha &&
      email.length > 3 &&
      senha.length >= 8 &&
      nome
    ) {
      setProximo(true);
      setTimeout(() => {
        setFormDois(true);
      }, 2000);
      event.preventDefault();
    }
  }
  function concluirCadastro() {}
  function verificarEmailESenha(email, senha) {
    setCarregando(true);
    setErro("");
    if (email == resEmail && senha == resSenha) {
      setCarregando(false);
      setBuscaFeita(true);
      window.location.href = "http://localhost:3000/";
    } else if (email == "teste" && senha == "teste") {
      setCarregando(true);
    } else {
      setErro("Email ou Senha incorreta");
      setCarregando(false);
    }
  }
  return {
    email,
    setEmail,
    senha,
    setSenha,
    setConfirmSenha,
    confirmSenha,
    erro,
    carregando,
    buscaFeita,
    verificarEmailESenha,
    cadastroFormulario1,
    concluirCadastro,
    proximo,
    formDois,
    cadastro2,
    nome,
    setNome,
    investidor,
    usina,
    cliente,
  };
}
