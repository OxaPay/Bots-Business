/*CMD
  command: getTxInfo
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

Libs.OxaPayLib.apiCall({ url: "merchants/inquiry", fields: { trackId: options.trackId }, onSuccess: "/onTxInfo" })
