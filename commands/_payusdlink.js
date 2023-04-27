/*CMD
  command: /payusdlink
  help: 
  need_reply: false
  auto_retry_time: 
  answer:
  keyboard: 
  aliases: 🔗PaymentLink
CMD*/

Libs.OxaPayLib.createTransaction({ fields: { amount: 15 }, onCreatePayment: "/onCreatePaymentWithUSDLink" })
