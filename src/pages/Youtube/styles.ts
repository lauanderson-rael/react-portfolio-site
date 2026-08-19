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

export const Container = styled.div`
  background-color: var(--background-color);
  transition: var(--transition);
  min-height: 100vh;
  padding-bottom: 80px;
`;

export const YoutubeHero = styled.div`
  padding: 120px 4% 40px 4%;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--background-color2);
    margin-bottom: 16px;
    letter-spacing: -0.5px;

    span {
      color: #ff0000;
    }
  }

  p {
    font-size: 1.1rem;
    color: var(--text-color);
    max-width: 680px;
    margin: 0 auto 32px auto;
    line-height: 1.6;
  }

  .channel-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background-color: #ff0000;
    color: #ffffff;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.3);

    svg {
      font-size: 1.4rem;
    }

    &:hover {
      transform: translateY(-3px) scale(1.03);
      box-shadow: 0 10px 25px rgba(255, 0, 0, 0.45);
      background-color: #e60000;
    }
  }
`;

export const VideoGrid = styled.main`
  max-width: 1280px;
  margin: 20px auto 40px auto;
  padding: 0 4%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 36px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const VideoCard = styled.article`
  background-color: var(--background-color3);
  border-radius: 24px;
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);

    h2 {
      color: var(--text-color-blue-green);
    }
  }

  .video-embed-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    background-color: #000;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }

    .badge {
      position: absolute;
      top: 14px;
      left: 14px;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px);
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: 30px;
      z-index: 2;
      pointer-events: none;
      display: flex;
      align-items: center;
      gap: 6px;
      border: 1px solid rgba(255, 255, 255, 0.15);

      svg {
        color: #ff0000;
      }
    }
  }

  .card-body {
    padding: 26px;
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
      color: var(--background-color2);
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 12px;
      transition: color 0.25s ease;
    }

    p {
      color: var(--text-color);
      font-size: 0.92rem;
      line-height: 1.6;
      margin-bottom: 24px;
      flex: 1;
    }

    a {
      text-decoration: none;
      margin-top: auto;
    }

    button {
      width: 100%;
      padding: 13px 20px;
      border-radius: 14px;
      border: none;
      background-color: var(--text-color-blue-green);
      color: var(--background-color);
      font-weight: 700;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      &:hover {
        opacity: 0.92;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 255, 8, 0.35);

        [data-theme="light"] & {
          box-shadow: 0 6px 16px rgba(0, 123, 255, 0.5);
        }

        svg {
          transform: scale(1.15);
        }
      }
    }
  }
`;
