import { useRef, useState } from 'react';
import { parseCocofoliaLog } from '../utils/htmlParser';

export default function LogUploader({ onDataLoaded }) {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const content = await file.text();
      const data = parseCocofoliaLog(content);
      onDataLoaded(data);
    } catch (err) {
      setError(`エラー: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="uploader">
      <input
        ref={fileInputRef}
        type="file"
        accept=".html"
        onChange={handleFileSelect}
        disabled={loading}
        style={{ display: 'none' }}
      />
      <button 
        onClick={() => fileInputRef.current?.click()}
        disabled={loading}
      >
        {loading ? '読み込み中...' : 'logファイルを読み込む'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}