import './App.css';

function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <h2 id='break-label'>Break Length</h2>
      <h2 id='session-label'>Session Length</h2>
      <button id='break-decrement'>B-</button>
      <button id='break-increment'>B+</button>
      <button id='session-decrement'>S+</button>
      <button id='session-increment'>S-</button>
      <h3 id='break-length'>5</h3>
      <h3 id='session-length'>25</h3>
      <h3 id='timer-label'>time left</h3>
      <h3 id='time-left'>60:00</h3>
      <button id='start_stop'>start stop</button>
      <button id='reset'>reset</button>
    </div>
  );
}

export default App;
