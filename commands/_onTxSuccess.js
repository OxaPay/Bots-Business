/*CMD
  command: /onTxSuccess
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

if (options.result == 100)
  Bot.sendMessage(options.transaction.amount + " " + options.transaction.coin + " paid successfully!")