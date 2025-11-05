# Multi scalar multiplications

## Algorithms and methods

- [Fast Multi-scalar Multiplication Methods on Elliptic Curves with Precomputation Strategy Using Montgomery Trick](https://link.springer.com/chapter/10.1007/3-540-36400-5_41)
- [Faster batch forgery identification](https://eprint.iacr.org/2012/549) See section 4 for MSM, bucket method
- [Pippenger's exponentiation algorithm - Bernstein](https://cr.yp.to/papers/pippenger.pdf)
- [Efficient multi-exponentiation](https://github.com/wborgeaud/python-pippenger/blob/master/pippenger.pdf)
  - [implementation in Python](https://github.com/wborgeaud/python-pippenger)
- [Multi-scalar multiplication: state of the art & new ideas with Gus Gutoski](https://www.youtube.com/watch?v=Bl5mQA7UL2I)
- [Improved Fast exponentiations - Bodo Moller](https://www.bmoeller.de/pdf/fastexp-icisc2002.pdf)
- [Fast exponentiation with precomputation - Brickell Gordon et al](https://www.dmgordon.org/papers/fast.pdf)
- [Matter labs -ALgorithms](https://github.com/matter-labs/eip1962/blob/master/documentation/Algorithms_for_EIP1962.pdf)
- [Ryah Henry - Thesis](https://cacr.uwaterloo.ca/techreports/2010/cacr2010-26.pdf)
- [Efficient Multi exponentiation: Bucket method - Bootle](https://jbootle.github.io/Misc/pippenger.pdf)
- [MSM tricks](https://gist.github.com/mratsim/27c78c71fd423f731615a91d237162c3#file-multi-scalar-mul-md)
- [Verifiable MSM](https://decentralizedthoughts.github.io/2025-02-14-verifiable-MSM/)
- [Scalar multiplication algorithms](https://cryptojedi.org/peter/data/eccss-20130911b.pdf)
- [MSM | Twisted Edwards Point Representation](https://zprize.hardcaml.com/msm-point-representation.html)
- [2022-entries/open-division/prize1-msm/prize1b-msm-fpga/nickray/zprize-fpga-msm.pdf at main · z-prize/2022-entries](https://github.com/z-prize/2022-entries/blob/main/open-division/prize1-msm/prize1b-msm-fpga/nickray/zprize-fpga-msm.pdf)
- [A deep dive into optimizing Multi-Scalar Multiplication" (Niall Emmart, Yrrid) - YouTube](https://www.youtube.com/watch?v=KAWlySN7Hm8)
- [Signed Bucket Indexes for Multi-Scalar Multiplication (MSM) - HackMD](https://hackmd.io/@drouyang/signed-bucket-index)
- [efficient algorithms for MSM](https://download.hrz.tu-darmstadt.de/media/FB20/Dekanat/Publikationen/CDC/Erik_Dahmen.diplom.pdf)
- [Fast montgomery for MSMs](https://hal.science/hal-03922635/document)
- [elliptic curves - Strauss-Shamir trick on EC multiplication by scalar - Cryptography Stack Exchange](https://crypto.stackexchange.com/questions/99975/strauss-shamir-trick-on-ec-multiplication-by-scalar)
- [Trading Inversions for Multiplications in Elliptic Curve Cryptography](https://eprint.iacr.org/2003/257)
- [GLV Decomposition for Multi-Scalar Multiplication (MSM) - HackMD](https://hackmd.io/@drouyang/glv)

## Implementations
<!-- markdown-link-check-disable -->
- [pipezk](https://www.microsoft.com/en-us/research/publication/pipezk-accelerating-zero-knowledge-proof-with-a-pipelined-architecture/)
- [MSM with FPGA -Connor Masterson thesis](https://github.com/connormas/MultiScalarMultiplication/blob/main/ConnorMastersonThesisV2.pdf)
- [PipeMSM](https://eprint.iacr.org/2022/999)
- [EdMSM](https://ia.cr/2022/1400)
- [CycloneMSM](https://eprint.iacr.org/2022/1396)
- [Cuzk](https://eprint.iacr.org/2022/1321)
- [Zprize MSM implementations](https://github.com/z-prize/2022-entries/tree/main/open-division/prize1-msm)