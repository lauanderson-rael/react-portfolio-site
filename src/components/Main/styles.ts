import styled from "styled-components";
import Imagem from "../../assets/imagem.jpg";

export const Container = styled.main`
  // TELA 1
  section.topo-do-site {
    padding: 100px 4%;

    .flex {
      justify-content: space-around;
      align-items: center;
    }

    .txt-topo-site strong {
      font-size: 55px;
      color: #00ff08;
    }

    .informacoes{
      background-color: none;
      padding: 0;
      margin-bottom: 50px;
    }
    .txt-topo-site p {
      color: #fff;
      font-size: large;
      margin: 10px 0;
      padding: 0;
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
    //responsivo
    @media (max-width: 1020px) {
      height: 100dvh;
      padding: 10px 8%;

      .btn-contato button{
        font-size: none;
      }
      .txt-topo-site strong {
        font-size: 32px;
      }
      .txt-topo-site p{
        font-size: medium;
        margin: 0;
      }
      .informacoes{
        margin-top: 30px;
      }
      .flex {
        flex-direction: column-reverse;
        gap: 40px;
      }
      .img-topo-site img {
        width: 100%;
      }
      .btn-contato {
        display: flex;
        justify-content: center;
      }
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

    // responsivo
    @media (max-width: 1020px) {
      padding: 80px 8%;
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
      /* height: 485px; */
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
    // responsivo - sobre
    @media (max-width: 1020px) {
      padding: 30px 8%;
      .flex {
        flex-direction: column-reverse;
      }
      .txt-sobre h2 {
        font-size: 32px;
        line-height: 35px;
        text-align: center;
      }
      .btn-social {
        text-align: center;
      }
      .img-sobre img {
        width: 100%;
      }
    }
  }
  // SESSAO PORTIFOLIO - TELA 4
  .portfolio {
    padding: 80px 4%;
    margin-top: 80px;

    box-shadow: 0 0 40px 10px #ffffff1d; //barra de sombra

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

  // responsivo - portfolio
  @media (max-width: 1020px) {
    .img-port {
      width: 100%;
      max-width: 360px;
      margin: 0 auto;
    }
    .portfolio .flex {
      gap: 60px;
    }
  }
`;

// SESSÃO FORMULARIO - TELA 5
export const SessaoFormulario = styled.section`
  padding: 80px 4%;
  margin-top: 40px;

  form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;

    input,
    textarea {
      width: 100%;
      background-color: #242424;
      border: 0;
      outline: none;
      padding: 20px 15px; // cima baixo - laterais
      border-radius: 15px;
      font-size: 18px;
      color: #fff;
    }

    textarea {
      resize: none;
      max-height: 180px;
    }
  }
  form input::placeholder {
    // color: xxxxxx;
  }

  .btn-enviar {
    margin-top: 20px;
    text-align: center;

    input[type="submit"] {
      width: 120px;
      color: #000;
      font-weight: 700;
      background-color: #00fe08;
      cursor: pointer;
      transition: all.2s;
    }

    input:hover {
      box-shadow: 0px 0px 8px #00ff08;
      transform: scale(1.05);
    }
  }
`;

//FOOTER - TELA 6
export const Footer = styled.footer`
  padding: 40px 4%;
  box-shadow: 0 0 40px 10px #ffffff1d;

  img {
    width: 99px;
    height: 74px;
  }


  .flex {
    justify-content: space-between;
  }

  .line-footer {
    padding: 20px 0;
  }

  .borda {
    border-top: 2px solid #00ff08;
  }

  .line-footer p i {
    color: #00ff08;
    font-size: 22px;
  }

  .line-footer p a {
    color: #fff;
  }

  @media (max-width: 1020px) {
    .flex {
      gap: 30px;
    }
    .line-footer {
      text-align: center;
    }
  }
`;
