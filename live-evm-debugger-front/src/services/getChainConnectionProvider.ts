import {Chain} from "../interfaces/chain";
import {ethers} from "ethers";

export const chainProvider = (chain: Chain) => {
    return new ethers.providers.JsonRpcProvider(chain.rpcUrl, {
        chainId: chain.chainId,
        name: chain.name
    })
}