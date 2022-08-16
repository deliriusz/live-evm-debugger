import {Route, Router, Routes} from "@solidjs/router";
import Main from "../../pages/Main";
import Header from "../Header";
import Footer from "../Footer";
import Debugger from "../../pages/Debugger";
import Simulator from "../../pages/Simulator";

const Layout = () => {
    return (
        <Router>
            <div class="wrapper">
                <Header />
                <div class="routing-content">
                    <Routes>
                        <Route path="/" component={Main} />
                        <Route path="/debugger" component={Debugger} />
                        <Route path="/simulator" component={Simulator} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default Layout;
