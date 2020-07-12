import React, { useState } from 'react';
import './App.css';
import TimeRange from './TimeRange'

function App() {
  const [diff, setDiff] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <TimeRange setDiff={setDiff}/>
        {diff}
      </header>
    </div>
  );
}

export default App;
