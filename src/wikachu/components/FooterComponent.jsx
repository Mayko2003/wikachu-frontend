import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/w-logo.png';

export const Footer = () => {
    return (
        <footer className="p-5 shadow-lg d-lg-flex text-light">
            <div className="col-lg-4">
                    <div className="d-flex">
                        <h1>Wikachu <img src={logo} className="logo" alt="" /></h1>
                    </div>
                    <i className="text-secondary mt-0">
                        Designed and built with all the love in the world by Wikachu team. © 2021
                    </i>
                    <div className="d-flex mt-3">
                        <a href="https://www.facebook.com" className="link-light me-2" target="_blank"><i
                            className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com" className="link-light me-2" target="_blank"><i
                            className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com" className="link-light" target="_blank"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-lg-8 d-flex ms-lg-4">
                    <div className="col-4 pt-2">
                        <h4 className="mb-3">About</h4>
                        <ul className="list-group">
                            <a className="link-secondary" href="">About Us</a>
                            <a className="link-secondary" href="">Team</a>
                            <a className="link-secondary" href="">Contac Us</a>

                        </ul>
                    </div>
                    <div className="col-4 pt-2">
                        <h4 className="mb-3">Legal</h4>
                        <ul className="list-group">
                            <a className="link-secondary" href="">Terms and Conditions</a>
                            <a className="link-secondary" href="">Privacy Policy</a>
                        </ul>
                    </div>
                    <div className="col-4 pt-2">
                        <h4 className="mb-3">Useful Links</h4>
                        <ul className="list-group">
                            <a className="link-secondary" href="">Home</a>
                            <a className="link-secondary" href="">Pokedex</a>
                            <a className="link-secondary" href="">Items</a>
                            <a className="link-secondary" href="">Moves</a>
                            <a className="link-secondary" href="">Natures</a>
                        </ul>
                    </div>
                </div>
        </footer>
    )
} 