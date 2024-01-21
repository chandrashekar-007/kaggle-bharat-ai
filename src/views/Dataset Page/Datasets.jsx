import React, { useContext } from 'react'
import './Datasets.css';
import { MdOutlineInsights } from "react-icons/md";
import { GoTag } from "react-icons/go";
import img1 from '../../assets/dataset-img1.svg'
import img2 from '../../assets/dataset-img2.jpg'
import img3 from '../../assets/dataset-img3.png'
import img4 from '../../assets/dataset-img4.png'
import img5 from '../../assets/dataset-img5.jpg'
import img6 from '../../assets/exercisedataset-img1.png'
import img7 from '../../assets/exercisedataset-img2.jpg'
import img8 from '../../assets/exercisedataset-img4.jpeg'

import { SearchBar } from '../SearchBar'
import { Buttons } from '../Buttons'
import { FilterSearchBar } from '../FilterSearchBar';
import { Cards } from '../Cards';
import { AppContext } from '../context/context';

export default function Datasets () {
    const {pos} = useContext(AppContext);
    const data = [
        {
            id: 1,
            title: "All datasets"
        },
        {
            id: 2,
            title: "Computer Science"
        },
        {
            id: 3,
            title: "Education"
        },
        {
            id: 4,
            title: "Classification"
        },
        {
            id: 5,
            title: "Computer Vision"
        },
        {
            id: 6,
            title: "NLP"
        },
        {
            id: 7,
            title: "Data Visualization"
        },
        {
            id: 8,
            title: "Pre-Trained Model"
        }
    ];
    const trendingData = [
        {
            id: 1, rating: 8,
            image: img2,
            title: "Factors influencing US House Prices",
            desc1: "Jyotsna Gurjar",
            time: 'Updated a day ago',
            use: 'Usability 7.6',
            size: '8 kB',
            desc3: '1 File (CSV)'
        },
        {
            id: 2, rating: 18,
            image: img3,
            title: "Online Retail Transaction Records",
            desc1: "The Devastator",
            time: 'Updated 2 days ago',
            use: 'Usability 7.1',
            size: '9 MB',
            desc3: '1 File (CSV)'
        },
        {
            id: 3, rating: 12,
            image: img4 ,
            title: "SXSW 2019 Schedule Dataset",
            desc1: "The Devastator",
            time: 'Updated 4 days ago',
            use: 'Usability 10.0',
            size: '2 MB',
            desc3: '3 File (CSV,other)'
        },
        {
            id: 4, rating: 18,
            image: img5 ,
            title: "Heart Failure Prediction",
            desc1: "Bhavik Jikadara",
            time: 'Updated 4 days ago',
            use: 'Usability 8.8',
            size: '4 kB',
            desc3: '1 File (CSV)'
        },
    ]
    const exerciseData = [
        {
            id: 1, rating: 8,
            image: img6,
            title: "Factors influencing US House Prices",
            desc1: "Jyotsna Gurjar",
            time: 'Updated a day ago',
            use: 'Usability 7.6',
            size: '8 kB',
            desc3: '1 File (CSV)'
        },
        {
            id: 2, rating: 18,
            image: img7,
            title: "Online Retail Transaction Records",
            desc1: "The Devastator",
            time: 'Updated 2 days ago',
            use: 'Usability 7.1',
            size: '9 MB',
            desc3: '1 File (CSV)'
        },
        {
            id: 3, rating: 12,
            image: img4,
            title: "SXSW 2019 Schedule Dataset",
            desc1: "The Devastator",
            time: 'Updated 4 days ago',
            use: 'Usability 10.0',
            size: '2 MB',
            desc3: '3 File (CSV,other)'
        },
        {
            id: 4, rating: 18,
            image: img8,
            title: "Heart Failure Prediction",
            desc1: "Bhavik Jikadara",
            time: 'Updated 4 days ago',
            use: 'Usability 8.8',
            size: '4 kB',
            desc3: '1 File (CSV)'
        },
    ]

    return (
        <>
            <section className={`dataset `}>
                <div className="container">
                    <div className="dataset-section">
                        <div className="top-section">
                            <SearchBar />
                            <div className="dataset-details">
                                <div className="dataset-content">
                                    <h1 className="main-title">Datasets</h1>
                                    <p className="dataset-para">Explore, analyze, and share quality data. Learn more about data types, creating, and collaborating.</p>
                                    <Buttons />
                                </div>
                                <div className="datasets-image">
                                    <img src={img1} alt="logo-1" width={220} height={170} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={`outer-section ${pos ? "fixed":"width"} `}>
                        <div className="filter-section">
                            <FilterSearchBar />
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
                                <MdOutlineInsights className="timeline-icon" />
                                <h1 className="trending-title">Trending Datasets</h1>
                            </div>
                            <div className="trending-side-data">See All</div>
                        </div>
                        <div className="trending-cards grid4">
                            {
                                trendingData.map((data) => {
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
                                <GoTag className="exercise-icon" />
                                <h1 className="exercise-title">Exercise</h1>
                            </div>
                            <div className="exercise-side-data">See All</div>
                        </div>
                        <div className="exercise-cards grid4">
                            {
                                exerciseData.map((data) => {
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
                                <GoTag className="finance-icon" />
                                <h1 className="finance-title">Finance</h1>
                            </div>
                            <div className="finance-side-data">See All</div>
                        </div>
                        <div className="finance-cards grid4">
                            {
                                exerciseData.map((data) => {
                                    return (
                                        <Cards key={data.id}{...data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="programmming-section">
                        <div className="top-programmming">
                            <div className="programmming-logo">
                                <GoTag className="programmming-icon" />
                                <h1 className="programmming-title">Programming</h1>
                            </div>
                            <div className="programmming-side-data">See All</div>
                        </div>
                        <div className="programmming-cards grid4">
                            {
                                exerciseData.map((data) => {
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
                                <MdOutlineInsights className="textdata-icon" />
                                <h1 className="textdata-title">Text Data</h1>
                            </div>
                            <div className="textdata-side-data">See All</div>
                        </div>
                        <div className="textdata-cards grid4">
                            {
                                exerciseData.map((data) => {
                                    return (
                                        <Cards key={data.id}{...data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="social-section">
                        <div className="top-social">
                            <div className="social-logo">
                                <GoTag className="social-icon" />
                                <h1 className="social-title">Social Issues And Advocacy</h1>
                            </div>
                            <div className="social-side-data">See All</div>
                        </div>
                        <div className="social-cards grid4">
                            {
                                exerciseData.map((data) => {
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
                            <div className="button-content">Explore all public datasets</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="ai-image">
        <img src={aiLogo} alt="BharatAi" width="100" />
      </div>  */}
        </>
        
    )
}
