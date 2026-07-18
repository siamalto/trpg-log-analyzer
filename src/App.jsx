import { useState } from 'react';
import LogUploader from './components/LogUploader';
import LogViewer from './components/LogViewer';
import './App.css';

function App() {
  const [sessionData, setSessionData] = useState(null);

  return (
    <div className="app">
      <main className={sessionData ? 'main-content' : 'main-content main-content--empty'}>
        {sessionData ? ( // ログファイル読み込み後
          <>
            <header>TRPG Log Analyzer</header>
            <LogViewer data={sessionData} />
          </>
        ) : (  // ログファイル未読み込み時
          <>
            <h1>TRPG Log Analyzer</h1>
            <LogUploader onDataLoaded={setSessionData} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;