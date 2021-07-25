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
