import React, { useState } from 'react';
import './Host.css';
import img1 from '../../assets/host-comp-img1.svg';
import img2 from '../../assets/host-comp-img2.svg';
import img3 from '../../assets/host-comp-img3.svg';
import img4 from '../../assets/host-comp-img4.svg';
import img5 from '../../assets/host-comp-img5.svg';
import img6 from '../../assets/host-comp-img6.svg';
import img7 from '../../assets/host-comp-img7.svg';
import img8 from '../../assets/host-img2.svg';
import img9 from '../../assets/host-comp-img9.svg';
import img10 from '../../assets/host-comp-img10.svg';
import img11 from '../../assets/host-comp-img11.svg';
import img12 from '../../assets/host-comp-img12.svg';
import img13 from '../../assets/host-comp-img13.svg';
import img14 from '../../assets/host-comp-img14.svg';

export default function Host() {
  const [expandFirst, setExpandFirst] = useState(false);
  const [expandSecond, setExpandSecond] = useState(false);
  const [expandThird, setExpandThird] = useState(false);
  const [expandFourth, setExpandFourth] = useState(false);

  return (
    <section className={`host-section `}>
      <div className="host-container">
        <div className="hosting-section">
          <div className="first-section">
            <div className="host-detailss">
              <div className="hosting-content">
                <div className="host-competition-content">
                  <h1 className="host-title">Host your data science competition on Kaggle</h1>
                  <p className="host-para">
                    Whether you&apos;re an ML enthusiast, a teacher in class, or part of a business looking to solve challenging problems,
                    the Kaggle platform connects your audience with your machine learning goals.
                  </p>
                  <a href="#">
                    <div className="buttons">
                      <div className="button first">
                        <div className="button-title">See Our Competition Types</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="winning-image">
                <img src={img1} alt="winner-logo" width={250} height={200} />
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className="main-head">
              <h3 className="main">Why a Kaggle Competition?</h3>
            </div>
            <div className="bottom-head">
              <div className="left-sec">
                <p className="left-sec">
                  Kaggle is the home of data science, with over 16 million users, ready to solve your predictive modeling problem through
                  data competitions.
                </p>
                <p className="left-sec">
                  You set the terms, Kagglers construct their algorithms, and our website scores their accuracy in real time to find the
                  winner. Competitions are the smart, simple way to tackle a tough business problem, educate students, or simply create a
                  fun event.
                </p>
                <p className="left-sec">You bring the problem and the data, and Kaggle brings the platform.</p>
              </div>
              <div className="right-sec">
                <img src={img8} alt="logo-8" />
                <div className="right-sec-content">
                  <h3 className="heading">Kaagle Competition Features</h3>
                  <div className="grid-section">
                    <div className="sub-content">
                      <img src={img2} alt="logo-2" />
                      <div className="sub-head">Dataset Hosting</div>
                    </div>
                    <div className="sub-content">
                      <img src={img3} alt="logo-3" />
                      <div className="sub-head">Real-time Leaderboards</div>
                    </div>
                    <div className="sub-content">
                      <img src={img4} alt="logo-4" />
                      <div className="sub-head">Pre-loaded Metrics</div>
                    </div>
                    <div className="sub-content">
                      <img src={img5} alt="logo-5" />
                      <div className="sub-head">Discussion Forums</div>
                    </div>
                    <div className="sub-content">
                      <img src={img6} alt="logo-6" />
                      <div className="sub-head">Automated Scoring</div>
                    </div>
                    <div className="sub-content">
                      <img src={img7} alt="logo-7" />
                      <div className="sub-head">Kaggle Notebooks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="third-section">
            <h3 className="main">Which Kaggle Competition is right for you?</h3>
            <p className="third-sec">
              Kaggle offers a range of offerings for competition hosts. Select the one that&apos;s right for your needs.
            </p>
            <div className="top-comp column">
              <div className="community-sec row">
                <img src={img9} alt="logo-9" />
                <div className="top-comp-content">
                  <h3 className="main">Community</h3>
                  <p className="third-sec">For educators, small businesses, or ML enthusiasts</p>
                  <h5 className="third-sec">No cost</h5>
                  <div className="host-bottom-content row center">
                    <a href="#">
                      <button className="start">Get Started</button>
                    </a>
                    <a href="#">
                      <div className="learn-more mt">Learn More</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="featured-sec row">
                <img src={img10} alt="logo-10" />
                <div className="top-comp-content">
                  <h3 className="main">Featured</h3>
                  <p className="third-sec">For businesses or organizations with demanding ML problems</p>
                  <h5 className="third-sec">Pricing varies</h5>
                  <div className="host-bottom-content row center">
                    <a href="#">
                      <button className="start">Contact Us</button>
                    </a>
                    <a href="#">
                      <div className="learn-more mt">Learn More</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="research-sec row">
                <img src={img11} alt="logo-11" />
                <div className="top-comp-content">
                  <h3 className="main">Research</h3>
                  <p className="third-sec">For Academic / Research Institutions or Non-Profits</p>
                  <h5 className="third-sec">Grants available</h5>
                  <div className="host-bottom-content row center">
                    <a href="#">
                      <button className="start">Apply Now</button>
                    </a>
                    <a href="#">
                      <div className="learn-more mt">Learn More</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="comparison grid4">
              <div className="top-comp">
                <div className="community-sec">
                  <img src={img9} alt="logo-9" />
                  <h3 className="main">Community</h3>
                  <p className="third-sec">For educators, small businesses, or ML enthusiasts</p>
                  <h5 className="third-sec">No cost</h5>
                </div>
                <div className="featured-sec">
                  <img src={img10} alt="logo-10" />
                  <h3 className="main">Featured</h3>
                  <p className="third-sec">For businesses or organizations with demanding ML problems</p>
                  <h5 className="third-sec">Pricing varies</h5>
                </div>
                <div className="research-sec">
                  <img src={img11} alt="logo-11" />
                  <h3 className="main">Research</h3>
                  <p className="third-sec">For Academic / Research Institutions or Non-Profits</p>
                  <h5 className="third-sec">Grants available</h5>
                </div>
              </div>
              <div className="top-comp points">
                <div className="community-sec">
                  <h3 className="main">Community</h3>
                </div>
                <div className="featured-sec">
                  <h3 className="main">Featured</h3>
                </div>
                <div className="research-sec">
                  <h3 className="main">Research</h3>
                </div>
              </div>
              <div className="middle-comp">
                <div className="middle-lines-main">
                  <div className="middle-line-head">Shared Features</div>
                  <div className="middle-line-sec"></div>
                  <div className="middle-line-third"></div>
                  <div className="middle-line-fourth"></div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Dataset Hosting</div>
                  <div className="middle-line-sec">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Notebooks with no cost compute</div>
                  <div className="middle-line-sec">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Competition-specific forum</div>
                  <div className="middle-line-sec">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Live competition leaderboard</div>
                  <div className="middle-line-sec">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Real-time submission scoring</div>
                  <div className="middle-line-sec">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines-main">
                  <div className="middle-line-head">Key Differences</div>
                  <div className="middle-line-sec"></div>
                  <div className="middle-line-third"></div>
                  <div className="middle-line-fourth"></div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Featured on Competition homepage</div>
                  <div className="middle-line-sec">
                    <img src={img13} alt="logo-12" className="dash" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Marketing on Kaggle & social media</div>
                  <div className="middle-line-sec">
                    <img src={img13} alt="logo-12" className="dash" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Cash prizes allowed to winners</div>
                  <div className="middle-line-sec">
                    <img src={img13} alt="logo-12" className="dash" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Increased participation via Kaggle progression system</div>
                  <div className="middle-line-sec">
                    <img src={img13} alt="logo-12" className="dash" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines-main">
                  <div className="middle-line-head">Support</div>
                  <div className="middle-line-sec"></div>
                  <div className="middle-line-third"></div>
                  <div className="middle-line-fourth"></div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Technical advice and support</div>
                  <div className="middle-line-sec">
                    <img src={img13} alt="logo-12" className="dash" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Comprehensive prep for launch</div>
                  <div className="middle-line-sec">
                    <img src={img13} alt="logo-12" className="dash" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
                <div className="middle-lines">
                  <div className="middle-line-one">Live competition monitoring</div>
                  <div className="middle-line-sec">
                    <img src={img13} alt="logo-12" className="dash" />
                  </div>
                  <div className="middle-line-third">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                  <div className="middle-line-fourth">
                    <img src={img12} alt="logo-12" className="check" />
                  </div>
                </div>
              </div>
              <div className="bottom-comp">
                <div className="host-bottom-content">
                  <a href="#">
                    <button className="start">Get Started</button>
                  </a>
                  <a href="#">
                    <div className="learn-more">Learn More</div>
                  </a>
                </div>
                <div className="host-bottom-content">
                  <a href="#">
                    <button className="contact">Contact Us</button>
                  </a>
                  <a href="#">
                    <div className="learn-more">Learn More</div>
                  </a>
                </div>
                <div className="host-bottom-content">
                  <a href="#">
                    <button className="apply">Apply Now</button>
                  </a>
                  <a href="#">
                    <div className="learn-more">Learn More</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="fourth-section">
            <h3 className="main">Competition FAQs</h3>
            <div className="faq-section">
              <div className="faq">
                <div className="faq-ques">
                  <div className="faq-left">
                    <h5 className="ques">Who&apos;s eligible to launch a community competition?</h5>
                  </div>
                  <div
                    className={`faq-right ${expandFirst ? 'rotate' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setExpandFirst(!expandFirst)}
                    onKeyDown={() => setExpandFirst(!expandFirst)}
                  >
                    <img src={img14} alt="logo-14" className="arrow" />
                  </div>
                </div>
                <p className={`ans ${expandFirst ? 'visible' : ''}`}>
                  Everyone! Previously, this platform could only be used in university courses, but now anyone can organize a competition,
                  including research organizations, companies, and regional meetup groups.
                </p>
              </div>
              <div className="faq">
                <div className="faq-ques">
                  <div className="faq-left">
                    <h5 className="ques">How do grants for Research Competitions work?</h5>
                  </div>
                  <div
                    className={`faq-right ${expandSecond ? 'rotate' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setExpandSecond(!expandSecond)}
                    onKeyDown={() => setExpandSecond(!expandSecond)}
                  >
                    <img src={img14} alt="logo-14" className="arrow" />
                  </div>
                </div>
                <p className={`ans ${expandSecond ? 'visible' : ''}`}>
                  Kaggle is offering quarterly grants to hosts at academic/sesearch institutions and non-profit organizations who want to
                  run competitions to further their machine learning research efforts.
                </p>
              </div>
              <div className="faq">
                <div className="faq-ques">
                  <div className="faq-left">
                    <h5 className="ques">What do I need to get started to create a competition?</h5>
                  </div>
                  <div
                    className={`faq-right ${expandThird ? 'rotate' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setExpandThird(!expandThird)}
                    onKeyDown={() => setExpandThird(!expandThird)}
                  >
                    <img src={img14} alt="logo-14" className="arrow" />
                  </div>
                </div>
                <p className={`ans ${expandThird ? 'visible' : ''}`}>
                  You&apos;ll need a) a clearly defined problem that competitors need to solve using a machine learning model and b) a
                  dataset that&apos;s used both for training and evaluating the effectiveness of these models. For example, in the{' '}
                  <a href="#" className="lined">
                    {' '}
                    Store Sales – Time Series Forecasting competition{' '}
                  </a>{' '}
                  competitors must accurately predict how many of a grocery item will sell using a dataset of past product and sales
                  information from Corporación Favorita, a large Ecuadorian-based grocery retailer.
                </p>
                <p className={`star ${expandThird ? 'visible' : ''}`}>
                  Check out our{' '}
                  <a href="#" className="lined">
                    {' '}
                    step by step guide{' '}
                  </a>{' '}
                  on how to get started.
                </p>
              </div>
              <div className="faq">
                <div className="faq-ques">
                  <div className="faq-left">
                    <h5 className="ques">How do I get support for my competition?</h5>
                  </div>
                  <div
                    className={`faq-right ${expandFourth ? 'rotate' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setExpandFourth(!expandFourth)}
                    onKeyDown={() => setExpandFourth(!expandFourth)}
                  >
                    <img src={img14} alt="logo-14" className="arrow" />
                  </div>
                </div>
                <p className={`ans ${expandFourth ? 'visible' : ''}`}>
                  Because Community Competitions are no cost and entirely self-service, we aren&apos;t able to provide hands-on support for
                  setting up or troubleshooting your competition. But, we encourage connecting with other Community Competition hosts in the{' '}
                  <a href="#" className="lined">
                    {' '}
                    Competition Hosting forum{' '}
                  </a>
                  . If you&apos;re experiencing an issue that you believe is affecting the entire platform, please contact us here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
