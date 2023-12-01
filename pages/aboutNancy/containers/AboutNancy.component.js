import React from 'react';
import { chart } from '../../../public/images/nancy'
import { HeartIcon } from '../../layouts/commons/icons';
import Image from 'next/image';



const AboutNancyComponent = () => {
  return (
    <React.Fragment>
      <div id="aboutNancy">
        <div className="section-head col-sm-12 container mt-5">
          <h4><span>Who</span> We Are?</h4>
          <p>When you choose us, you&apos;ll feel the benefit of 10 years&apos; experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div className="container py-4 px-5">
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 d-flex justify-content-center">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="text-center">
                  <div className="img-hover-zoom img-hover-zoom--colorize">
                    <img className="shadow" src="https://source.unsplash.com/n4KewLKFOZw/600x600"
                      alt="Another zoom-on-hover effect" />
                  </div>
                </div>
                <div className="card-body">
                  <div className="clearfix mb-3">
                  </div>
                  <div className="my-2 text-center">
                    <h1>Thang Dao</h1>
                  </div>
                  <div className="mb-3">
                    <h2 className="text-uppercase text-center role">Founder</h2>
                  </div>
                  <div className="box">
                    <div>
                      <ul className="list-inline">
                        {/* <li className="list-inline-item"><i className="fab fa-github"></i></li>
                        <li className="list-inline-item"><i className="fab fa-linkedin-in"></i></li> */}
                        <li className="list-inline-item"><i className="fab fa-instagram"></i></li>
                        <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="text-center">
                  <div className="img-hover-zoom img-hover-zoom--colorize">
                    <img className="shadow" src="https://source.unsplash.com/n4KewLKFOZw/600x600"
                      alt="Another zoom-on-hover effect" />
                  </div>
                </div>
                <div className="card-body">
                  <div className="clearfix mb-3">
                  </div>
                  <div className="my-2 text-center">
                    <h1>Nam Phan</h1>
                  </div>
                  <div className="mb-3">
                    <h2 className="text-uppercase text-center role">Manager</h2>
                  </div>
                  <div className="box">
                    <div>
                      <ul className="list-inline">
                        {/* <li className="list-inline-item"><i className="fab fa-github"></i></li>
                        <li className="list-inline-item"><i className="fab fa-linkedin-in"></i></li> */}
                        <li className="list-inline-item"><i className="fab fa-instagram"></i></li>
                        <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="text-center">
                  <div className="img-hover-zoom img-hover-zoom--colorize">
                    <img className="shadow" src="https://source.unsplash.com/rDEOVtE7vOs/600x600"
                      alt="Another zoom-on-hover effect" />
                  </div>
                </div>
                <div className="card-body">
                  <div className="clearfix mb-3">
                  </div>
                  <div className="my-2 text-center">
                    <h1>Nancy Nguyen</h1>
                  </div>
                  <div className="mb-3">
                    <h2 className="text-uppercase text-center role">Vice Manager</h2>
                  </div>
                  <div className="box">
                    <div>
                      <ul className="list-inline">
                        {/* <li className="list-inline-item"><i className="fab fa-github"></i></li>
                        <li className="list-inline-item"><i className="fab fa-linkedin-in"></i></li> */}
                        <li className="list-inline-item"><i className="fab fa-instagram"></i></li>
                        <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center container mb-5">
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="section-head col-sm-12 pt-5">
            <h4><span>What</span> We Do?</h4>
            <p>When you choose us, you&apos;ll feel the benefit of 10 years&apos; experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
          </div>
        </div>
        {/* <Image src={chart} alt="gif chart" /> */}
        <Image alt="post 1" src={chart} layout='fill' />
      </div>
      <div id="chooseUs">
        <div className="feat bg-gray pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="section-head col-sm-12">
                <h4><span>Why Choose</span> Us?</h4>
                <p>When you choose us, you&apos;ll feel the benefit of 10 years&apos; experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
                  <h6>Modern Design</h6>
                  <p>We use latest technology for the latest world because we know the demand of peoples.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
                  <h6>Creative Design</h6>
                  <p>We are always creative and and always lisen our costomers and we mix these two things and make beast design.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
                  <h6>24 x 7 User Support</h6>
                  <p>If our customer has any problem and any query we are always happy to help then.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item"> <span className="icon feature_box_col_four"><i className="fa fa-database"></i></span>
                  <h6>Business Growth</h6>
                  <p>Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you&apos;re climbing it</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item"> <span className="icon feature_box_col_five"><i className="fa fa-upload"></i></span>
                  <h6>Market Strategy</h6>
                  <p>Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
                  <h6>Affordable cost</h6>
                  <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default AboutNancyComponent;