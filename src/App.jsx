import { useState } from 'react';
import LogUploader from './components/LogUploader';
import StatisticsDashboard from './components/StatisticsDashboard';
import './App.css';

function App() {
  const [sessionData, setSessionData] = useState(null);

  return (
    <div className="app">
      <header>
        <h1>🎲 TRPGセッションログ集計ツール</h1>
      </header>
      <main>
        <LogUploader onDataLoaded={setSessionData} />
        {sessionData && <StatisticsDashboard data={sessionData} />}
      </main>
    </div>
  );
}

export default App;