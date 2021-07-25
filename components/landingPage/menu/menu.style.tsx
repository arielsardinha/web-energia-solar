import { styled, Link } from "@material-ui/core";

export const BoxMenu = styled("div")`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: var(--branco);
`;

export const Nav = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
  div {
    display: flex;
    align-items: center;
    a {
      color: var(--blue-light);
      margin: ${({ theme }) => theme.spacing(0, 0, 0, 4)};
      font-weight: 700;
      &:hover {
        color: var(--blue-light);
        text-decoration: none;
      }
    }
  }
`;
export const BoxMenuP = styled("div")`
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
  }
`;
export const LinkAcesso = styled(Link)`
  background-color: var(--cor-principal);
  padding: ${({ theme }) => theme.spacing(1, 10)};
  border-radius: ${({ theme }) => theme.spacing()};
  font-weight: 500;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: var(--cor-principal-hover);
  }
`;
