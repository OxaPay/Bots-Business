/*CMD
  command: /onTransfer
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

if (options.result == 100)
  Bot.sendMessage(`Send ${params} was submited!\nYour trackId: ${options.trackId}`)
else {
  Bot.sendMessage(`Your send request failed. ${options.message}`)
}
if (options.status == "complete")
  Bot.sendMessage("Your transfer was successful")