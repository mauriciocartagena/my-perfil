import React    from 'react';
import { Link } from 'react-router-dom';
import '../asset/styles/components/Carousel.scss';
const Carousel = () =>(
    <React.Fragment>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light carousel">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 font-weight-normal">Mauricio Cartagena</h1>
                <p className="lead font-weight-normal">Software and Web Developer</p>
                <Link to= { process.env.PUBLIC_URL + "/contact" }  className="btn btn-outline-secondary">
                    CONTACT ME
                </Link>
                
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    </React.Fragment>
);

export default Carousel;
