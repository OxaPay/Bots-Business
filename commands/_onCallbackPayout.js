/*CMD
  command: /onCallbackPayout
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

if (options.status == 'Confirming')
  Bot.sendMessage(`📢 Your withdrawal is confirming...`)
else if(options.status == 'Complete'){
  Bot.sendMessage(`📢 Your withdrawal was successfully complete!`)
}

// const ADMIN_TELEGRAM_ID = 'PUT YOUR TELEGRAM ID HERE'
// Api.sendMessage({
//   chat_id: ADMIN_TELEGRAM_ID,
//   text: `📢 Your client withdraw ${options.amount} ${options.currency} ${options.status} `
// })