import {Chain} from '../interfaces/chain'

export const supportedChains: Chain[] = [
    {
        name: 'ETH Mainnet',
        chainId: 1,
        rpcUrl: 'https://rpc.ankr.com/eth',
        blockExplorerUrl: 'https://etherscan.io'
    },
    {
        name: 'Polygon Mainnet',
        chainId: 137,
        rpcUrl: 'https://polygon-rpc.com',
        blockExplorerUrl: 'https://polygonscan.com'
    }
]