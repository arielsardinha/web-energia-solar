import React from "react";
import InputMask from "react-input-mask";
import useIndex from "../../../../src/hooks/useAcess";
import { Typography } from "@material-ui/core";
import {
  Conteudo,
  BoxTotal,
  FormElementsContainer,
  TextFieldStyled,
  Button_Enviar,
  BoxFormETexto,
  FormCliente,
  FormInvestidor,
  FormUsina,
} from "../components/componentes";
import Image from "next/image";

const Cadastro = () => {
  const {
    cadastroFormulario1,
    erro,
    proximo,
    formDois,
    concluirCadastro,
    setEmail,
    setConfirmSenha,
    confirmSenha,
    setSenha,
    senha,
    cadastro2,
    nome,
    setNome,
    investidor,
    usina,
    cliente,
  } = useIndex();
  return (
    <Conteudo>
      <BoxFormETexto>
        <div className="texto texto_fora">
          <p className={formDois ? "proximo" : ""}>
            Passo 1: cadastro de usuário
          </p>
          <p className={formDois ? "proximo" : ""}>
            Passo 2: selecionar forma de acesso
          </p>
        </div>
        <BoxTotal>
          <div className="logo">
            <Image src="/logo.png" alt="" width={150} height={150} />
            <h2>Formulário De Cadastro</h2>
          </div>
          <form action="">
            <FormElementsContainer className={proximo ? "closeForm1" : ""}>
              <TextFieldStyled
                label={"Nome"}
                name={"Nome"}
                onChange={(event) => setNome(event.target.value)}
                required
              />
              <div style={{ display: "flex" }}>
                <InputMask mask={"99999-999"} type="number">
                  {() => {
                    return (
                      <TextFieldStyled
                        label={"CEP"}
                        name={"CEP"}
                        style={{ marginRight: " 30px" }}
                      />
                    );
                  }}
                </InputMask>

                <TextFieldStyled label={"Cidade"} name={"Cidade"} fullWidth />
              </div>
              <div style={{ display: "flex" }}>
                <InputMask mask={"aa"}>
                  {() => {
                    return (
                      <TextFieldStyled
                        label={"UF"}
                        name={"UF"}
                        style={{ marginRight: " 30px" }}
                      />
                    );
                  }}
                </InputMask>

                <TextFieldStyled label={"Bairro"} name={"Bairro"} fullWidth />
              </div>
              <div style={{ display: "flex" }}>
                <TextFieldStyled
                  label={"Rua"}
                  name={"Rua"}
                  fullWidth
                  style={{ marginRight: " 30px" }}
                />
                <TextFieldStyled label={"Numero"} name={"Numero"} />
              </div>
              <TextFieldStyled label={"Logradouro"} name={"Logradouro"} />
              <InputMask mask={"(99)99999-9999"}>
                {() => {
                  return (
                    <TextFieldStyled label={"Telefone"} name={"Telefone"} />
                  );
                }}
              </InputMask>
              <TextFieldStyled
                label={"Email"}
                name={"Email"}
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <TextFieldStyled
                label={"Senha"}
                name={"Senha"}
                required
                type="password"
                onChange={(event) => setSenha(event.target.value)}
              />

              <TextFieldStyled
                label={"Confirmar senha"}
                name={"Confirmar senha"}
                type="password"
                onChange={(event) => setConfirmSenha(event.target.value)}
                required
              />
              {senha.length < 8 ? (
                <Typography color={"error"}>{erro}</Typography>
              ) : (
                ""
              )}
              {senha != confirmSenha && senha.length >= 8 ? (
                <Typography color={"error"}>{erro}</Typography>
              ) : (
                ""
              )}
            </FormElementsContainer>
            <FormElementsContainer
              className={formDois ? "opemForm2" : "closeForm2"}
            >
              <div className="texto_dentro">
                <div className="box-btn-texto texto">
                  <button
                    className="target"
                    value="formCliente"
                    onClick={() => cadastro2(event.target, event)}
                  >
                    Cadastro como cliente
                  </button>
                  <button
                    value="formUsina"
                    onClick={() => cadastro2(event.target, event)}
                  >
                    Cadastro como usina
                  </button>
                  <button
                    value="formInvestidor"
                    onClick={() => cadastro2(event.target, event)}
                  >
                    Cadastro como investidor
                  </button>
                </div>
                <div className="form2">
                  <FormElementsContainer id="box-id-form2">
                    {cliente && (
                      <FormCliente id="formCliente">
                        <div className="user">
                          <p>{nome}</p>
                          <p>ID do usuário: 2</p>
                        </div>
                        <TextFieldStyled
                          label={"Consumo de energia em kwh:"}
                          name={"consumoDeEnergia"}
                          required
                          type="text"
                          fullWidth
                        />
                        <div>
                          <h3>
                            Acesse os termos de politica e de privacidade:
                          </h3>
                          <br />
                          <a href="/">Politica de acesso</a>
                        </div>
                        <div className="politicaPrivacidade">
                          <input type="checkbox" name="" id="" />
                          <p>
                            Compreendo e concordo com todos os termos e
                            condições da polica e privacidade contidas neste
                            site.
                          </p>
                        </div>
                      </FormCliente>
                    )}
                    {usina && <FormUsina>em construção</FormUsina>}
                    {investidor && (
                      <FormInvestidor id="formInvestidor">
                        <div className="user">
                          <p>{nome}</p>
                          <p>ID do usuário: 2</p>
                        </div>
                        <InputMask mask={"99.999.999/9999-99"}>
                          {() => {
                            return (
                              <TextFieldStyled
                                label={"CNPJ"}
                                name={"CNPJ"}
                                required
                                type="text"
                                fullWidth
                              />
                            );
                          }}
                        </InputMask>
                        <InputMask mask={"999.999.999-99"}>
                          {() => {
                            return (
                              <TextFieldStyled
                                label={"CPF"}
                                name={"CPF"}
                                required
                                type="text"
                                fullWidth
                              />
                            );
                          }}
                        </InputMask>
                        <div className="box-investidor-data-investiu">
                          <InputMask mask={"99/99/999"}>
                            {() => {
                              return (
                                <TextFieldStyled
                                  label={"Data de nascimento"}
                                  name={"dataDeNascimento"}
                                  required
                                  type="text"
                                />
                              );
                            }}
                          </InputMask>
                          <div className="box-investidor-investiu">
                            <p>Já investiu antes ?</p>
                            <div>
                              <input
                                type="radio"
                                name="jaInvestiu"
                                id="investiuSim"
                              />
                              <label htmlFor="investiuSim">Sim</label>
                              <input
                                type="radio"
                                name="jaInvestiu"
                                id="investiuNao"
                              />
                              <label htmlFor="investiuNao">Não</label>
                            </div>
                          </div>
                        </div>
                        <p>Tempo de investimento</p>
                        <div className="radios">
                          <div>
                            <input
                              type="radio"
                              name="tempoDeInvestimento"
                              id="curtoPrazo"
                            />
                            <label htmlFor="curtoPrazo">Curto prazo</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="tempoDeInvestimento"
                              id="medioPrazo"
                            />
                            <label htmlFor="medioPrazo">Médio prazo</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="tempoDeInvestimento"
                              id="longoPrazo"
                            />
                            <label htmlFor="longoPrazo">Longo prazo</label>
                          </div>
                        </div>
                      </FormInvestidor>
                    )}
                  </FormElementsContainer>
                </div>
              </div>
            </FormElementsContainer>
            <div className="btn-input">
              <Button_Enviar
                variant={"contained"}
                sx={{ width: "220px" }}
                type="submit"
                onClick={
                  proximo
                    ? () => concluirCadastro()
                    : () => cadastroFormulario1(event)
                }
              >
                {proximo ? "Enviar" : "Proximo"}
              </Button_Enviar>
            </div>
          </form>
        </BoxTotal>
      </BoxFormETexto>
    </Conteudo>
  );
};

export default Cadastro;
