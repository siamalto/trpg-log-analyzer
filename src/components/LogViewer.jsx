import ResultViewer from './ResultViewer';
import ChatViewer from './ChatViewer';

import { useState } from 'react';

export const ToggleSwitch = ({isOn, setIsOn}) => {
  return (
    <div className="toggle-switch-fixed">
      <span className="toggle-switch-label">ログ表示</span>
      <button
        type="button"
        className={`toggle-switch ${isOn ? 'is-on' : ''}`}
        onClick={() => setIsOn((prev) => !prev)}
        aria-pressed={isOn}
      >
        <span className="toggle-switch-thumb" />
      </button>
    </div>
  );
};

export default function LogViewer({ data }) {
  const [isOn, setIsOn] = useState(false);
  if (!data) return null;

  return (
    <div className="dashboard">
      {isOn ? <ChatViewer data={data} /> : <ResultViewer data={data} />}
      <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}