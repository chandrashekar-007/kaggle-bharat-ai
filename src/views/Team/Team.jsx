import React from 'react'
import './Team.css'
import img1 from '../../assets/member-1.jpg';
import img2 from '../../assets/member-2.jpg';
import img3 from '../../assets/member-3.jpg';
import img4 from '../../assets/member-4.jpg';
import img5 from '../../assets/member-5.jpg';
import img6 from '../../assets/member-6.jpg';
import img7 from '../../assets/member-7.jpg';
import img8 from '../../assets/member-8.jpg';


export default function Team() {
  return (
    <section className={`team-section `}>
        <div className="team-container">
            <div className="team-contents">
                <div className="team-title">
                    <h3 className="main">Meet Our Team</h3>
                </div>
                <div className="team-data grid">
                    <div className="member first">
                        <a href="#">
                            <img src={img1} alt="team-logo" />
                        </a>
                        <div className="team-content">
                            <div className="mem-name">D. Sculley</div>
                            <div className="designation">CEO</div>
                            <div className="description">D. is the CEO at Kaggle. Prior to coming to Kaggle, he was a director at Google Brain, leading research teams working on robust, responsible, reliable and efficient ML and AI. In his career in ML, he has worked on nearly every aspect of machine learning, and has led both product and research teams including those on some of the most challenging business problems. Some of his well known work involves ML Technical Debt, ML Education, ML Robustness, production-critical ML, and ML for scientific applications such as protein design.</div>
                        </div>
                    </div>
                    <div className="member second">
                        <a href="#">
                            <img src={img2} alt="team-logo" />
                        </a>
                        <div className="team-content">
                            <div className="mem-name">Julia Elliott</div>
                            <div className="designation">COO</div>
                            <div className="description">
                            Julia Elliott is Kaggle&apos;s COO, overseeing its Operations, Strategy, Marketing, Developer Relations, and Program Management functions. She holds a degree in electrical engineering from the University of Pennsylvania and a MBA from the University of North Carolina at Chapel Hill. Prior to Kaggle, she worked at IBM and Upwork and is skilled at building scalable operational solutions for technology products that provide customer solutions. She&apos;s passionate about making technology more inclusive and accessible to historically marginalized communities.
                            </div>
                        </div>
                    </div>
                    <div className="member third">
                        <a href="#">
                            <img src={img3} alt="team-logo" />
                        </a>
                        <div className="team-content">
                            <div className="mem-name">Jeff Moser</div>
                            <div className="designation">Chief Architect</div>
                            <div className="description">
                            Good software is a game of inches where polishing is very important. My main strategy is to invest a lot of blood, sweat, and tears into a product and then multiply its value by the number of its happy users.
                            </div>
                        </div>
                    </div>
                    <div className="member fourth">
                        <a href="#">
                            <img src={img4} alt="team-logo" />
                        </a>
                        <div className="team-content">
                            <div className="mem-name">William Cukierski</div>
                            <div className="designation">Head of Competitions and Data Scientist</div>
                            <div className="description">
                            Will Cukierski has a bachelor’s degree in physics from Cornell University and a Ph.D. in biomedical engineering from Rutgers, where he studied applications of machine learning to cancer research. He has published on graph theory, dimensionality reduction, clustering, and image analysis.
                            </div>
                        </div>
                    </div>
                    <div className="member fifth">
                        <a href="#">
                            <img src={img5} alt="team-logo" />
                        </a>
                        <div className="team-content">
                            <div className="mem-name">Jerad Rose</div>
                            <div className="designation">
                            Developer
                            </div>
                            <div className="description">
                            Jerad is a full-stack software engineer with a focus on building highly interactive web applications. Before jumping on board the Kaggle train, he was an architect for Humana. He has a drive for building online communities, founding & running his own web community since 2002.
                            </div>
                        </div>
                    </div>
                    <div className="member sixth">
                        <a href="#">
                            <img src={img6} alt="team-logo" />
                        </a>
                        <div className="team-content">
                            <div className="mem-name">Meghan O&apos;Connell</div>
                            <div className="designation">Strategy and Operations</div>
                            <div className="description">Meghan graduated from Santa Clara University with a double bachelor&apos;s degree in Economics and Marketing. Prior to joining Kaggle, Meghan worked as the Manager of Professional Services for a boutique outsourcing firm, where she was responsible for scaling project management operations.</div>
                        </div>
                    </div>
                    <div className="member seventh">
                        <a href="#">
                            <img src={img7} alt="team-logo" />
                        </a>
                        <div className="team-content">
                            <div className="mem-name">Myles O&apos;Neill</div>
                            <div className="designation">Designer</div>
                            <div className="description">Myles is passionate about solving complex problems using elegant designs. He holds a bachelor&apos;s degree in computer science and genetics from the Australian National University. Myles likes to create things in his spare time. He recently Kickstarted and published his own board game.</div>
                        </div>
                    </div>
                    <div className="member eighth">
                        <a href="#">
                            <img src={img8} alt="team-logo" />
                        </a>
                        <div className="team-content">
                            <div className="mem-name">Meg Risdal</div>
                            <div className="designation">Product Manager</div>
                            <div className="description">Meg holds Master&apos;s degrees in linguistics from UCLA and NC State University where she studied laboratory phonology and sociophonetics. Prior to Kaggle, she was a data scientist in market research and product manager at Stack Overflow. She&apos;s passionate about open technical communities.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
