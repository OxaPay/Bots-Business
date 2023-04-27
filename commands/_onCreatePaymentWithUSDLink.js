/*CMD
  command: /onCreatePaymentWithUSDLink
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

// You can store options if you want to inquire about the transaction status later

if (options.result == 100)
  Bot.sendMessage(
    "📢 The Payment link with $20 is here (You can set Crypto as base price too)\n" +
    "\n" +
    options.payLink
  );