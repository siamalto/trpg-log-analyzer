import { useState } from 'react';
import LogUploader from './components/LogUploader';
import StatisticsDashboard from './components/StatisticsDashboard';
import './App.css';

function App() {
  const [sessionData, setSessionData] = useState(null);

  return (
    <div className="app">
      <main className={sessionData ? 'main-content' : 'main-content main-content--empty'}>
        <h1>TRPG Log Analyzer</h1>
        <LogUploader onDataLoaded={setSessionData} />
        {sessionData && <StatisticsDashboard data={sessionData} />}
      </main>
    </div>
  );
}

export default App;