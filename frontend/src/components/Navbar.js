import { Link } from "react-router-dom";

const PrimaryButton = ({ }) => {
    return (
        <nav class="navbar is-success">
            <div class="navbar-brand">
                <Link class="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Link modern CSS framework based on Flexbox" width="112" height="28" />
                </Link>
                <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link class="navbar-item" to="/">
                        Home
                    </Link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <Link class="navbar-link" to="/">
                            List
                        </Link>
                        <div class="navbar-dropdown is-boxed">
                            <Link class="navbar-item" to="/masyarakat">
                                List Masyarakat
                            </Link>
                            <Link class="navbar-item" to="/pengaduan">
                                List Pengaduan
                            </Link>
                            <Link class="navbar-item" to="/petugas">
                                List Petugas
                            </Link>
                            <Link class="navbar-item" to="/tanggapan">
                                List Tanggapan
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default PrimaryButton