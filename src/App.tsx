import React, { useState } from 'react';
import './App.css';
import TimeRange from './TimeRange'

function App() {
  const [morningDiff, setMorningDiff] = useState(0);
  const [afternoonDiff, setAfternoonDiff] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <TimeRange setDiff={setMorningDiff} />
        <p>Lunch</p>
        <TimeRange setDiff={setAfternoonDiff} />
        {'========'}
        <br/>
        {(morningDiff + afternoonDiff) / 60}
      </header>
    </div>
  );
}

export default App;
