import { importKey } from './wallet/index.js'
import { injectSublease } from './lib/page.js'
import { connectBrowser, openBrowser } from './common/bitbrowser.js';

const keys = [];
const browserId = '';

async function runDemo() {
    importKey(keys)
    const res = await openBrowser(browserId)
    const browser = await connectBrowser(res, browserId)
    const page = await browser.newPage()
    await page.goto('https://app.uniswap.org/');
    await injectSublease(page)
}

runDemo()
