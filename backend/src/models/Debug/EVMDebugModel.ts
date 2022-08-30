import { BigNumber } from "ethers";
import { DebugTrace } from "live-evm-debugger-common/dist/TraceItem";
import { Service } from "typedi";
import {DebugModel} from "../../types/models";

//TODO: change to real implementation
const exampleTrace = require('../../../example-transaction-trace.json')

@Service()
class EVMDebugModel implements DebugModel {
   constructor() {
      console.log("evm debug model contructed")
   }

   getDebugTrace(): DebugTrace {
      return this.mapRawTrace(exampleTrace)
   }

   mapRawTrace = (trace: any): DebugTrace => {
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
         })
      }
   }
}

export default EVMDebugModel
