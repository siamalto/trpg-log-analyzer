import { analizeCocofoliaLog } from '../utils/logAnalyzer';

export default function StatisticsDashboard({ data }) {
  if (!data) return null;

  const analizedData = analizeCocofoliaLog(data);

  // const stats = Array.from(data.characters.values()).map(char => ({
  //   name: char.name,
  //   messages: char.messageCount,
  //   diceCount: char.diceRolls.length,
  //   activeTime: `${char.firstMessage} - ${char.lastMessage}`
  // }));

  return (
    <div className="dashboard">
      <h2>📈 セッション統計</h2>
      <div className="stats-container">
        <div className="stats-section">
          <h3>タブ別統計</h3>
          <table>
            <thead>
              <tr>
                <th>タブ名</th>
                <th>回数</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(analizedData.tab_name).map(([tabName, count]) => (
                <tr key={tabName}>
                  <td>{tabName}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="stats-section">
          <h3>タイトル別統計</h3>
          <table>
            <thead>
              <tr>
                <th>タイトル</th>
                <th>回数</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(analizedData.title).map(([title, count]) => (
                <tr key={title}>
                  <td>{title}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}