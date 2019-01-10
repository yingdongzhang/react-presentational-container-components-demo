export default function randomEmoji() {
  const emojis = [
      '😄 Awesome','😃 Nice','😀','😊','😉','😍 Love it','😘 Love it','😙 You are the best','😳 Wow~','😁 Yes!!!','💪 Woohoo','✅','➕ Up up','💯 Great work'
  ];
  return emojis[Math.floor(Math.random() * emojis.length)];
}
