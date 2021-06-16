import Phone from './Components/Phone.js'
import './App.css'

function App() {
  return (
    <div>
      <Phone />
      <div className='controls'>
        <b>Controls:</b>
        <br />
        WASD to control left bar
        <br />
        SPACE to place left bar
        <br />
        ARROW KEYS to control right bar
        <br />
        ENTER to place right bar
      </div>
    </div>
  );
}

export default App;
