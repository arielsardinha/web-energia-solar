import { styled } from "@material-ui/core";
export const TituloBox = styled("div")`
  background-color: #f0f0f0;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(5, 0)};
  h1 {
    margin: ${({ theme }) => theme.spacing(1, 0)};
    color: var(--blue-light);
  }
`;

export const BoxProposito = styled("section")`
  .txt-top,
  .txt-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(2, 1)};
  }
  .txt-top {
    text-align: right;
  }
  .txt-bottom {
    text-align: left;
    flex-direction: row-reverse;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    .txt-top,
    .txt-bottom {
      flex-wrap: wrap-reverse;
      text-align: left;
    }
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    img {
      width: 100%;
    }
  }
`;
export const Imagem = styled("img")``;

export const BoxPropositosBottom = styled("section")`
  text-align: center;
  margin: 30px 0;
  .box-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  aside {
    margin: 15px;
    padding: 10px;
    width: 200px;
    background-color: #f9f9f9;
    p {
      font-size: 0.8rem;
      margin-top: 10px;
    }
    h3,p {
      color: var(--blue-light);
    }
  }
`;
