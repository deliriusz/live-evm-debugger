import {CallTrace, DebugTrace, JumpTrace, TraceItem} from "../interfaces/traceItem";
import {BigNumber} from "ethers";

/**
 * These transformers extract useful information from debug trace. opcodes reference: https://www.ethervm.io/
 */

const mapRawTrace = (trace: any): DebugTrace => {
    return {
        failed: trace.failed,
        gasUsed: trace.gas,
        returnedValue: trace.returnValue,
        trace: trace.structLogs.map((v: any) => {
                return {
                    processCounter: BigNumber.from(v.pc),
                    operationName: v.op,
                    gasLeft: BigNumber.from(v.gas),
                    gasCost: BigNumber.from(v.gasCost),
                    depth:  v.depth,
                    stack:  v.stack,
                    memory: v.memory
                }
            }
        )
    }
}

const getExternalCalls = (trace: TraceItem[]): CallTrace[] => {
    return trace.filter((v,) => {
        return v.operationName === 'CALL'
            || v.operationName === 'STATICCALL'
            || v.operationName === 'DELEGATECALL'}
    ).map((v,) => {
        const isCall = v.operationName === 'CALL'
        // call additionally has value to pass along as 3rd param, so we account for that here
        const stackHeightAdjusted = isCall ? 1 : 0
        const argsOffsetStackHeight = 4
        const argsLengthStackHeight = 5
        const returnOffsetStackHeight = 6
        const returnLengthStackHeight = 7
        //TODO: set properly
        const rawCallData = ''
        const rawReturnData = ''
        const stackLength = v.stack.length;

        return {
            ...v,
            rawCalldata: rawCallData,
            rawReturnData: rawReturnData,
            gasPassed: BigNumber.from(v.stack[stackLength - 1]),
            destinationAddress: v.stack[stackLength - 2],
            ...(isCall && {value: BigNumber.from(v.stack[stackLength - 3])}),
        } as CallTrace}
    )
}

const getInternalJumps = (trace: TraceItem[]): JumpTrace[] => {
    return trace.filter((v,) => {
        return v.operationName === 'JUMP'
            || v.operationName === 'JUMPI'}
    ).map((v,) => {
        const isConditional = v.operationName === 'JUMPI'
        const stackLength = v.stack.length;
        const isEffective = isConditional && v.stack[stackLength - 2] !== '0x0'

        return {
            ...v,
            destinationPC: isEffective ? BigNumber.from(v.stack[stackLength - 1]) : v.processCounter.add(1),
            ...(isConditional && {isEffective})
        } as JumpTrace}
    )
}

export {getExternalCalls, getInternalJumps, mapRawTrace}