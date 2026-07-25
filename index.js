const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: 'TK_COMMUNITY.aternos.me',
  port: 64764,
  username: 'AfnBot'
});
bot.on('spawn', () => {
  console.log("البوت دخل السيرفر!");
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 10000);
});
bot.on('end', () => {
  setTimeout(() => process.exit(1), 5000);
});
