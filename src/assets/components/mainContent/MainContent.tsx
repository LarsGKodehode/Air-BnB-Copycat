import styles from './MainContent.module.css'

function MainContent() {
  return(
    <div className={styles['main-content-wrapper']}>
      <h1>H1 text style</h1>
      <h2>H2 text style</h2>
      <h3>H3 text style</h3>
      <p>P text style</p>
    </div>
  );
};

export default MainContent;