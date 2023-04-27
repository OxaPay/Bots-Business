/*CMD
  command: /payusd
  help: 
  need_reply: false
  auto_retry_time: 
  answer:
  keyboard: 
  aliases: 💵Payment Gateway (USD price)
CMD*/

Libs.OxaPayLib.createTransaction({ fields: { amount: 15 }, onCreatePayment: "/onCreatePaymentWithUSD" })
