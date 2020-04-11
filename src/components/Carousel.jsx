import React from 'react';

const Carousel = () =>(
    <React.Fragment>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 font-weight-normal">Mauricio Cartagena</h1>
                <p className="lead font-weight-normal">Software and Web Developer</p>
                <a className="btn btn-outline-secondary" href="/">CONTACT ME</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    </React.Fragment>
);

export default Carousel;
