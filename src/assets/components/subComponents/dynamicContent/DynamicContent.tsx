// Components
import ContentCard from '../contentCard/ContentCard';

// React
import React from 'react';

// Component style
import styles from './DynamicContent.module.css';

/**
 * Generates a variable amount of info cards
 * @param amount number of cards to return
 * @returns JSX
 */
function populateWithCards(amount: number) {
  // Hardcoded card details
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

  // store return list
  let list: object[] = [];
  // populate list
  for(let i = 0; i < amount; i++) {
    list.push(ContentCard(cardInfo))
  };
  
  // return
  return list;
};



// COMPONENT
function DynamicContent() {
  return(
    <div className={styles['dynamic-content-wrapper']}>
      <ul className={styles['card-container']}>
        {React.Children.toArray(populateWithCards(5))}
      </ul>
    </div>
  );
};

export default DynamicContent;