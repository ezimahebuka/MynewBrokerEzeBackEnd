const SUPPORTED_WITHDRAWAL_METHODS = Object.freeze([
  "BTC",
  "ETH",
  "USDT-ERC20",
  "USDT-TRC20",
  "USDT-BEP20",
  "BNB",
  "SOL",
  "XRP",
  "TRX",
  "CASHAPP",
  "PAYPAL",
  "BANK",
]);

const normalizeWithdrawalMethod = (value) =>
  typeof value === "string" ? value.trim().toUpperCase() : "";

module.exports = {
  SUPPORTED_WITHDRAWAL_METHODS,
  normalizeWithdrawalMethod,
};
