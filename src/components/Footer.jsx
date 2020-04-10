import React           from 'react';
import '../asset/styles/components/Footer.scss'
const Footer = ()=> (
    <React.Fragment>
        <footer className="footer-distributed card-footer text-muted">
            <div className="footer-left">
                <h3>Company<span>logo</span></h3>
                    <p className="footer-links">
                        
                    </p>
                <p className="footer-company-name">© 2020 Copyright: Mauricio Cartagena </p>
            </div>

        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p>
                    <span>Cochabamba</span> 
                    Bolivia Cochabamba
                </p>
            </div>
            <div>
                <i className="fa fa-phone"></i>
                <p>+591 77907360</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p>
                    <a href="mailto:mcartagenacoria@gmail.com">mcartagencoria@gmail.com</a>
                </p>
            </div>
        </div>

        <div className="footer-right">
            <p className="footer-company-about">
                <span>Follow me!</span>
                Follow me on my social networks .
            </p>
            <div className="footer-icons">
                <a href="https://www.facebook.com/Mauricio-Cartagena-102458494729519" target="_blank">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/Mc9541991"   target="_blank">
                    <i className="fa fa-twitter" ></i></a>
                <a href="https://www.linkedin.com/in/mauricio-cartagena-b59454187/" target="_blank">
                    <i className="fa fa-linkedin" ></i>
                </a>
                <a href="https://github.com/mauriciocartagena" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
            </div>
        </div>
        </footer> 
    </React.Fragment>
            
);
export default Footer;