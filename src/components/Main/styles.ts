import styled from "styled-components";
import Imagem from "../../assets/imagem.jpg";

export const Container = styled.main`
  // TELA 1
  section.topo-do-site {
    padding: 40px 4%;

    .txt-topo-site h1 {
      color: #fff;
      font-size: 42px;
      line-height: 40px;
      span {
        color: #00ff08;
      }
    }

    .flex {
      justify-content: center;
      align-items: center;
      gap: 90px;
    }

    .txt-topo-site p {
      color: #fff;
      margin: 40px 0;
    }

    .img-topo-site img {
      width: 300px;
      height: 300px;
      border: 8px solid #00ff08;
      border-radius: 50%;

      position: relative; // para funcionar animacao
      animation: flutuar 2s ease-in-out infinite alternate;

      filter: drop-shadow(0 0 0.8rem #00ff08);
      box-shadow: 1px 1px 0.5rem #00ff08;
    }
  }

  // ANIMAÇÃO
  @keyframes flutuar {
    0% {
      top: 0;
    }
    100% {
      top: 30px;
    }
  }

  // ESPECIALIDADES - TELA 2
  .especialidades {
    padding: 80px 4%;

    h2 span {
      color: #00ff08;
    }
    .flex {
      gap: 60px;
    }

    // COMPONENTE - ITEM
    .especialidades-box {
      color: #fff;
      padding: 40px;
      transition: all.2s;
      margin-top: 45px;
      border-radius: 20px;

      .icone {
        font-size: 70px;
        color: #00ff08;
      }
      h3 {
        font-size: 28px;
        margin: 15px 0;
      }
    }

    .especialidades-box:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px #ffffff78;
    }
  }

  // SESSAO SOBRE - TELA 3
  .sobre {
    padding: 80px 0;

    .flex {
      align-items: center;
      gap: 60px;
    }

    .img-sobre img {
      width: 344px;
      height: 485px;
      border-radius: 25px;
    }
    .txt-sobre {
      color: #fff;

      h2 {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 30px;
        span {
          color: #00ff08;
          display: block;
        }
      }

      p {
        margin: 20px 0; // cima baixo / laterais
        text-align: justify;
      }

      .btn-social button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background-color: #00ff08;
        font-size: 30px;
        cursor: pointer;
        padding-top: 5px;
        margin: 0 5px; // cima baixo / laterais
        transition: all.2s;
      }
    }
  }
  // SESSAO PORTIFOLIO - TELA 4
  .portfolio {
    padding: 80px 4%;
    box-shadow: 0 0 40px 10px #ffffff1d;

    .flex {
      justify-content: space-around;
      margin-top: 60px;
    }
  }

  .img-port {
    width: 360px;
    height: 460px;
    background-image: url(${Imagem});
    background-size: cover;
    background-position: 100% 0%;
    transition: 8s;
    cursor: pointer;
    border-radius: 40px;
    position: relative;
  }

  .img-port:hover {
    background-position: 100% 100%;
  }

  // COMPONENTE - PROJETO
  .img-port .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000b8;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    opacity: 0;
    transition: all.5s;
  }

  .overlay:hover {
    opacity: 1;
  }
`;
