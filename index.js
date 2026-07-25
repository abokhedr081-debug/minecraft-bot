const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'TK_COMMUNITY.aternos.me',
  port: 64764,
  username: 'AfnBot'
});

bot.on('spawn', () => {
  console.log("البوت دخل السيرفر بنجاح!");
  
  // حركة بسيطة كل 10 ثواني عشان ما يفصلش بسبب الخمول
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 10000);
});

bot.on('error', (err) => {
  console.log("حدث خطأ:", err);
});

bot.on('end', () => {
  console.log("البوت خرج، جاري إعادة المحاولة...");
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});
