import { Address, parseEther } from 'viem'
import { CustomTransactionContext } from '.'
import { ZeroXSwapQuote } from './types'

export const transaction = async (c: CustomTransactionContext) => {
  const token = c.req.query('token') as Address
  const network = c.req.query('network') as 'base' | 'optimism'
  const value = c.inputText || '0.01'

  // prettier-ignore
  const baseUrl = `https://${network}.api.0x.org/swap/v1/quote?`
  const eth = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

  // https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote#request
  const params = new URLSearchParams({
    buyToken: token,
    sellToken: eth,
    sellAmount: parseEther(value).toString(),
    feeRecipient: '0xBB6565b1868DA5E0494F5A68899DD463Ebec3Dc4',
    buyTokenPercentageFee: '0.03',
  }).toString()

  const res = await fetch(baseUrl + params, {
    headers: { '0x-api-key': 'b5fec64a-432c-428b-86c9-73dd1c3c674d' },
  })

  const order = (await res.json()) as ZeroXSwapQuote

  return c.send({
    chainId: `eip155:${network === 'base' ? '8453' : '10'}`,
    to: order.to,
    data: order.data,
    value: BigInt(order.value),
  })
}
