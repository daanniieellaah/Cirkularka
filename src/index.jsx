import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <div className="container">
      <img src="https://dummyimage.com/400x200/000000/fff.png&text=zvone%C4%8Dky+">

      </img>
      <h2>Blaaa</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, eius dolores temporibus sunt minima accusamus voluptatem fugit ab aliquid, tenetur eaque facilis, aperiam repudiandae omnis magni ullam blanditiis nisi!</p>
      <button>link</button>
      <button>web</button>

     </div>
);

render(<App />, document.querySelector('#app'));
