import Phone from './Components/Phone.js'
import './App.css'

function App() {
  return (
    <div>
      <Phone />
      <div className='controls'>
        <b>Controls:</b>
        <br />
        WASD to control green bar
        <br />
        SPACE to place green bar
        <br />
        ARROW KEYS to control red bar
        <br />
        ENTER to place red bar
      </div>
    </div>
  );
}

export default App;
