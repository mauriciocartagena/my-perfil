import React from 'react';
import {Jumbotron,Button}    from 'react-bootstrap'

const Carousel = () =>(
    <React.Fragment>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">Mauricio Cartagena</h1>
                <p class="lead font-weight-normal">Software and Web Developer</p>
                <a class="btn btn-outline-secondary" href="#">CONTACT ME</a>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    </React.Fragment>
);

export default Carousel;
