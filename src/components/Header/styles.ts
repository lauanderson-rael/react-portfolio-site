import styled from "styled-components";

export const Container = styled.header`
  padding: 40px 4%;
  .interface {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 99px;
    height: 74px;
  }

  a {
    color: #5c5c5c;
    text-decoration: none;
    display: inline-block; // para dar zoon no hover
    transition: all.2s;
  }

  a:hover {
    color: #fff;
  }

  nav {
    ul {
      list-style: none;
    }
    li {
      display: inline-block;
      padding: 0 40px; // cima baixo | esq dir
    }
  }

  @media (max-width: 1010px) {
    .menu-desktop,
    .btn-contato {
      display: none;
    }
  }
`;
