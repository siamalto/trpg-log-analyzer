/**
 * ココフォリアのobjectログを解析
 * @param {object} logData - log objectの内容
 * @returns {object} 集計されたセッションデータ
 */
export function analizeCocofoliaLog(logData) {
  
  const analizedData = {
    tab_name: {},
    title: {}
  };
  
  logData.forEach((obj, index) => {
    const tabName = obj.tab_name;
    if (analizedData.tab_name[tabName]) {
      analizedData.tab_name[tabName]++;
    } else {
      analizedData.tab_name[tabName] = 1;
    }

    const title = obj.title;
    if (analizedData.title[title]) {
      analizedData.title[title]++;
    } else {
      analizedData.title[title] = 1;
    }
    
    // // キャラクター情報を記録
    // if (!sessionData.characters.has(character)) {
    //   sessionData.characters.set(character, {
    //     name: character,
    //     messageCount: 0,
    //     diceRolls: [],
    //     firstMessage: timestamp,
    //     lastMessage: timestamp
    //   });
    // }
    
    // // ダイスロール検出（1d20などのパターン）
    // const dicePattern = /(\d+)d(\d+)/g;
    // const diceMatches = content.match(dicePattern);
    
    // if (diceMatches) {
    //   const charData = sessionData.characters.get(character);
    //   diceMatches.forEach(roll => {
    //     charData.diceRolls.push({
    //       roll,
    //       timestamp,
    //       content
    //     });
    //   });
    // }
    
    // sessionData.messages.push({
    //   timestamp,
    //   character,
    //   content,
    //   hasDiceRoll: !!diceMatches
    // });
  });

  // tab_nameとtitleを値が大きい順で並び替え
  analizedData.tab_name = Object.fromEntries(
    Object.entries(analizedData.tab_name).sort((a, b) => b[1] - a[1])
  );
  
  analizedData.title = Object.fromEntries(
    Object.entries(analizedData.title).sort((a, b) => b[1] - a[1])
  );

  return analizedData;
}