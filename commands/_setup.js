/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  answer:
  keyboard:
  aliases: 
CMD*/

// Get your Merchant keys in https://account.oxapay.com/merchants
Libs.OxaPayLib.setMerchantKey("YOUR_MERCHANT_KEY");

// Get your payment api keys in https://account.oxapay.com/paymentapi 
Libs.OxaPayLib.setPaymentApiKey("YOUR_PAYMENT_API_KEY");

//Please set this command for admin access only