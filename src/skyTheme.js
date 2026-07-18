export const skyThemes = [
  {
    time: 5 * 60 + 30,
    background: 'linear-gradient(0, #fff2d9 0%, #ffd1a3 30%, #ff9d6c 60%, #4b2f5a 100%)',
    color: '#3f2418',
  },
  {
    time: 6 * 60 + 30,
    background: 'linear-gradient(0, #ffe7c6 0%, #ffb56b 30%, #ff7b54 60%, #4a2d5d 100%)',
    color: '#3f2418',
  },
  {
    time: 7 * 60 + 30,
    background: 'linear-gradient(0, #e6f7ff 0%, #9ed6ff 35%, #5eb7ff 70%, #1d6fb3 100%)',
    color: '#0f172a',
  },
  {
    time: 9 * 60,
    background: 'linear-gradient(0, #dff6ff 0%, #8ed4ff 35%, #4ea8ff 70%, #1764a8 100%)',
    color: '#0f172a',
  },
  {
    time: 11 * 60,
    background: 'linear-gradient(0, #dff8ff 0%, #8edcff 35%, #4da6ff 65%, #0f4c81 100%)',
    color: '#0f172a',
  },
  {
    time: 14 * 60,
    background: 'linear-gradient(0, #dbefff 0%, #8dbdff 35%, #5f8cff 65%, #274f89 100%)',
    color: '#0f172a',
  },
  {
    time: 16 * 60,
    background: 'linear-gradient(0, #ffe6c7 0%, #ff9d6b 35%, #ff6b6b 65%, #4a2b60 100%)',
    color: '#fff7ed',
  },
  {
    time: 18 * 60,
    background: 'linear-gradient(0, #ffd8a8 0%, #ff8f5b 35%, #8b3cff 70%, #1f1149 100%)',
    color: '#fff7ed',
  },
  {
    time: 20 * 60,
    background: 'linear-gradient(0, #24153f 0%, #4b2c6f 35%, #2d4a7a 70%, #07111f 100%)',
    color: '#f8fafc',
  },
  {
    time: 22 * 60,
    background: 'linear-gradient(0, #07111f 0%, #1e3a5f 40%, #4e4c94 75%, #020617 100%)',
    color: '#f8fafc',
  },
];

export function getSkyTheme(date = new Date()) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const totalMinutes = hour * 60 + minute;

  for (let i = skyThemes.length - 1; i >= 0; i -= 1) {
    if (totalMinutes >= skyThemes[i].time) {
      return skyThemes[i];
    }
  }

  return skyThemes[0];
}
