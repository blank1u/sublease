import fs from 'fs'
import path from 'path';
import * as wallet from '../wallet/index.js';
import { fileURLToPath } from 'url';

const prefix = "sublease:"

export const injectSublease = async (page) => {
    await injectScript(page, '../inpage/provider.js')
    await injectScript(page, '../inpage/index.js')
    await connectWallet(page)
    return page
}

async function injectScript(page, url) {
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const inpageContent = fs.readFileSync(path.join(dirname, ...url.split('/')), "utf8");
    await page.evaluate((content) => {
        try {
            const container = document.head || document.documentElement;
            const scriptTag = document.createElement('script');
            scriptTag.setAttribute('async', 'false');
            scriptTag.textContent = content;
            container.insertBefore(scriptTag, container.children[0]);
            container.removeChild(scriptTag);
        } catch (error) {
            console.error('Sublease: Provider injection failed.', error);
        }
    }, inpageContent)
}

async function connectWallet(page) {
    page.on('console', async (msg) => {
        if (!_isMsg(msg)) {
            return
        }

        const req = _unWrapMsg(msg)
        const res = await wallet[req.method](req.params)

        await _sendResponse(page, req.method, res)
    })
}

const _sendResponse = async (page, method, data) => {
    await page.evaluate((resp) => {
        window.ethereum.emit('sublease:' + resp.method, resp.data)
    }, { method, data })
}

const _unWrapMsg = (msg) => {
    return JSON.parse(msg.text().substring(prefix.length))
}

const _isMsg = (message) => {
    const msg = message.text()
    return msg.startsWith(prefix)
}