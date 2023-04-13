import BigNumber from 'bignumber.js'

export function getPriceValue (value, precision = 10 ** 17, decimal = 2) {
  const amount = new BigNumber(value)
  return amount.dividedBy(precision).toFormat(decimal)
}