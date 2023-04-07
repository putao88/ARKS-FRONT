import BigNumber from 'bignumber.js'

const NegativeOne = new BigNumber(-1)
const Zero = new BigNumber(0)
const One = new BigNumber(1)
const Two = new BigNumber(2)
const WeiPerEther = new BigNumber('1000000000000000000')
const MaxUint256 = new BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

const MinInt256 = new BigNumber('-0x8000000000000000000000000000000000000000000000000000000000000000')
const MaxInt256 = new BigNumber('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export {
    NegativeOne,
    Zero,
    One,
    Two,
    WeiPerEther,
    MaxUint256,
    MinInt256,
    MaxInt256,
}
