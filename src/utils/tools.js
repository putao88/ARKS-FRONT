import BigNumber from 'bignumber.js'

export function getPriceValue (value, precision = 10 ** 17, decimal = 2) {
  const amount = new BigNumber(value)
  return amount.dividedBy(precision).toFormat(decimal)
}

// (2 ^ 256)-1
export function maxUnit256 () {
  return new BigNumber(2 ** 256).minus(1)
  // return new BigNumber(115792089237316195423570985008687907853269984665640564039457584007913129639935)
}
