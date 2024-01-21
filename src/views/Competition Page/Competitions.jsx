import React, { useContext } from 'react'
import './Competitions.css';
import { MdOutlineOutlinedFlag,MdOutlineSchedule,MdOutlinePeopleAlt,MdHistoryToggleOff } from "react-icons/md";
import { SearchBar } from '../SearchBar'
import { Buttons } from '../Buttons'
import { FilterSearchBar } from '../FilterSearchBar';
import { Cards } from '../Cards';
import { AppContext } from '../context/context';
import img1 from '../../assets/competition-img1.svg'
import img2 from '../../assets/competition-img2.png'
import img3 from '../../assets/competition-img3.png'
import img4 from '../../assets/competition-img4.png'
import img5 from '../../assets/competition-img5.png'
import img6 from '../../assets/competition-img6.png'
import img7 from '../../assets/competition-img7.png'
import img8 from '../../assets/competition-img8.png'

export default function Competitions() {
    const {pos} = useContext(AppContext);
    const btnData=[
        {btn1:"Host a competition"},
        {searchData:"Search competitions"}
    ]
    const data = [
        {
            id: 1,
            title: "All competitions"
        },
        {
            id: 2,
            title: "Featured"
        },
        {
            id: 3,
            title: "Getting Started"
        },
        {
            id: 4,
            title: "Research"
        },
        {
            id: 5,
            title: "Community"
        },
        {
            id: 6,
            title: "Playground"
        },
        {
            id: 7,
            title: "Simulation"
        },
        {
            id: 8,
            title: "Analytics"
        }
    ];
    const competeData = [
        {
            id: 1,
            image: img2,
            title: "Titanic - Machine Learning from Disaster",
            desc1: "Start here! Predict survival on the Titanic and get familiar with ML basics",
            use: 'Getting Started',
            desc3: '16247 Teams',
            rating_title:"Knowledge",
            time:"Ongoing"
        },
        {
            id: 2,
            image: img3,
            title: "House Prices - Advanced Regression Techniques",
            desc1: "Predict sales prices and practice feature engineering, RFs, and gradient boosting",
            use: 'Getting Started',
            desc3: '4697 Teams',
            rating_title:"Knowledge",
            time:"Ongoing"
        },
        {
            id: 3,
            image: img4,
            title: "Spaceship Titanic",
            desc1: "Predict which passengers are transported to an alternate dimension",
            use: 'Getting Started',
            desc3: '2750 Teams',
            rating_title:"Knowledge",
            time:"Ongoing"
        },
      
    ]
    const activeData = [
        {
            id: 1,
            image: img5,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 2,
            image: img6,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 3,
            image: img7,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 4,
            image: img8,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 5,
            image: img5,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 6,
            image: img6,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 7,
            image: img7,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 8,
            image: img8,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 9,
            image: img2,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 10,
            image: img3,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 11,
            image: img4,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 12,
            image: img5,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        }
    ]
    const recentData = [
        {
            id: 1,
            image: img5,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 2,
            image: img6,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 3,
            image: img7,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        },
        {
            id: 4,
            image: img8,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title:"$110,000",
            time:"a month ago"
        }
    ]

    return (
        <>
            <section className={`competition `}>
                <div className="container">
                    <div className="competition-section">
                        <div className="top-section">
                            <SearchBar />
                            <div className="competition-details">
                                <div className="competition-content">
                                    <h1 className="main-title">Competitions</h1>
                                    <p className="competition-para">Grow your data science skills by competing in our exciting competitions. Find help in the <a href="#" className="lined">documentation</a> or learn about <a href="#" className="lined">Community Competitions</a>.</p>
                                    <Buttons btnData={btnData[0]}/>
                                </div>
                                <div className="competitions-image">
                                    <img src={img1} alt="logo-1" width={180} height={150} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={`outer-section ${pos ? "fixed":"width"} `}>
                        <div className="filter-section">
                            <FilterSearchBar btnData={btnData[1]}/>
                            <div className="option-section">
                                {
                                    data.map((data) => {
                                        return (
                                            <div className="options" key={data.id}>{data.title}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                <div className='container'>
                    <div className="trending-section">
                        <div className="top-trending">
                            <div className="trending-logo">
                                <MdOutlineOutlinedFlag className="flag-icon" />
                                <h1 className="trending-title">Get Started</h1>
                            </div>
                            <div className="trending-side-data">See All</div>
                        </div>
                        <div className="trending-cards grid4">
                            <div className="text-card">
                                <h1 className="text-card-title">
                                    New to Kaggle?
                                </h1>
                                <p className="text-card-para">
                                    These competitons are perfect for newcomers. 
                                </p>
                            </div>
                            {
                                competeData.map((data) => {
                                    return (
                                        <Cards key={data.id}{...data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="exercise-section">
                        <div className="top-exercise">
                            <div className="exercise-logo">
                                <MdOutlineSchedule className="clock-icon" />
                                <h1 className="exercise-title">Active Competitions</h1>
                            </div>
                            <div className="exercise-side-data">See All</div>
                        </div>
                        <div className="exercise-cards grid4">
                            {
                                activeData.map((data) => {
                                    return (
                                        <Cards key={data.id}{...data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="finance-section">
                        <div className="top-finance">
                            <div className="finance-logo">
                                <MdHistoryToggleOff className="finance-icon" />
                                <h1 className="finance-title">Recently Completed</h1>
                            </div>
                            <div className="finance-side-data">See All</div>
                        </div>
                        <div className="finance-cards grid4">
                            {
                                recentData.map((data) => {
                                    return (
                                        <Cards key={data.id}{...data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="textdata-section">
                        <div className="top-textdata">
                            <div className="textdata-logo">
                                <MdOutlinePeopleAlt className="textdata-icon" />
                                <h1 className="textdata-title">Community Competitions</h1>
                            </div>
                            <div className="textdata-side-data">See All</div>
                        </div>
                        <div className="textdata-cards grid4">
                        <div className="text-card">
                                <h1 className="text-card-title">
                                    Make Learning Fun
                                </h1>
                                <p className="text-card-para">
                                Use our no-cost, self-service platform to create competitions for your community.<a href="#" className="lined"> Learn more</a>
                                </p>
                                <p className="text-card-para">
                                Ready to host? <a href="#" className="lined"> Create a competition or view our library of cloneable competitions.</a> 
                                </p>
                            </div>
                            {
                                activeData.map((data) => {
                                    return (
                                        <Cards key={data.id}{...data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="explore-section">
                        <div className="explore-title">Didn&apos;t find what you were looking for?</div>
                        <div className="explore-button">
                            <div className="button-content">Explore all competitions</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
