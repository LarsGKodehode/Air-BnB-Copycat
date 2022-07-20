// Component style
import styles from './ContentCard.module.css';
import '../../../css/materials/glass.css';

// Typescript temporary hack
interface CardInfo {
  URL: string ,
  URLTitle: string,
  title: string,
  info: string,
  imageURL: string,
};

// COMPONENT
function ContentCard(props: CardInfo) {
  const {URL, URLTitle, title, info, imageURL} = props;

  return(
    <article
    className={[
      styles['content-card-container'],
      'glass',
    ].join(' ')}>

      <h3>{title}</h3>
      <p>{info}</p>
      <a href={URL}>{URLTitle}</a>
    </article>
  );
};

export default ContentCard;