// Sub components
import Hero from '../subComponents/hero/Hero'
import DynamicContent from '../subComponents/dynamicContent/DynamicContent';

// Component CSS
import styles from './MainContent.module.css'

function MainContent() {
  // Typescript interface hackery, should be extracted to a seperate file
  interface ImageInfo {
    imageURL: string,
    imageAlt: string,
  };

  const backgroundImage: ImageInfo = {
    imageURL: './src/assets/images/industry-landscape.jpg',
    imageAlt: 'Sunset over an industrial zone',
  };

  return(
    <div className={styles['main-content-wrapper']}>
      <Hero {...backgroundImage}/>
      <DynamicContent />
    </div>
  );
};

export default MainContent;