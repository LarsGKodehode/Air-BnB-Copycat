// Component style
import styles from './ContentCard.module.css';

interface CardInfo {
  URL: string ,
  URLTitle: string,
  title: string,
  info: string,
  imageURL: string,
};


function ContentCard(props: CardInfo) {
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