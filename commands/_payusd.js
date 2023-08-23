/*CMD
  command: /payusd
  help: 
  need_reply: false
  auto_retry_time: 
  answer:
  keyboard: 
  aliases: 💵Payment Gateway (USD price)
CMD*/

Libs.OxaPayLib.apiCall({url:"merchants/request", fields: { amount: 15, onCallback: "/onCallbackPayment", orderId: "ORD-123"}, onSuccess: "/onCreatePaymentWithUSD" })