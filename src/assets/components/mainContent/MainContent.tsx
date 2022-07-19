// Sub components
import Hero from '../subComponents/hero/Hero'
import DynamicContent from '../subComponents/dynamicContent/DynamicContent';

// Component CSS
import styles from './MainContent.module.css'

function MainContent() {
  return(
    <div className={styles['main-content-wrapper']}>
      <Hero />
      <DynamicContent />
    </div>
  );
};

export default MainContent;