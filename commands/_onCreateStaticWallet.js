/*CMD
  command: /onCreateStaticWallet
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

// You can store options if you want to inquire about the transaction status later

if (options.result == 100)
  Api.sendPhoto({
    photo: `http://api.qrserver.com/v1/create-qr-code/?data=ethereum:${options.address}`,
    caption: `📨Your static Address <code>${options.address}</code>
—————————-
Coin
${options.currency}
—————————-
Network
${options.network}
—————————-
‼️Please only send ${options.currency} on ${options.network} network to the address`,
    parse_mode: "HTML"
  }
  );
else
  Bot.sendMessage(options.message)
