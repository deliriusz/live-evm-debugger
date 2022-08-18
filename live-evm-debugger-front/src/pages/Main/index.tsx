import {supportedChains} from "../../data/supportedChains";
import {createSignal, For, Show} from "solid-js";
import {chainProvider} from "../../services/getChainConnectionProvider";
import {Chain} from "../../interfaces/chain";
import {Link} from "@solidjs/router";

const Main = () => {
    const [currentChain, setCurrentChain] = createSignal(supportedChains[0])
    const [provider, setProvider] = createSignal(chainProvider(currentChain()))
    const [transactionHash, setTransactionHash] = createSignal('')
    const [searchInAllChains, setSearchInAllChains] = createSignal(true)
    const [isSearching, setIsSearching] = createSignal(false)
    const [transactionSearchResults, setTransactionSearchResults] = createSignal<any[]>([])


    function getApplicableProviders(): Chain[] {
        const chainsWithProviders: Chain[] = []

        for (const chain of searchInAllChains() ? supportedChains : [currentChain()]) {
            if (!chain.provider) {
                chain.provider = chainProvider(chain)
            }
            chainsWithProviders.push(chain)
        }
        return chainsWithProviders
    }

    function searchForTransaction() {
        setIsSearching(true)
        setTransactionSearchResults([])
        const providers = getApplicableProviders();

        Promise.all(
            providers.map((chainWithProvider,) => {
                console.log(chainWithProvider.name)
                return chainWithProvider.provider!.getTransaction(transactionHash()).then(tr => {return {chainWithProvider, tr}})
            })
        ).then(transactions => {
            transactions.forEach((t,) => {
                if(t.tr?.hash?.length > 0) {
                    setTransactionSearchResults([{
                        transactionHash: t.tr.hash,
                        chain: t.chainWithProvider
                    }, ...transactionSearchResults()])
                }
            })
        }).finally(() => {
            setIsSearching(false)
            console.log(transactionSearchResults())
        })
    }

    return (
        <>
            <p> search for transaction hash to debug: </p>
            <div class="col-md-4">
                <div class="checkbox">
                    <div class="icheckbox_flat">
                        <input type="checkbox" id="flat-checkbox-1" onChange={e => setSearchInAllChains(!searchInAllChains())} checked={searchInAllChains()} />
                    </div>
                    <label for="flat-checkbox-1">Search in all chains</label>
                </div>
            </div>
            <div class="col-md-8 input-group form-search">
                <div class="input-group-btn">
                    <button type="button" class="btn btn-info" tabIndex="-1">{currentChain().name}</button>
                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" tabIndex="-1">
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        {supportedChains.map((v,) => {
                            return <li onClick={() => setCurrentChain(v)}><a href="#">{v.name}</a></li>
                        })}
                    </ul>
                </div>
                <input type="text" value={transactionHash()} onChange={e => setTransactionHash(e.currentTarget.value)} class="form-control search-query"/>
                <span class="input-group-btn">
                    <button type="submit" onClick={e => searchForTransaction()} class="btn btn-primary" data-type="last">
                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                  </span>
            </div>
            <div>
                <Show when={isSearching()}>
                    <p>Searching...</p>
                </Show>
                <div class="col-md-12">
                    <ul class="nav nav-pills nav-stacked">
                        <For each={transactionSearchResults()}>{(result, i) =>
                            <li><Link href={'/' + result.chain.symbolicName + '/debugger/' + result.transactionHash}>{result.chain.name}</Link></li>
                        }</For>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Main
