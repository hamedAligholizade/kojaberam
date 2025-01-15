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




const telegramAuthToken =`7087148417:AAEBBsSxyNh0kst9ZLmIbVNhRPpOPTlqCj8`;
const webhookEndpoint = "/endpoint";

addEventListener ("fetch",event=>{
  event.respondWith(handleIncomingRequest(event));
});

async function handleIncomingRequest(event) {
  let url = new URL(event.request.url);
  let path = url.pathname;
  let method = event.request.method;
  let workerUrl = `${url.protocol}//${url.host}`;

  if(method === "POST" && path === webhookEndpoint) {
    const update = await event.request.json();
    event.waitUntil(processUpdate(update));
    return new Response("Ok");
  } else if(method === "GET" && path === "/set") {
    const url = `https://api.telegram.org/bot${telegramAuthToken}/setWebhook?url=${workerUrl}${webhookEndpoint}`;

    const response = await fetch(url);

    if(response.ok) {
      return new Response("Webhook set successfully",{status:200});
    } else {
      return new Response("Failed to set webhook",{status:response.status});
    }
  } else {
    return new Response("Not found",{status:404});
  }

}

async function processUpdate(update) {
  if("message" in update) {
    const chatId = update.message.chat.id;
    const userText = update.message.text;

    if (userText === "/start") {
     
      const responseText ="سلام! بگو چقدر بودجه داری تا بهت بگم کجا بری که ذهنت باز بشه.";

      const url = `https://api.telegram.org/bot${telegramAuthToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(responseText)}`;
  
      await fetch(url);
    } else {
      const budget = parseInt(ctx.message.text);
      if (isNaN(budget)) {
        const responseText ='لطفاً مبلغ بودجه خود را به عدد و به تومان وارد کن.';
        const url = `https://api.telegram.org/bot${telegramAuthToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(responseText)}`;
        await fetch(url);
      } else if (budget <= 0) {
        const responseText ='با این بودجه، میتونی بری تو فکر! 🧠✨';
        const url = `https://api.telegram.org/bot${telegramAuthToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(responseText)}`;
        await fetch(url);
      } else if (budget < 100000) {
        const responseText ='با این بودجه می‌تونی بری پارک نزدیک خونتون! 🌳';
        const url = `https://api.telegram.org/bot${telegramAuthToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(responseText)}`;
        await fetch(url);
      } else if (budget < 5000000) {
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
          const responseText = `با این بودجه، می‌تونی به ${randomCity} سفر کنی و از جاذبه‌های دیدنیش لذت ببری! 🕌`;
          const url = `https://api.telegram.org/bot${telegramAuthToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(responseText)}`;
          await fetch(url);
      } else if (budget < 10000000) {
        const responseText = 'سفر به شهرهای زیبای ایران مثل اصفهان یا شیراز گزینه‌های خوبی هستن. 🕌';
        const url = `https://api.telegram.org/bot${telegramAuthToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(responseText)}`;
        await fetch(url);
      } else {
        const responseText = 'با این بودجه می‌تونی یه سفر خارجی داشته باشی. مثلاً به استانبول! 🕌';
        const url = `https://api.telegram.org/bot${telegramAuthToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(responseText)}`;
        await fetch(url);
      }
    }

    
  }
}