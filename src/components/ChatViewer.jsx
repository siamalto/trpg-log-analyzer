import "../ChatViewer.css";

export default function ChatViewer({ data }) {
  if (!data) return null;

  return (
    <div className="dashboard">
      <h2>Chat Logs</h2>
      <div className="chat-panel">
        {data.map((chat, index) => (
          <div key={index} className="chat-entry">
            {/* <div className="chat-tab-name">
              {chat.tab_name}
            </div> */}
            <div className="chat-title">
              <strong>{chat.title}</strong>
            </div>
            <div className="chat-message">
              {chat.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}