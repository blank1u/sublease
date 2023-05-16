import { toQuantity,JsonRpcProvider } from 'ethers'
import chains from '../common/chains.js'

let provider = new JsonRpcProvider(chains['mainnet'].rpcUrls.default.http[0])

export const getProvider = () => {
    return provider
}

export const setProvider = (chainId) => {
    for (const key in chains) {
        const chain = chains[key]
        if (toQuantity(chain["id"]) == toQuantity(chainId)) {
            provider = new JsonRpcProvider(chain.rpcUrls.default.http[0])
        }
    }
    return provider
}

export const wallet_switchEthereumChain = async (params) => {
    setProvider(params[0].chainId)
    return null
}