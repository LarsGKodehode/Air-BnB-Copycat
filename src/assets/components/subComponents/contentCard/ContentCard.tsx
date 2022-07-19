// Component style
import styles from './ContentCard.module.css';

function ContentCard(props: object) {
  const {URL, URLTitle, title, info, imageURL} = props;

  return(
    <div className={styles['content-card-wrapper']}>
      <h3>{title}</h3>
      <p>{info}</p>
      <a href={URL}>{URLTitle}</a>
    </div>
  );
};

export default ContentCard;