/*CMD
  command: /onTransfer
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

if (options.result == 100)
  Bot.sendMessage(params + " was withdrawn successfully!")
else if (options.result == 104)
  Bot.sendMessage(options.message)
else {
  Bot.sendMessage("Your withdrawal request failed. Please try again later")
  throw options
}