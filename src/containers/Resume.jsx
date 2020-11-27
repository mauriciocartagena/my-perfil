import React                 from 'react';
import Carousel              from '../components/Carousel';
import '../asset/styles/components/Resume.scss'

const Resume = () => (
    <React.Fragment>
        <Carousel/>
        <section id="resume">
            <div className="row education">

            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">

                <div className="row item">

                    <div className="twelve columns">

                        <h3>Institute technological Infocal</h3>
                        <p className="info">Technical higher 2020
                        
                        {/* <span>&bull;</span> <em className="date"> 
                            April 2007 
                        </em> */}
                        </p>

                        <p>
                        The National Institute of Labor Education and Training «INFOCAL» was created through DS 22105 of December 29, 1988, beginning its activities in June 1989, as a Public Law Institution, decentralized at the departmental level, from 1989 to 1995 according to the Tripartism principle: Government - Private Company - Workers, under the tuition of the Ministry of Human Development.
                        </p>

                    </div>

                </div> 

                {/* <div className="row item">

                    <div className="twelve columns">

                        <h3>School of Cool Designers</h3>
                        <p className="info">B.A. Degree in Graphic Design <span>&bull;</span> <em className="date">March 2003</em></p>

                        <p>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                        ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                        </p>

                    </div>

                </div>  */}

            </div> 

            </div>



            {/* <div className="row work">

            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">

                <div className="row item">

                    <div className="twelve columns">

                        <h3>----</h3>
                        <p className="info">--- <span>&bull;</span> <em className="date">---</em></p>

                        <p>
                            ---
                        </p>

                    </div>

                </div> 
                <div className="row item">

                    <div className="twelve columns">

                        <h3>Super Cool Studio</h3>
                        <p className="info">UX Designer <span>&bull;</span> <em className="date">March 2007 - February 2010</em></p>

                        <p>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                        ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                        </p>

                    </div>

                </div> 

            </div> 
            </div>  */}


            <div className="row skill">

        <div className="three columns header-col">
            <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

            <p>I consider that I have the following skills.
            </p>

                <div className="bars">

                    <ul className="skills">
                        <li><span className="bar-expand css"></span><em>HTML / CSS</em></li>
                        <li><span className="bar-expand javascript"></span><em>JAVASCRIPT</em></li>
                        <li><span className="bar-expand programming"></span><em>PROGRAMMING</em></li>
                        <li><span className="bar-expand responsability"></span><em>RESPONSIBILITY</em></li>
                        <li><span className="bar-expand creativity"></span><em>CREATIVITY</em></li>
                        <li><span className="bar-expand multitask"></span><em>MULTITASK</em></li>
                    </ul>

                </div>

            </div> 

        </div> 

        </section>
</React.Fragment>
);

export default Resume;