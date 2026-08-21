import styled from "styled-components";

export const SessaoFormulario = styled.section`
  background-color: var(--background-color);
  transition: var(--transition);
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
      background-color: rgb(231, 231, 231);
      border: 0;
      outline: none;
      padding: 20px 15px; // cima baixo - laterais
      border-radius: 15px;
      /* font-size: 18px; */
    }

    textarea {
      resize: none;
      max-height: 180px;
    }
  }

  .btn-enviar {
    margin-top: 20px;
    text-align: center;

    input[type="submit"] {
      color: var(--background-color);
      font-weight: 700;
      background-color: var(--text-color-blue-green);
      cursor: pointer;
      transition: all.2s;
    }

    input:hover {
      box-shadow: 0px 0px 8px var(--text-color-blue-green);
      transform: scale(1.03);
    }
  }

  // botao limpar
  input[type="reset"] {
    color: #000;
    font-weight: 700;
    background-color: #fff;
    cursor: pointer;
    transition: all.2s;
    border: 1px solid var(--text-color);
  }
  input[type="reset"]:hover {
    box-shadow: 0px 0px 8px var(--text-color-blue-green);
    transform: scale(1.03);
  }
  // limpar

  // tabs
  .tabs {
    display: flex;
    justify-content: center;
    gap: 0;
    margin-top: 40px;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid #ccc;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .tab-button {
    flex: 1;
    padding: 12px 20px;
    border: none;
    background-color: rgb(231, 231, 231);
    color: #555;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .tab-button.active {
    background-color: var(--text-color-blue-green);
    color: var(--background-color);
  }

  .tab-button:hover:not(.active) {
    background-color: #ddd;
  }
  // tabs

  @media (max-width: 1020px) {
    form input,
    form textarea {
      font-size: small;
    }
  }
`;
