import React, { useState } from 'react';
import Media from './components/media';
import './style.css'

const App = () => {
  const [hideContent, setHideContent] = useState(false);
  //script to prevent screenshot
  document.addEventListener("keydown", function (e) {
    var keyCode = e.key;
    console.log('key pressed ', e);
    if (keyCode === 'Control' || 
        keyCode === 'Meta' || 
        keyCode === 'Alt' || 
        keyCode === 'PrintScreen' || 
        keyCode === 'Shift' ||
        keyCode === '4' ||
        keyCode === 'S' ||
        keyCode === 's' ||
        keyCode === 'P' ||
        keyCode === 'p') {
        setHideContent(true);
        setTimeout(function(){
          alert('Screenshots not allowed');
          setHideContent(false);
         }, 4000);
    }
  });

  return (
      <div className="main-container" style={{display: hideContent ? 'none' : ''}}>
          <Media />
      </div>
  );
}

export default App;
