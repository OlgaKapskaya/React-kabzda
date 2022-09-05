import React from 'react';
import './App.css';
import Technologies from "./Technologies";
import Header from "./Header";

function App() {
  return (
    <div>
     Hello, samurai! Let's go!
        <Header />
        <Technologies />
    </div>
  );

  function Rating() {
      return (
          <div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
          </div>
      )
  }
}

function Accordion() {
    return (
        <div>
            <h3> Menu </h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}





export default App;
