import React    from 'react';
import { Link } from 'react-router-dom';
import '../asset/styles/components/Construction.scss';

const Construction = () =>(

    <div id="home" className="construction">
            <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">Our new site is in process</h1>
                <h3><span> stay in touch</span> <br/>
                    <Link to= "/"  className="smoothscroll">
                             Home
                    </Link>
                    </h3>
                <hr />
            </div>
            </div>
    </div>

);
export default Construction;