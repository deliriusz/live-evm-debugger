import {Link} from "@solidjs/router";

const Header = () => {

    return (
        <nav>
            <Link href='/'>main</Link>
            {'||'}
            <Link href='/debugger'>debug</Link>
            {'||'}
            <Link href='/simulator'>simulate</Link>
        </nav>
    )
}

export default Header