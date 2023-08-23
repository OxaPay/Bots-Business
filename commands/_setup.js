/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  answer:
  keyboard:
  aliases: 
CMD*/

// Get your Merchant keys in https://app.oxapay.com/merchants
Libs.OxaPayLib.setMerchantKey("YOUR_MERCHANT_KEY");

// Get your payout api keys in https://app.oxapay.com/payout
Libs.OxaPayLib.setPayoutApiKey("YOUR_PAYOUT_API_KEY");

Bot.sendMessage("Setup was completed successfully")