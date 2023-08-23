/*CMD
  command: /getStaticWallet
  help: 
  need_reply: false
  auto_retry_time: 
  answer:
  keyboard: 
  aliases: 💳Static wallet for USDT(TRC20)
CMD*/

Libs.OxaPayLib.apiCall({ url: "merchants/request/staticaddress", fields: { currency: 'USDT', network: "TRC20", onCallback: "/onCallbackPayment" }, onSuccess: "/onCreateStaticWallet" })
