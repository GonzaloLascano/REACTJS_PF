import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">La Glorieta</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#">Shop</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#">Galería</a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar