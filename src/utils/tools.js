import { BigNumber, utils } from "ethers";

/** https://learnblockchain.cn/article/3675
 * @description:
 * @param {*} value 输入的值， precision：精度， decimal： 小数位
 * @return {*}
 */
export function getPriceValue (value, precision = 6, decimal = 2) {
  const price = transBigNumber(value);
  const amount = utils.formatUnits(price, precision)
  return amount
}

/**
 * @description: Bignumber => 10进制字符串
 * @param {*} object
 * @return {*}
 */
export function transBigNumber(object) {
  let isBig = BigNumber.isBigNumber(object);
  if (isBig) {
    return BigNumber.from(object)
  }
  return object;
}
