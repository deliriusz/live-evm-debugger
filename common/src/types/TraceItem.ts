import {BigNumber} from "ethers";

export type DebugTrace = {
    trace: TraceItem[],
    gasUsed: BigNumber,
    failed: boolean,
    returnedValue: string,
}

export type TraceItem = {
    processCounter: BigNumber,
    operationName: string,
    gasLeft: BigNumber,
    gasCost: BigNumber,
    depth: number,
    stack: Array<string>, // currently stack is upside-down, i.e. uppermost element is last in the table
    memory: Array<string>
}

export type CallTrace = TraceItem & {
    value?: BigNumber,
    gasPassed: BigNumber,
    destinationAddress: string,
    rawCalldata: string,
    rawReturnData: string,
}

export type JumpTrace = TraceItem & {
    destinationPC: BigNumber,
    isEffective: boolean,
}
