/*CMD
  command: /onCompletePayment
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if(!options) return

if (options.result == 100)
  Libs.OxaPayLib.getTxInfo({ fields: { trackId: options.trackId }, onSuccess: "/onTxSuccess" })