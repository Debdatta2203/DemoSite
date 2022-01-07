// import { useEffect } from 'react';
import { useEffect } from 'react';
import Media from './components/media';
import './style.css'

const App = () => {
  //script to prevent screenshot
  document.addEventListener("keyup", function (e) {
    var keyCode = e.key;
    console.log('key pressed ', keyCode);
    if (keyCode === 'Control' || keyCode === 'Meta' || keyCode === 'Alt' || keyCode === 'PrintScreen') {
        alert('Screenshots not allowed');
    }
  });

  return (
      <div className="main-container">
          <Media />
      </div>
  );
}

export default App;
