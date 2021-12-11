import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">La Glorieta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/category/bastidor" className="nav-link active" aria-current="page">Bastidores</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/category/papel" className="nav-link">Papel</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/category/deco" className="nav-link">Decó</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar