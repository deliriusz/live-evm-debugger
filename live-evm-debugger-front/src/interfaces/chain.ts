import {JsonRpcProvider} from "@ethersproject/providers/src.ts/json-rpc-provider";

export type Chain = {
    name: string,
    symbolicName: string,
    chainId: number,
    rpcUrl: string,
    blockExplorerUrl: string,
    provider?: JsonRpcProvider
}