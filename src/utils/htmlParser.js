/**
 * ココフォリアのHTMLログをobject形式にパース
 * @param {string} htmlContent - HTMLファイルの内容
 * @returns {object} パースされたセッションデータ
 */
export function parseCocofoliaLog(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  
  const sessionData = [];

  // メッセージ行を抽出
  const lineElements = doc.querySelectorAll('p');
  
  lineElements.forEach((el, index) => {
    const spanElements = el.querySelectorAll('span');
    const lineData = {
      tab_name: spanElements[0]?.textContent || '',
      title: spanElements[1]?.textContent || '',
      message: spanElements[2]?.textContent || ''
    };

    sessionData.push(lineData);
    
  });

  return sessionData;
}