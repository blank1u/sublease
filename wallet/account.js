import { ethers } from 'ethers'
import { getProvider } from "./chain.js";

const wallet = {
    map: {},
    addresses: []
}

export const importKey = (keys) => {
    for (const key of keys) {
        const w = new ethers.Wallet(key)
        wallet.addresses.push(w.address)
        wallet.map[w.address] = key
    }
}

export const addresses = async () => {
    return wallet.addresses
}

export const sendTx = async (params) => {
    console.log("send_tx before", params)
    const address = params[0].from
    const key = wallet.map[address]
    const w = new ethers.Wallet(key)
    const signer = w.connect(getProvider())

    const unSignedTx = await signer.populateTransaction(params[0])
    const tx = await signer.sendTransaction(unSignedTx)

    console.log("send_tx after", tx)
    return tx
}


