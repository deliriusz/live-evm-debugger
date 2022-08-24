import {Link} from "@solidjs/router";

const Header = () => {

    return (
        <>
            <div class="col-md-12">
                <nav class="navbar navbar-inverse" role="navigation">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-5">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Live EVM Debugger</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-5">
                            <ul class="nav navbar-nav">
                                {/*TODO: toggle active class*/}
                                <li class="active"><Link href='/'>Main</Link></li>
                                <li><Link href='/debugger'>Debugger</Link></li>
                                <li><Link href='/simulator'>Simulate</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header