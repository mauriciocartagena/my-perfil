import React              from 'react';
import Typical from 'react-typical'
import Photo              from '../asset/static/photo.png';
import '../asset/styles/components/Biography.scss';
import '../asset/styles/components/Default.scss';

const Biography = () =>(
    <React.Fragment>
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic"  src={Photo} alt="" />
                </div>
                <div className="nine columns main-col">
                        <Typical
                            steps={['Hello', 1000, ' Hello, a bit about me', 500]}
                            wrapper="h2" 
                        />    

                    <p>Developer of web pages, with solid knowledge in technology. <br/>
                    Committed, self-taught, responsible, proactive and analytical passionate about learning new technologies.
                    <br/>
                    
                    In my spare time I love to learn the new trends that appear about software development or watch movies accompanied by popcorn or listen to music.
                    <br/>
                    These three activities cause my brain to release endorphins and I start to feel even better.
                    <br/>
                    
                    I love music for that reason as I am developing I am listening to music.

                    <br/>
                    </p>
                    
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact </h2>
                            <p className="address">
                                    <span>Mauricio Cartagena</span><br/>
                                    <span>Cochabamba <br/>
                                        Bolivia -  Cochabamba</span>
                                     <br/>
                                    <span>(+591) 77907360</span><br/>
                                <span>mcartagenacoria@gmail.com</span>
                                </p>
                        </div>
                       
                    </div>
                    <hr/>
                    <h2>
                        Steve Jobs
                    </h2>
                    <p className="lead font-weight-normal">
                        The only way to do a great job is love what you do
                    </p>
                </div>
            </div>
        </section>
    </React.Fragment>
);
export default Biography;