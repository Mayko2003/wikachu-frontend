import './footerStyles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
export const Footer = () => {
    return (
        <>
            <footer className="navbar navbar-expand-lg navbar-dark bg-dark text-white p-0 todo">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-4 p-0">
                        <div className="px-5 py-3 follow-us">
                            <h2 className="fs-4 fw-bold pt-3">Social Media</h2>
                            <div className="d-flex justify-content-between py-2 flex-wrap">
                                <a href="#" className='link-light social-media'><i className="bi bi-instagram fa-10x"></i></a>
                                <a href="#" className='link-light social-media'><i className="bi bi-facebook"></i></a>
                                <a href="#" className='link-light social-media'><i className="bi bi-github"></i></a>
                                <a href="#" className='link-light social-media'><i className="bi bi-twitter"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-0">
                        <div className="px-5 py-3 follow-us">
                            <h2 className="fs-4 fw-bold pt-3">About</h2>
                            <div className="d-flex justify-content-between py-2">
                                We are a team of two persons who like Pokemon and want to learn React.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 p-0">
                        <div className="px-5 py-3 follow-us">
                            <h2 className="fs-4 fw-bold pt-3">Legal</h2>
                            <div className="d-flex justify-content-between py-2 flex-column">
                                <a href="#" className='link-light'>Terms and Privacy</a>
                                <div className="note">
                                    Note: Pokémon and Pokémon character names are trademarks of Nintendo.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center follow-us py-2">
                        <p className="p-2 m-0">© 2022 Copyright: Wikachu</p>
                    </div>
                </div>
            </footer>
        </>
    )
} 