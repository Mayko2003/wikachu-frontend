import './headerStyles.css'
//import logo from '../../../assets/login-sin-fondo.png'
export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent shadow-lg">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#" >WIKACHU</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Pokedex
                                </a>
                                <ul className="dropdown-menu bg-transparent ">
                                    <li><a className="dropdown-item" href="#">Generation I</a></li>
                                    <li><a className="dropdown-item" href="#">Generation II</a></li>
                                    <li><a className="dropdown-item" href="#">Generation III</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Moves</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Natures</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Strategies</a>
                            </li>
                            <li className="nav-item ms-lg-auto">
                                <a className="nav-link" href="#">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sing Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}