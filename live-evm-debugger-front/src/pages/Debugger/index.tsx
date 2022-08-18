import {useParams} from "@solidjs/router";

const Debugger = () => {
    const params = useParams()

    return (
        <>
            <p>debugger</p>
            {JSON.stringify(params)}
        </>
    )
}

export default Debugger