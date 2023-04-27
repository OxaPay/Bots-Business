/*CMD
  command: /paytrx
  help: 
  need_reply: false
  auto_retry_time: 
  answer:
  keyboard: 
  aliases: 💳Payment Gateway (Crypto price)
CMD*/

Libs.OxaPayLib.createTransaction({ fields: { amount: 100, currency: 'trx' }, onCreatePayment: "/onCreatePaymentWithTRX" })
