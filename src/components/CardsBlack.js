import React from 'react';
import './Cards.css';
import CardItemBlack from './CardItemBlack';

function CardsBlack() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemBlack
              src='images/paper.png'
              text="A Demonstration of Mechanic Maker: An AI for Mechanics Co-Creation | Published in AIIDE one of AI's best conference"
              label='Published Paper'
              path="https://ojs.aaai.org/index.php/AIIDE/article/view/7450/7349"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsBlack;