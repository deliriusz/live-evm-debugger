import {Route, Router, Routes} from "@solidjs/router";
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
                        <Route path="/:chain/:tx?/debugger" component={Debugger} />
                        <Route path="/:chain/:tx?/simulator" component={Simulator} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
};

export default Layout;
