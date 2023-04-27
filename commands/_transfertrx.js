/*CMD
  command: /withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Enter an OxaPay address to withdraw 10 trx:
  keyboard: 
  aliases: 💸Withdraw
CMD*/


// Please get payment api from https://account.oxapay.com/paymentapi and set it on /setup command then use trasfer function
// Libs.OxaPayLib.transfer({ fields: { amount: 10, currency: 'trx', address: message }, onTransfer: "/onTransfer 10 trx" })

Bot.sendMessage("This is Demo Bot!")