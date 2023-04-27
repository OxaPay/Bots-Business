/*CMD
  command: /onAcceptedCoins
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if(!options) return

if (options.result == 100)
  Bot.sendMessage("Your merchant's accepted coins are " + options.allowed.join(','))

// You can also send the list to the user to choose the coins for payment