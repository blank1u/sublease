export default {
	"mainnet": {
		"id": 1,
		"network": "homestead",
		"name": "Ethereum",
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "ETH",
			"decimals": 18
		},
		"rpcUrls": {
			"alchemy": {
				"http": [
					"https://eth-mainnet.g.alchemy.com/v2"
				],
				"webSocket": [
					"wss://eth-mainnet.g.alchemy.com/v2"
				]
			},
			"infura": {
				"http": [
					"https://mainnet.infura.io/v3"
				],
				"webSocket": [
					"wss://mainnet.infura.io/ws/v3"
				]
			},
			"default": {
				"http": [
					"https://cloudflare-eth.com"
				]
			},
			"public": {
				"http": [
					
					"https://cloudflare-eth.com"
				]
			}
		},
		"blockExplorers": {
			"etherscan": {
				"name": "Etherscan",
				"url": "https://etherscan.io"
			},
			"default": {
				"name": "Etherscan",
				"url": "https://etherscan.io"
			}
		},
		"contracts": {
			"ensRegistry": {
				"address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
			},
			"ensUniversalResolver": {
				"address": "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
				"blockCreated": 16773775
			},
			"multicall3": {
				"address": "0xca11bde05977b3631167028862be2a173976ca11",
				"blockCreated": 14353601
			}
		}
	},
	"goerli": {
		"id": 5,
		"network": "goerli",
		"name": "Goerli",
		"nativeCurrency": {
			"name": "Goerli Ether",
			"symbol": "ETH",
			"decimals": 18
		},
		"rpcUrls": {
			"alchemy": {
				"http": [
					"https://eth-goerli.g.alchemy.com/v2"
				],
				"webSocket": [
					"wss://eth-goerli.g.alchemy.com/v2"
				]
			},
			"infura": {
				"http": [
					"https://goerli.infura.io/v3"
				],
				"webSocket": [
					"wss://goerli.infura.io/ws/v3"
				]
			},
			"default": {
				"http": [
					"https://rpc.ankr.com/eth_goerli"
				]
			},
			"public": {
				"http": [
					"https://rpc.ankr.com/eth_goerli"
				]
			}
		},
		"blockExplorers": {
			"etherscan": {
				"name": "Etherscan",
				"url": "https://goerli.etherscan.io"
			},
			"default": {
				"name": "Etherscan",
				"url": "https://goerli.etherscan.io"
			}
		},
		"contracts": {
			"ensRegistry": {
				"address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
			},
			"ensUniversalResolver": {
				"address": "0xA292E2E58d4ddEb29C33c63173d0E8B7a2A4c62e",
				"blockCreated": 8610406
			},
			"multicall3": {
				"address": "0xca11bde05977b3631167028862be2a173976ca11",
				"blockCreated": 6507670
			}
		},
		"testnet": true
	},
	"scrollTestnet": {
		"id": 534353,
		"name": "Scroll Testnet",
		"network": "scroll-testnet",
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "ETH",
			"decimals": 18
		},
		"rpcUrls": {
			"default": {
				"http": [
					"https://alpha-rpc.scroll.io/l2"
				],
				"webSocket": [
					"wss://alpha-rpc.scroll.io/l2/ws"
				]
			},
			"public": {
				"http": [
					"https://alpha-rpc.scroll.io/l2"
				],
				"webSocket": [
					"wss://alpha-rpc.scroll.io/l2/ws"
				]
			}
		},
		"blockExplorers": {
			"default": {
				"name": "Blockscout",
				"url": "https://blockscout.scroll.io"
			}
		},
		"testnet": true
	},
	"zkSync": {
		"id": 324,
		"name": "zkSync Era",
		"network": "zksync-era",
		"nativeCurrency": {
			"decimals": 18,
			"name": "Ether",
			"symbol": "ETH"
		},
		"rpcUrls": {
			"default": {
				"http": [
					"https://mainnet.era.zksync.io"
				],
				"webSocket": [
					"wss://mainnet.era.zksync.io/ws"
				]
			},
			"public": {
				"http": [
					"https://mainnet.era.zksync.io"
				],
				"webSocket": [
					"wss://mainnet.era.zksync.io/ws"
				]
			}
		},
		"blockExplorers": {
			"default": {
				"name": "zkExplorer",
				"url": "https://explorer.zksync.io"
			}
		}
	},
	"zkSyncTestnet": {
		"id": 280,
		"name": "zkSync Era Testnet",
		"network": "zksync-era-testnet",
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "ETH",
			"decimals": 18
		},
		"rpcUrls": {
			"default": {
				"http": [
					"https://testnet.era.zksync.dev"
				],
				"webSocket": [
					"wss://testnet.era.zksync.dev/ws"
				]
			},
			"public": {
				"http": [
					"https://testnet.era.zksync.dev"
				],
				"webSocket": [
					"wss://testnet.era.zksync.dev/ws"
				]
			}
		},
		"blockExplorers": {
			"default": {
				"name": "zkExplorer",
				"url": "https://goerli.explorer.zksync.io"
			}
		},
		"testnet": true
	}
}