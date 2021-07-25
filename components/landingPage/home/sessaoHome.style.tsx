import { styled, Container } from "@material-ui/core";

export const Sessao = styled("div")`
  position: relative;
  background-image: url("./background-home.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 735px;
  margin-top: 90px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: 0px;
  }
`;
export const Home = styled(Container)`
  color: ${({ theme }) => theme.palette.common.white};
  width: 550px;
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: #fff;
  position: absolute;
  top: 20vh;
  left: 50%;
  z-index: 2;
  text-align: left;
  border-radius: 5px;
  div {
    display: flex;
    align-items: center;
    span::before {
      content: "aaa";
      color: transparent;
      background-color: var(--cor-principal);
      border-radius: 5px;
      margin-right: ${({ theme }) => theme.spacing(2)};
    }
  }
  h1,
  p {
    padding: ${({ theme }) => theme.spacing(1, 0)};
  }
  h1 {
    color: var(--blue-light);
    text-align: center;
    span {
      color: var(--cor-principal);
    }
  }
  p {
    color: var(--blue-light);
  }
  ${({ theme }) => theme.breakpoints.down("lg")} {
    left: 35%;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    left: 5%;
    width: 90%;
  }
  ${({theme})=> theme.breakpoints.down('sm')}{
      padding: ${({theme})=>theme.spacing(2,1)};
      width: 90%;
  }
`;
export const ImagemFundo = styled("img")`
  position: absolute;
  left: 30px;
  top: 200px;
  z-index: 1;
  width: 300px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    left: 35%;
    top: 450px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;
