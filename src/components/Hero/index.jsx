import styles from "./Hero.module.css";

const Hero = ({ onPlayClick, onMoreInfoClick }) => {
  return (
    <div data-testid="hero-section" className={styles.heroSection}>
      <img
        src="/assets/heroImage.jpg"
        alt="heroImage"
        className={styles.heroImage}
      />
      <div className={styles.imageOverlay} />
      <div className={styles.heroInfo}>
        <p>
          a Japanese manga series written and illustrated by Eiichiro Oda. It
          has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen
          Jump since July 1997, with its individual chapters compiled in 107
          tankōbon volumes as of November 2023.
        </p>
        <div>
          <button className={styles.playButton} onClick={onPlayClick}>
            Play
          </button>
          <button className={styles.moreInfoButton} onClick={onMoreInfoClick}>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
