import {useParams} from "@solidjs/router";
import {createSignal, onMount, Show} from "solid-js";
import {getExternalCalls, getInternalJumps, mapRawTrace} from "../../services/debugTraceTransformer";
import {JsonRpcProvider} from "@ethersproject/providers/src.ts/json-rpc-provider";
import {getChainForSymbolicName } from "../../services/chainProvider";

const Debugger = () => {
    const [isLoading, setIsLoading] = createSignal(true)
    const [isWrongPath, setIsWrongPath] = createSignal(false)
    const [error, setError] = createSignal<Error | undefined>()
    const params = useParams()
    let provider: JsonRpcProvider | undefined
    const exampleTrace = require('../../../example-transaction-trace.json')

    onMount(() => {
        if (params.chain && params.tx) {
            provider = getChainForSymbolicName(params.chain)?.provider

            const transformedTrace = mapRawTrace(exampleTrace)
            console.log(transformedTrace)
            console.log(getExternalCalls(transformedTrace.trace))
            console.log(getInternalJumps(transformedTrace.trace))

            // trace calls documentation https://www.quicknode.com/docs/ethereum/debug_traceCall
            //TODO: enable when testing is finished
            // const transaction = provider?.send("debug_traceTransaction", [
            //     params.tx,
            // ]).then(v => console.log(v)).catch(e => setError(e))


            // retrieve contract source by contract address:
            // https://docs.sourcify.dev/docs/api/server/get-source-files-full/
            // e.g. https://sourcify.dev/server/files/any/1/0xca2ad74003502af6B727e846Fab40D6cb8Da0035
        } else {
            setIsWrongPath(true)
        }
    })

    return (
        <>
            <p>debugger</p>
            <Show when={isWrongPath()}>
                Wrong path. Please return to main screen and select existing transaction hash.
            </Show>
            <Show when={isLoading()}>
                Loading...
            </Show>
            <Show when={error() && error()?.message}>
                <div class="alert alert-danger">
                    <button type="button" class="close" onClick={setError(undefined)} data-dismiss="alert" aria-hidden="true">×</button>
                    <strong>Oh snap!</strong> {JSON.stringify(error() || '')}
                </div>
            </Show>
        </>
    )
}

export default Debugger