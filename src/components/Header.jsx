import React                    from 'react';
import {Nav,Navbar}             from 'react-bootstrap';
import {Link}                   from 'react-router-dom';
import '../asset/styles/components/Products.scss';

const Header = () =>(
    <React.Fragment>
      <Navbar className="site-header sticky-top py-1"   collapseOnSelect expand="lg"  variant="dark">
          <Navbar.Brand >
            <Link to="/">
                Mauricio-Cartagena
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto container">

                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/resources">Resources</Link>
                  <Link to="/contact">Contact</Link>
                  {/* <Link to="/blog">Blog</Link> */}
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
);

export default Header;