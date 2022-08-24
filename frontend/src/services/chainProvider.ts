import {Chain} from "../interfaces/chain";
import {ethers} from "ethers";
import {supportedChains} from "../data/supportedChains";

const chainProvider = (chain: Chain) => {
    return new ethers.providers.JsonRpcProvider(chain.rpcUrl, {
        chainId: chain.chainId,
        name: chain.name
    })
}

const getChainsWithProviders = (): Chain[] => {
    for (let i = 0; i < supportedChains.length; i++) {
        if (!supportedChains[i].provider) {
            supportedChains[i].provider = chainProvider(supportedChains[i])
        }
    }
    return supportedChains
}

const getChainForSymbolicName = (symbolicName: string): Chain | undefined => {
    return getChainsWithProviders().filter((v,) => {return v.symbolicName === symbolicName})[0]
}

export {chainProvider, getChainsWithProviders, getChainForSymbolicName}