import {Chain} from '../interfaces/chain'

// you can check more chains on https://chainlist.org/
export const supportedChains: Chain[] = [
    {
        name: 'ETH Mainnet',
        symbolicName: 'eth',
        chainId: 1,
        rpcUrl: `https://empty-dry-ensemble.discover.quiknode.pro/${process.env.QUICKNODE_API_KEY}/`,
        blockExplorerUrl: 'https://etherscan.io'
    },
    {
        name: 'Polygon Mainnet',
        symbolicName: 'polygon',
        chainId: 137,
        rpcUrl: 'https://polygon-rpc.com',
        blockExplorerUrl: 'https://polygonscan.com'
    },
    {
        name: 'Local EVM',
        symbolicName: 'local',
        chainId: 1337,
        rpcUrl: 'http://localhost:8545',
        blockExplorerUrl: 'https://rinkeby.etherscan.io'
    },
    {
        name: 'Rinkeby',
        symbolicName: 'eth_rin',
        chainId: 4,
        rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        blockExplorerUrl: 'https://rinkeby.etherscan.io'
    },
]