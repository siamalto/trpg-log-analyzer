export default function ChatViewer({ data }) {
  if (!data) return null;

  return (
    <div className="dashboard">
      <h2>Chat Logs</h2>
      <div className="log-panel">
        {data.map((chat, index) => (
          <div key={index} className="log-entry">
            {chat.tab_name} <strong>{chat.title}:</strong> {chat.message}
          </div>
        ))}
      </div>
    </div>
  );
}