import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my work so far!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/GM.png'
              text='AI based no-code platform for 2D game development | Built using Unity'
              label='Research Project'
              path='/vardansaini/projects'
            />
            <CardItem
              src='images/H-Log.jpg'
              text='Android app which helps you track your habits and follow your friends habits.'
              label='Android Project'
              path="https://github.com/CMPUT301F21T20/HabitTracker.git"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Inclusify.png'
              text='React based web app which makes sure that everyone feels included on social media.'
              label='Hack The north WINNER'
              path="https://github.com/Techno-cratz/Inclusify"
            />
            <CardItem
              src='images/BP.png'
              text='Everyone loves to save money and we made sure you do!'
              label='Top 5 in hip,hack[array]'
              path="https://github.com/Techno-cratz/BestPrice"
            />
            <CardItem
              src='images/flutter.png'
              text='App for Android and ios made using flutter for people who need help'
              label='Flutter Project'
              path="https://github.com/vardansaini/med_assist"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
             src='images/GH.png'
             text='If you are interested in more projects like these check out my github | Source code for this website also availble there!'
             label='Github'
             path='https://github.com/vardansaini'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;