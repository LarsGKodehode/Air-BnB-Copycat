// Component style
import styles from './DynamicContent.module.css';

function DynamicContent() {
  return(
    <div className={styles['dynamic-content-wrapper']}>
      <h1>Dynamic Content Here</h1>
    </div>
  );
};

export default DynamicContent;