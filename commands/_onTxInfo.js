/*CMD
  command: /onTxInfo
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

Bot.sendMessage(
  `🟢Result: ${options.result}
📋Message: ${options.message}
🆔TrackID: ${options.trackId}
📆Expired at: ${options.expiredAt}
🗃️Status: ${options.status}`,
  { parse_mode: "HTML" }
);
