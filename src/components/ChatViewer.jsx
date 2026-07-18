// import { analizeCocofoliaLog } from '../utils/logAnalyzer';

export default function ChatViewer({ data }) {
  if (!data) return null;

  // const analizedData = analizeCocofoliaLog(data);

  // const stats = Array.from(data.characters.values()).map(char => ({
  //   name: char.name,
  //   messages: char.messageCount,
  //   diceCount: char.diceRolls.length,
  //   activeTime: `${char.firstMessage} - ${char.lastMessage}`
  // }));

  return (
    <div className="dashboard">
      <h2>チャットログ</h2>
      <div className="log-panel">
        ログリスト
      </div>
    </div>
  );
}