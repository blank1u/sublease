// 供dapp的访问的 eip1193 请求
import { toQuantity } from "ethers";
import { addresses, sendTx } from "./account.js";
import { getProvider } from "./chain.js";

export const eth_gasPrice = async () => {
    const provider = getProvider()
    const feeData = await provider.getFeeData()
    return feeData.gasPrice.toString(10)
}

export const eth_requestAccounts = async () => {
    return addresses()
}

export const eth_accounts = async () => {
    return await eth_requestAccounts()
}

export const eth_blockNumber = async () => {
    const provider = getProvider()
    return await provider.getBlockNumber()
}

export const eth_chainId = async () => {
    const provider = getProvider()
    const result = await provider.getNetwork();
    return toQuantity(result.chainId);
}

export const eth_getBalance = async (params) => {
    const provider = getProvider()
    const result = await provider.getBalance(params[0], params[1]);
    return toQuantity(result);
}

//todo
export const eth_getStorageAt = async (params) => {
    const provider = getProvider()
    return await provider.getStorageAt(params[0], params[1], params[2]);
}

export const eth_getTransactionCount = async (params) => {
    const provider = getProvider()
    const result = await provider.getTransactionCount(params[0], params[1]);
    return toQuantity(result);
}

export const eth_getBlockTransactionCountByHash = async (params) => {
    const provider = getProvider()
    const result = await provider.getBlock(params[0]);
    return toQuantity(result.transactions.length);
}
export const eth_getBlockTransactionCountByNumber = async (params) => {
    return await eth_getBlockTransactionCountByHash(params)
}


export const eth_getCode = async (params) => {
    const provider = getProvider()
    return await provider.getCode(...params)
}

export const eth_sendRawTransaction = async (params) => {
    const provider = getProvider()
    return await provider.broadcastTransaction(params[0]);
}

export const eth_sendTransaction = async (params) => {
    const tx = await sendTx(params)
    return tx.hash
}

export const eth_call = async (params) => {
    const provider = getProvider()
    return await provider.call(params[0], params[1]);
}
export const eth_estimateGas = async (params) => {
    const provider = getProvider()
    if (params[1] && params[1] !== "latest") {
        throw Error("estimateGas does not support blockTag", { method: method, params: params })
    }

    const result = await provider.estimateGas(params[0]);
    return toQuantity(result);
}
export const eth_getBlockByHash = async (params) => {
    const provider = getProvider()
    if (params[1]) {
        return await provider.getBlockWithTransactions(params[0]);
    } else {
        return await provider.getBlock(params[0]);
    }
}
export const eth_getBlockByNumber = async (params) => {
    return await eth_getBlockByHash(params)
}


export const eth_getTransactionByHash = async (params) => {
    const provider = getProvider()
    return await provider.getTransaction(params[0])
}
export const eth_getTransactionReceipt = async (params) => {
    const provider = getProvider()
    return await provider.getTransactionReceipt(params[0]);
}

export const eth_sign = async (params) => {
    retrun
}