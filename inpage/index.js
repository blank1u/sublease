const subleasePrefix = "sublease:"

window.ethereum.request = (req) => {
    const msg = subleasePrefix + JSON.stringify(req)
    // cdp通信,不能删除: console.log(data)
    console.log(msg)
    return new Promise((resolve, reject) => {
        window.ethereum.once(subleasePrefix + req.method, (data) => {
            resolve(data)
        })
    })
}