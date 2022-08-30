import { DebugTrace } from "live-evm-debugger-common/dist/TraceItem";

export interface DebugModel {
   getDebugTrace(): DebugTrace
}
