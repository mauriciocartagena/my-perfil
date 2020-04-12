import React     from "react";
import Carousel  from '../components/Carousel';
import PlusPhoto from "../asset/static/404.png";
import '../asset/styles/components/NotFound.scss';

const NotFound = () => (
  <React.Fragment>
    <Carousel/>
    <div className="container">
      <div className="col-12">
          <div className="detail-shot loaded" data-screenshot_id="2312667" data-img-src={PlusPhoto}>
          <img className="img-fluid" alt="Responsive image" alt="Día 8: 404 café sitio web de diseño web dailyui 404" src={PlusPhoto} />

            </div>
        </div>
    </div>
  </React.Fragment>
);

export default NotFound;



