import {Navigate, Route, Router, Routes} from "@solidjs/router";
import Main from "../../pages/Main";
import Header from "../Header";
import Footer from "../Footer";
import Debugger from "../../pages/Debugger";
import Simulator from "../../pages/Simulator";
import './style.css'

const Layout = () => {
    return (
        <Router>
            <div class="wrapper">
                <Header />
                <div class="routing-content">
                    <Routes>
                        <Route path="/" component={Main} />
                        <Route path="/:chain/debugger/:tx" component={Debugger} />
                        <Route path="/:chain/simulator/:tx?" component={Simulator} />
                        {/*<Route path="/">*/}
                        {/*    <Navigate href={'/eth'}/>*/}
                        {/*</Route>*/}
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
};

export default Layout;
