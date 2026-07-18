import { useEffect, useState } from 'react';
import LogUploader from './components/LogUploader';
import LogViewer from './components/LogViewer';
import './App.css';
import { getSkyTheme } from './skyTheme';

function App() {
  const [sessionData, setSessionData] = useState(null);
  const [skyTheme, setSkyTheme] = useState(() => getSkyTheme());

  useEffect(() => {
    const updateSkyTheme = () => {
      setSkyTheme(getSkyTheme());
    };

    updateSkyTheme();
    const intervalId = window.setInterval(updateSkyTheme, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="app">
      <main
        className={sessionData ? 'main-content' : 'main-content main-content--empty'}
        style={{
          background: skyTheme.background,
          color: skyTheme.color,
        }}
      >
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