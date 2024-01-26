import { useEffect, useState } from "react";
import styles from "./VideoThumbnail.module.css";

const ThumbnailVideo = ({ thumbnail, videoPreview }) => {
  const [playVideoPreview, setPlayVideoPreview] = useState(false);

  const urlParams = new URL(videoPreview);
  urlParams.searchParams.set("autoplay", playVideoPreview ? "1" : "0");

  useEffect(() => {
    //Hide video preview when mouse leave
    if (!playVideoPreview) {
      const iframe = document.querySelector("iframe");
      iframe.style.zIndex = "1";
    } else {
      const iframe = document.querySelector("iframe");
      iframe.style.zIndex = "2";
    }
  }, [playVideoPreview]);

  const handleMouseOver = () => {
    setPlayVideoPreview(true);
  };

  const handleMouseLeave = () => {
    setPlayVideoPreview(false);
  };

  return (
    <div>
      <div className={styles.containerThumbnail}>
        <img
          className={styles.imageThumbnail}
          src={thumbnail}
          alt="thumbnail"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <iframe
        className={styles.iframeThumbnail}
        data-testid="video-preview"
        src={urlParams.origin + urlParams.pathname + urlParams.search}
        title="ReactJS"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
      />
    </div>
  );
};

export default ThumbnailVideo;
