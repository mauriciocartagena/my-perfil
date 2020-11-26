import React                                from  'react';
import { BrowserRouter,Switch,Route }       from  'react-router-dom'
import Home                                 from  '../containers/Home';
import Resources                            from  '../containers/Resources';
import Resume                               from  '../containers/Resume';
// import Blog                                 from  '../containers/Blog';
import Contact                              from  '../containers/Contact';
import Layout                               from  '../components/Layout';
import NotFound                             from  '../containers/NotFound';

const App = () =>(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path =  { process.env.PUBLIC_URL + "/my-perfil" }  component={Home}/>
                <Route exact path =  { process.env.PUBLIC_URL + "/" }  component={Home}/>
                <Route exact path =  { process.env.PUBLIC_URL + "/resources" } component={Resources}/>
                <Route exact path =  { process.env.PUBLIC_URL + "/resume" }    component={Resume}/>
                {/* <Route extact path="/blog"      component={Blog}/> */}
                <Route extact path=  { process.env.PUBLIC_URL + "/contact" }  component={Contact}/>
                <Route                          component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;