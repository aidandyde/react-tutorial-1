import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-9.jpg'
              text='Why is the size of each item based on the amount of text!'
              label='TpF2'
              path='/services'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='Project 2'
              label='TpF2'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

