# Proving Methods

(**To add papers: Work in progress**)

- [10 papers to read: Papers that shaped modern ZKPs](https://www.zksecurity.xyz/blog/posts/ten-zk-papers/)

## Sumcheck Protocol

- [Unreasonable power of Sumcheck - Thaler](https://people.cs.georgetown.edu/jthaler/blogpost.pdf)
  - [Justin Thaler Lecture](https://youtu.be/uFhppTJfjiY)
  - [Sumcheck Overview](https://people.cs.georgetown.edu/jthaler/sumcheck.pdf)
  - [Intro to Sumcheck protocol -oxsage](https://medium.com/yearofzk/rust-guide-sum-check-protocol-18ceb8affdb2)
- [Inuition behind sumcheck - Wong](https://cryptologie.net/article/577/the-intuition-behind-the-sum-check-protocol-in-5-minutes/)
- [A zeroknowledge sumcheck and applications](https://eprint.iacr.org/2017/305.pdf)
- [Sumcheck argument and applications](https://eprint.iacr.org/2021/333.pdf)
  - [The amazing sumcheck protocol - Bootle](https://www.youtube.com/embed/TmSOC8FN2GE)
- [Proving AIR with MultiLinear Sumcheck - Borgeaud](https://solvable.group/posts/air-multivariate-sumcheck/)
- [The Power of Interactive Proofs](https://www.comp.nus.edu.sg/~prashant/teaching/CS6230/files/notes/lecture02.pdf)
- [Sumcheck Tutorial](https://semiotic.ai/articles/sumcheck-tutorial/)
- [Sumcheck Slide-Deck](https://drive.google.com/file/d/1tU50f-IpwPdCEJkZcA7K0vCr7nwwzCLh/view?pli=1)
- [Introduction to the Sumcheck Protocol](https://people.eecs.berkeley.edu/~alexch/docs/CS294-S2017/lecture-01.pdf)
- [A Zero Knowledge Sumcheck and its Applications](https://eprint.iacr.org/2017/305.pdf)
- [Arkworks Sumcheck](https://github.com/arkworks-rs/sumcheck)
- [Formal Verification of the Sumcheck Protocol](https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/611002/GarviaBosshard_Azucena.pdf?sequence=1&isAllowed=y)
- [Succinct Arguments over Towers of Binary Fields](https://eprint.iacr.org/2023/1784)
- [Sumcheck over fields of small charecteristic](https://people.cs.georgetown.edu/jthaler/small-sumcheck.pdf)
  - [Code](https://gitlab.com/UlvetannaOSS/binius?ref=blog.lambdaclass.com)
  - [Video](https://www.youtube.com/watch?v=BeEuphrUipk&list=PLj80z0cJm8QHm_9BdZ1BqcGbgE-BEn-3Y)
  - [Part 1 - Lambdaclass](https://blog.lambdaclass.com/snarks-on-binary-fields-binius/)
  - [Part 2 - Lambdaclass](https://blog.lambdaclass.com/binius-part-2/)
- [Explaining the GKR method - Gabizon](https://www.youtube.com/watch?v=REVXWyQjmPQ)
- [GKR based ZKP - Kalai](https://www.youtube.com/watch?v=x8pUxFptfb0)
- [GKR step bu step](https://blog.lambdaclass.com/gkr-protocol-a-step-by-step-example)
- [Speeding up sumcheck](https://eprint.iacr.org/2025/1117)

## Low degree Testing/Reed-Solomon Proximity testing

- [STARK paper](https://eprint.iacr.org/2018/046.pdf)
- [DEEP - FRI](https://eprint.iacr.org/2019/336.pdf)
- [Proximity Gaps for Reed-Solomon Codes](https://eccc.weizmann.ac.il/report/2020/083/)  
- [FRI hackernoon](https://hackernoon.com/zero-knowledge-proof-algorithm-zk-stark-fri-protocol)
- [FRI properties](https://hackmd.io/@sin7y/r1r0IE40K)
- [FRI erasure code fraud proof](https://ethresear.ch/t/fri-as-erasure-code-fraud-proof/6610)
- [Barycentric low deg check - Dankrad Feist](https://notes.ethereum.org/@dankrad/barycentric_low_degree_check)
- [Low Degree Testing](https://medium.com/starkware/low-degree-testing-f7614f5172db)
- [Data Availability sampling from FRI](https://eprint.iacr.org/2024/248)
- [Circle STARKS](https://eprint.iacr.org/2024/278)
  - [talk - Gabizon](https://www.youtube.com/watch?v=d1f9sBajj10)
  - [circle starks and mersene primes](https://www.zksecurity.xyz/blog/posts/circle-starks-1/)
- [STIR: Reed–Solomon Proximity Testing with Fewer Queries](https://eprint.kobi.one/2024/390)
- [Note on adding ZK to starks](https://eprint.iacr.org/2024/1037)
- [Note on FRI and low degree testing](https://eprint.iacr.org/2022/1216)

## Permutation arguments

- [PLonk's permutation - a definitive explanation](https://www.cryptologie.net/article/610/plonks-permutation/)

## Lookup arguments

- [A brief history of lookup arguments](https://github.com/ingonyama-zk/papers/blob/main/lookups.pdf)
- [Plonkup blog - lambdaclass](https://blog.lambdaclass.com/lookups)

## Aggregations and recursions

- [Snarkpack: practical snark aggregation](https://research.protocol.ai/publications/snarkpack-practical-snark-aggregation/gailly2021.pdf)
  - [blog](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/)
  - [talk](https://www.esat.kuleuven.be/cosic/blog/rwc-2022-snarkpack-practical-snark-aggregation/)
  - [talk](https://docs.zkproof.org/pages/standards/slides-w4/SNARKpack.pdf)
-[Proof aggregation techniques - lambdaclass](https://blog.lambdaclass.com/proof-aggregation-techniques/)

## Folding and accumulation schemes

- [Algebraic reductions of knowledge](https://eprint.iacr.org/2022/009.pdf)
- [Resource: Awesome Folding](https://github.com/lurk-lab/awesome-folding)
- [How to build a snark that is out of this world - Nat Bunner](https://hackmd.io/@ndbunner/B1hmeoGEn)
- [An incomplete guide to FOlding schemes - Lisa](https://taiko.mirror.xyz/tk8LoE-rC2w0MJ4wCWwaJwbq8-Ih8DXnLUf7aJX1FbU)
- [Algebraic Reductions of Knowledge](https://eprint.iacr.org/2022/009)

## General

- [Succinct Proofs and Linear Algebra](https://angeris.github.io/papers/zk-linalg.pdf)
- [SOK: Range proofs](https://eprint.iacr.org/2024/430)

