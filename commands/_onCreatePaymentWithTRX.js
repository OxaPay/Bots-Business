/*CMD
  command: /onCreatePaymentWithTRX
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

// You can store options if you want to inquire about the transaction status later

if (options.result == 100)
  Api.sendPhoto({
    photo: options.QRCode,
    caption: `📨Address <code>${options.address}</code>
—————————-
Coin
${options.currency}
—————————-
Network
${options.network}
—————————-
Amount
<code>${options.payAmount}</code> ${options.payCurrency}
‼️Sending less may result fund loss
—————————-
‼️Please only send ${options.currency} on ${options.network} network to the address until ${(new Date(options.expiredAt * 1000)).toISOString()}`,
    parse_mode: "HTML"
  });
else
  Bot.sendMessage(options.message)