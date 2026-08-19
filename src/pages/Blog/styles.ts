import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-color: var(--background-color);
  transition: var(--transition);
  min-height: 100vh;
  padding-bottom: 60px;
`;

export const BlogHero = styled.div`
  padding: 20px 4% 40px 4%;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--background-color2);
    margin-bottom: 12px;
    letter-spacing: -0.5px;

    span {
      color: var(--text-color-blue-green);
    }
  }

  p {
    font-size: 1.1rem;
    color: var(--text-color);
    max-width: 650px;
    margin: 0 auto 36px auto;
    line-height: 1.6;
  }
`;

export const SearchBox = styled.div`
  max-width: 540px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 20px;
    font-size: 1.25rem;
    color: var(--text-color);
    pointer-events: none;
    transition: color 0.3s ease;
  }

  input {
    width: 100%;
    padding: 16px 20px 16px 54px;
    border-radius: 50px;
    border: none;
    outline: none;
    background-color: var(--background-color3);
    color: var(--background-color2);
    font-size: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    &::placeholder {
      color: var(--text-color);
      opacity: 0.7;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(0, 255, 8, 0.25), 0 8px 24px rgba(0, 0, 0, 0.12);

      [data-theme="light"] & {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.35), 0 8px 24px rgba(0, 0, 0, 0.12);
      }
    }
  }

  &:focus-within svg {
    color: var(--text-color-blue-green);
  }
`;

export const PostGrid = styled.main`
  max-width: 1280px;
  margin: 20px auto 60px auto;
  padding: 0 4%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const PostCard = styled.article`
  background-color: var(--background-color3);
  border-radius: 20px;
  border: none;
  outline: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .card-image img {
      transform: scale(1.08);
    }

    h2 {
      color: var(--text-color-blue-green);
    }
  }

  .card-image {
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .category-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(8px);
      color: var(--text-color-blue-green);
      font-size: 0.75rem;
      font-weight: 600;
      padding: 6px 14px;
      border-radius: 30px;
      text-transform: capitalize;
      letter-spacing: 0.5px;
    }
  }

  .card-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
      color: var(--background-color2);
      font-size: 1.15rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      transition: color 0.25s ease;
    }

    p {
      color: var(--text-color);
      font-size: 0.9rem;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 24px;
      flex: 1;
    }

    a {
      text-decoration: none;
      margin-top: auto;
    }

    button {
      width: 100%;
      padding: 12px 20px;
      border-radius: 12px;
      border: none;
      background-color: var(--text-color-blue-green);
      color: var(--background-color);
      font-weight: 700;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        font-size: 1.1rem;
        transition: transform 0.3s ease;
      }

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 255, 8, 0.35);

        [data-theme="light"] & {
          box-shadow: 0 6px 16px rgba(0, 123, 255, 0.5);
        }

        svg {
          transform: translateX(4px);
        }
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: var(--text-color);

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(0, 255, 8, 0.15);
    border-top: 4px solid var(--text-color-blue-green);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
    animation: ${pulse} 1.5s infinite;
  }
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
  color: var(--text-color);

  h3 {
    font-size: 1.4rem;
    color: var(--background-color2);
    margin-bottom: 8px;
  }

  p {
    font-size: 0.95rem;
    opacity: 0.8;
  }
`;

export const LegalNotice = styled.p`
  font-size: 0.8rem;
  color: var(--text-color);
  opacity: 0.7;
  text-align: center;
  max-width: 900px;
  margin: 40px auto 0 auto;
  padding: 0 20px;
  line-height: 1.5;
`;

export const SessaoFormulario = styled.section`
  background-color: var(--background-color);
  padding: 60px 4% 100px 4%;
  transition: var(--transition);

  .titulo {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--background-color2);
    text-align: center;
    margin-bottom: 30px;

    span {
      color: var(--text-color-blue-green);
    }
  }

  form {
    max-width: 580px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: var(--background-color3);
    padding: 36px;
    border-radius: 24px;
    border: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

    input,
    textarea {
      width: 100%;
      background-color: var(--background-color);
      border: none;
      outline: none;
      padding: 16px 20px;
      border-radius: 12px;
      color: var(--background-color2);
      font-size: 0.95rem;
      transition: all 0.3s ease;

      &::placeholder {
        color: var(--text-color);
        opacity: 0.7;
      }

      &:focus {
        box-shadow: 0 0 0 2px var(--text-color-blue-green);
      }
    }

    textarea {
      resize: none;
      min-height: 120px;
    }
  }

  .btn-enviar {
    display: flex;
    gap: 12px;
    margin-top: 10px;

    input[type="submit"],
    input[type="button"] {
      flex: 1;
      padding: 14px 24px;
      border-radius: 12px;
      border: none;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    input[type="submit"] {
      background-color: var(--text-color-blue-green);
      color: var(--background-color);

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 255, 8, 0.35);

        [data-theme="light"] & {
          box-shadow: 0 6px 16px rgba(0, 123, 255, 0.5);
        }
      }
    }

    input[type="button"] {
      background-color: transparent;
      color: var(--text-color);
      border: 1px solid var(--text-color);

      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        color: var(--background-color2);
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 600px) {
    padding: 40px 4% 60px 4%;

    form {
      padding: 24px;
    }
  }
`;
