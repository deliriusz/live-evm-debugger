import {supportedChains} from "../../data/supportedChains";
import {createSignal} from "solid-js";
import {chainProvider} from "../../services/getChainConnectionProvider";

const Main = () => {
    const [currentChain, setCurrentChain] = createSignal(supportedChains[0])
    const [provider, setProvider] = createSignal(chainProvider(currentChain()))
    console.log(provider())

    return (
        <>
            <p> search for transaction hash to debug: </p>
            <div class="input-group form-search">
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
                <input type="text" class="form-control search-query"/>
                  <span class="input-group-btn">
                    <button type="submit" class="btn btn-primary" data-type="last">
                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                  </span>
            </div>
        </>
    )
}

export default Main