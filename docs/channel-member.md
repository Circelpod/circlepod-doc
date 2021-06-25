---
sidebar_position: 3
---

# Channel Member

## What is Channel Member

Channel Member is an operational account of Channel Pool, A Channel corresponds to a Channel Member.

Before being able to enter the channel pool, one must create a Member account with the Channel.

each member has four types of token vaults making up a set of balances owned by the program on behalf of a Member:

* Value: Is Available balances a zero-interest earning token account with no restrictions.
* Vault Pending Withdrawal Balance: unstaked funds incurring an unbonding timelock.(7 day)
* Stake: the total amount of tokens staked.
* Stake pool token: the total amount of pool tokens created from staking `(stake = stake-pool-token * stake-pool-token-price)`.
