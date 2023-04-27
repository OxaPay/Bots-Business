/*CMD
  command: /txInfo
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Enter a trackId to check its status:
  keyboard: 
  aliases: 🔎Transaction Status
CMD*/

Libs.OxaPayLib.getTxInfo({ fields: { trackId: message }, onSuccess: "/onTxInfo " + message })
