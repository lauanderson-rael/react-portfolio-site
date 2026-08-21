import { VideoCard } from "./styles";
import { FaYoutube, FaPlayCircle } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import type { VideoItem } from "../../pages/Youtube/videos";

type VideoCardItemProps = {
  video: VideoItem;
};

export function VideoCardItem({ video }: VideoCardItemProps) {
  return (
    <VideoCard>
      <div className="video-embed-wrapper">
        <span className="badge">
          <FaPlayCircle /> {video.badge}
        </span>
        <iframe
          src={video.embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="card-body">
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <a href={video.watchUrl} target="_blank" rel="noopener noreferrer">
          <button>
            <FaYoutube /> Assistir no YouTube <FiExternalLink />
          </button>
        </a>
      </div>
    </VideoCard>
  );
}

export { VideoGrid } from "./styles";
