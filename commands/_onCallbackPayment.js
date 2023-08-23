/*CMD
  command: /onCallbackPayment
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

if (options.status == 'Confirming')
  Bot.sendMessage(`📢 Your paid ${options.payAmount} ${options.payCurrency} is confirming...`)
else if(options.status == 'Paid'){
  Bot.sendMessage(`📢 Your payment was successful`)
}

// const ADMIN_TELEGRAM_ID = 'PUT YOUR TELEGRAM ID HERE'
// Api.sendMessage({
//   chat_id: ADMIN_TELEGRAM_ID,
//   text: `📢 Your invoice with trackId ${options.trackId} and orderId ${options.orderId} ${options.status}`
// })