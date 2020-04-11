import React           from 'react';
// import {Link}          from 'react-router-dom';
import '../asset/styles/components/Footer.scss';

const Footer = ()=> (
    <React.Fragment>
 <footer className="footer">

      <div class="row">

         <div class="twelve columns">

            <ul class="social-links">
               <li>
                  <a href="https://www.facebook.com/Mauricio-Cartagena-102458494729519" target="facebook" rel="noopener">
                     <i class="fa fa-facebook">
                     </i>
                  </a>
               </li>
               <li>
                  <a href="https://twitter.com/Mc9541991" target="twitter" rel="noopener">
                     <i class="fa fa-twitter"></i>
                  </a>
               </li>
               <li>
                  <a href="mailto:mcartagenacoria@gmail.com" target="email" rel="noopener">
                     <i class="fa fa-envelope"></i>
                  </a>
               </li>
               <li>
                  <a href="https://www.linkedin.com/in/mauricio-cartagena-b59454187/"  target="linkedin" rel="noopener">
                     <i class="fa fa-linkedin"></i>
                  </a>
               </li>
             <li><a href="https://www.instagram.com/mcartagenacoria" target="instagram" rel="noopener"><i class="fa fa-instagram"></i></a></li>
               {/* <li><a href="#" target="_blank"><i class="fa fa-dribbble"></i></a></li>
               <li><a href="#" target="_blank"><i class="fa fa-skype"></i></a></li> */}
                <li>
                  <a href="https://github.com/mauriciocartagena"  target="github" rel="noopener">
                     <i class="fa fa-github"></i>
                  </a>
               </li>
            </ul>

            <ul class="copyright">
               <li>&copy; Copyright 2020 Mauricio Cartagena</li>
               <li> Developer by : Mauricio Cartagena Coria </li>   
            </ul>

         </div>

         <div id="go-top">
            {/* <Link to="/">
               <a class="smoothscroll" title="Back to Top" >
                  <i class="icon-up-open"> 
                  </i>
               </a>
            </Link> */}
            
            </div>

      </div>

</footer> 
    </React.Fragment>
            
);
export default Footer;