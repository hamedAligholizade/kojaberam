const { Telegraf } = require('telegraf');
const bot = new Telegraf('7373313779:AAFhB1X9Fw-Rcqni32X3DphdM8nqGjWk4iA');

bot.start((ctx) => {
  ctx.reply('سلام! بگو چقدر بودجه داری تا بهت بگم کجا بری که ذهنت باز بشه.');
});

bot.on('text', (ctx) => {
  const budget = parseInt(ctx.message.text);
  if (isNaN(budget)) {
    ctx.reply('لطفاً مبلغ بودجه خود را به عدد وارد کن.');
  } else if (budget <= 0) {
    ctx.reply('با این بودجه، میتونی بری تو فکر! 🧠✨');
  } else if (budget < 100) {
    ctx.reply('با این بودجه می‌تونی یه گردش محلی داشته باشی. مثلاً پارک نزدیک خونتون! 🌳');
  } else if (budget < 500) {
    const cities = [
        'اصفهان',
        'شیراز',
        'تبریز',
        'مشهد',
        'یزد',
        'کرمان',
        'رشت',
        'قزوین',
        'زنجان',
        'همدان'
      ];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      ctx.replyWithPhoto('https://example.com/domestic_trip.jpg', {
        caption: `با این بودجه، می‌تونی به ${randomCity} سفر کنی و از جاذبه‌های دیدنیش لذت ببری! 🕌`,
      });
  } else if (budget < 1000) {
    ctx.reply('سفر به شهرهای زیبای ایران مثل اصفهان یا شیراز گزینه‌های خوبی هستن. 🕌');
  } else {
    ctx.reply('با این بودجه می‌تونی یه سفر خارجی داشته باشی. مثلاً به استانبول! 🕌');
  }
});

bot.launch();
