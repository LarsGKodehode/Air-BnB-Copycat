// Component style
import styles from './ContentCard.module.css';

function ContentCard(props: object) {
  const {URL, URLTitle, title, info, imageURL} = props;

  return(
    <div className={styles['content-card-wrapper']}>
      <h1>{title}</h1>
      <p>{info}</p>
      <a href={URL}>{URLTitle}</a>
    </div>
  );
};

export default ContentCard;