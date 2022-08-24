import './style.css'

const Footer = () => {

    return (
        <div class="col-md-12">
            <div class="footer">
                <div class="container">
                    <div class="clearfix">
                        <div class="footer-logo"><a href="#"><img src="public/favicon.ico" alt="footer logo"/>Live EVM Debugger</a></div>
                        <dl class="footer-nav">
                            <dt class="nav-title">PORTFOLIO</dt>
                            <dd class="nav-item"><a href="#">Web Design</a></dd>
                            <dd class="nav-item"><a href="#">Branding &amp; Identity</a></dd>
                            <dd class="nav-item"><a href="#">Mobile Design</a></dd>
                            <dd class="nav-item"><a href="#">Print</a></dd>
                            <dd class="nav-item"><a href="#">User Interface</a></dd>
                        </dl>
                        <dl class="footer-nav">
                            <dt class="nav-title">ABOUT</dt>
                            <dd class="nav-item"><a href="#">The Company</a></dd>
                            <dd class="nav-item"><a href="#">History</a></dd>
                            <dd class="nav-item"><a href="#">Vision</a></dd>
                        </dl>
                        <dl class="footer-nav">
                            <dt class="nav-title">CONTACT</dt>
                            <dd class="nav-item"><a href="#">Basic Info</a></dd>
                            <dd class="nav-item"><a href="#">Map</a></dd>
                            <dd class="nav-item"><a href="#">Conctact Form</a></dd>
                        </dl>
                    </div>
                    <div class="footer-copyright text-center">Copyright © 2022 Rafał Kalinowski [deliriusz.eth]. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer