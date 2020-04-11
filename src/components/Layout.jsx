import React  from 'react';
import Header from './Header';
import Footer from './Footer';
import '../asset/styles/components/Body.scss';
//El children sirve para heredar componentes y poner otras cosas en medio
const Layout = ({children})=>(
    <div className="App">
      
            <Header></Header>
                {children}
            <Footer></Footer>

    </div>
);
export default Layout;
