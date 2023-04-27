/*CMD
  command: /acceptedCoins
  help: 
  need_reply: false
  auto_retry_time: 
  answer:
  keyboard: 
  aliases: Accepted Coins
CMD*/

Libs.OxaPayLib.getAcceptedCoins({ onSuccess: "/onAcceptedCoins" })
