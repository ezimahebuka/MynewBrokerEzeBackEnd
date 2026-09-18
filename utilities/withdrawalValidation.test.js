const assert = require("node:assert/strict");
const test = require("node:test");

const {
  SUPPORTED_WITHDRAWAL_METHODS,
  normalizeWithdrawalMethod,
} = require("./withdrawalValidation");
const withdrawModel = require("../models/withdrawModel");

test("normalizes supported withdrawal methods", () => {
  assert.equal(normalizeWithdrawalMethod("  usdt-trc20 "), "USDT-TRC20");
  assert.deepEqual(SUPPORTED_WITHDRAWAL_METHODS, [
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
});

test("does not normalize unsupported withdrawal methods into valid ones", () => {
  const normalized = normalizeWithdrawalMethod("DOGE");
  assert.equal(SUPPORTED_WITHDRAWAL_METHODS.includes(normalized), false);
});

test("uses the supported methods in the withdrawal model enum", () => {
  assert.deepEqual(
    withdrawModel.schema.path("coin").enumValues,
    SUPPORTED_WITHDRAWAL_METHODS,
  );
});
