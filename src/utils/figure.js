import { BigNumber,  constants} from "ethers";

const NegativeOne = BigNumber.from(-1);
const Zero = BigNumber.from(0);
const One = BigNumber.from(1);
const Two = BigNumber.from(2);
const WeiPerEther = BigNumber.from("1000000000000000000");
const MaxUint256 = BigNumber.from(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

const MinInt256 = BigNumber.from(
  "-0x8000000000000000000000000000000000000000000000000000000000000000"
);
// const MaxInt256 = constants.MaxUint256
const MaxInt256 = BigNumber.from(
  "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

export {
  NegativeOne,
  Zero,
  One,
  Two,
  WeiPerEther,
  MaxUint256,
  MinInt256,
  MaxInt256,
};
