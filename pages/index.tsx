import MenuNav from "../components/landingPage/menu/menu";
import Head from "next/head";
import SessaoHome from "../components/landingPage/home/sessaoHome";
import SessaoServicos from "../components/landingPage/sessao1Servicos/sessa2Servicos";
import SessaoPerguntas from "../components/landingPage/sessao3Perguntas/sessaoPergntas";
import Footer from "../components/landingPage/footer/footerHome";
import SessaoProdutos from "../components/landingPage/sessao2Produtos/sessao2Produtos";

function Home() {
  return (
    <>
      <Head>

      </Head>
      <MenuNav />
      <main>
        <SessaoHome />
        <SessaoServicos />
        <SessaoProdutos />
        <SessaoPerguntas />
      </main>
      <Footer />
    </>
  );
}

export default Home;
