import './App.css';
import LengthControl from './components/LengthControl';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <div className='App-wrapper'>
        <h1>25+5 clock</h1>
        <LengthControl  />
        <Timer />
      </div>

    </div>
  );
}

export default App;
