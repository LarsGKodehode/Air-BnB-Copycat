import styles from './Hero.module.css';

// Typescript interface hackery, should be extracted to a seperate file
interface ImageInfo {
  imageURL: string,
  imageAlt: string,
};

function Hero(props: ImageInfo) {

  const { imageURL, imageAlt } = props;
  console.log(imageURL)

  return(
    <div className={styles['hero-wrapper']}>
      <img className={styles['image']} src={imageURL} alt={imageAlt} />
    </div>
  );
};

export default Hero;