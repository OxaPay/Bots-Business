/*CMD
  command: /withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Enter an address to withdraw 10 trx:
  keyboard: 
  aliases: 💸Withdraw
CMD*/


// Please get payout api from https://app.oxapay.com/payout and set it on /setup command then use trasfer function
Libs.OxaPayLib.apiCall({url: "api/send", fields: { amount: 10, currency: 'TRX', address: message, onCallback: "/onCallbackPayout" }, onSuccess: "/onTransfer 10 TRX" })
