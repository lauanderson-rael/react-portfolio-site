import { Container, YoutubeHero } from "./styles";
import { VideoGrid, VideoCardItem } from "../../components/VideoCard";
import { videos } from "./videos";
import { FaYoutube } from "react-icons/fa";

export default function Youtube() {
  return (
    <Container>
      {/* HERO SECTION */}
      <YoutubeHero>
        <h1>
          Meu Canal no <span>YouTube</span>
        </h1>
        <p>
          Confira meus tutoriais, playlists e conteúdos sobre desenvolvimento de
          software, ferramentas modernas, Git & GitHub e Inteligência Artificial.
        </p>

        <a
          href="https://www.youtube.com/@lau_dicas"
          target="_blank"
          rel="noopener noreferrer"
          className="channel-btn"
        >
          <FaYoutube /> Inscrever-se no Canal @lau_dicas
        </a>
      </YoutubeHero>

      {/* GRID DE VÍDEOS */}
      <VideoGrid>
        {videos.map((item) => (
          <VideoCardItem key={item.id} video={item} />
        ))}
      </VideoGrid>
    </Container>
  );
}
