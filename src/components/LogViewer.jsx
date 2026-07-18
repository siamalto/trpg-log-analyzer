import StatisticsDashboard from './StatisticsDashboard';
import ChatViewer from './ChatViewer';

export default function LogViewer({ data }) {
  if (!data) return null;
  return (
    <div className="dashboard">
      <StatisticsDashboard data={data} />
      <ChatViewer data={data} />
    </div>
  );
}