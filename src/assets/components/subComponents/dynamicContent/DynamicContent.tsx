// Components
import ContentCard from '../contentCard/ContentCard';

// Component style
import styles from './DynamicContent.module.css';

interface CardInfo {
  URL: string ,
  URLTitle: string,
  title: string,
  info: string,
  imageURL: string,
};

const cardInfo: CardInfo = {
  URL: `https://www.nostandards.com`,
  URLTitle: `Happy Life`,
  title: `This is a card`,
  info: `All the info you never asked for`,
  imageURL: `www.pics4life.no`,
};

// COMPONENT
function DynamicContent() {
  return(
    <div className={styles['dynamic-content-wrapper']}>
      <ul  className={styles['card-container']}>
        <ContentCard {...cardInfo}/>
      </ul>
    </div>
  );
};

export default DynamicContent;