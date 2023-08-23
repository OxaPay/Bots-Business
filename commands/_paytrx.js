/*CMD
  command: /paytrx
  help: 
  need_reply: false
  auto_retry_time: 
  answer:
  keyboard: 
  aliases: 💳White-label payment (Crypto price)
CMD*/

Libs.OxaPayLib.apiCall({ url: "merchants/request/whitelabel", fields: { amount: 100, currency: 'TRX', payCurrency: "TRX", lifeTime: 90, orderId: "ORD-124", onCallback: "/onCallbackPayment" }, onSuccess: "/onCreatePaymentWithTRX" })
