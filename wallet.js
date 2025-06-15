// wallet.js
const BALANCE_KEY = 'adapt_wallet_balance';

function getBalance() {
  return Number(localStorage.getItem(BALANCE_KEY)) || 0;
}

function setBalance(val) {
  localStorage.setItem(BALANCE_KEY, val);
  window.dispatchEvent(new CustomEvent('wallet:change', { detail: val }));
}

function addMoney(amount) {
  setBalance(getBalance() + amount);
}

window.getBalance = getBalance;
window.setBalance = setBalance;
window.addMoney = addMoney;

