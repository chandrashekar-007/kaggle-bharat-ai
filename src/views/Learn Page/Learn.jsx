import React, { useContext } from 'react'
import { AppContext } from '../context/context';
import './Learn.css';
import {  MdOutlineViewList,MdOutlineCalendarViewMonth } from "react-icons/md";
import img1 from '../../assets/learn-img1.svg'
import img2 from '../../assets/learn-img2.svg'
import img3 from '../../assets/learn-img3.svg'
import img4 from '../../assets/course-img1.svg';
import img5 from '../../assets/course-img2.svg';
import img6 from '../../assets/course-img3.svg';
import img7 from '../../assets/course-img4.svg';
import img8 from '../../assets/course-img5.svg';
import img9 from '../../assets/course-img6.svg';
import img10 from '../../assets/course-img7.svg';
import img11 from '../../assets/course-img8.svg';
import img12 from '../../assets/course-img9.svg';
import img13 from '../../assets/course-img10.svg';
import img14 from '../../assets/course-img11.svg';
import img15 from '../../assets/course-img12.svg';
import img16 from '../../assets/learn-guide-img1.svg';
import img17 from '../../assets/learn-guide-img2.svg';
import img18 from '../../assets/learn-guide-img3.svg';
import img19 from '../../assets/learn-guide-img4.svg';
import img20 from '../../assets/learn-guide-img5.svg';
import img21 from '../../assets/learn-guide-img6.svg';
import { SearchBar } from '../SearchBar'
import { ListView } from '../ListView';
import { GridView } from '../GridView';
import { GridView2 } from '../Gridview2';

export default function Learn () {
    const {gridView,setGridView,setGridView2,gridView2} = useContext(AppContext);

    const learnData = [
        {
            id: 1,
            image: img4,
            title: "Intro to Programming",
            time: "5 hours",
            project:"! guided project",
            prerequisite:"No prerequisites",
            subtitle: "Get started with Python, if you have no coding experience.",
        },
        {
            id: 2,
            image: img5,
            title: "Python",
            time: "5 hours",
            link:"Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 3,
            image: img6,
            title: "Intro to Machine Learning",
            time: "5 hours",
            link:"Python",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 4,
            image: img7,
            title: "Pandas",
            time: "5 hours",
            link:"Python",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 5,
            image: img8,
            title: "Intermediate Machine Learning",
            time: "4 hours",
            link:"Intro to Machine Learning",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 6,
            image: img9,
            title: "Data Visualization",
            time: "5 hours",
            prerequisite:"No prerequisite",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 7,
            image: img10,
            title: "Featured Engineering",
            time: "4 hours",
            link:"Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 8,
            image: img11,
            title: "Intro to SQL",
            time: "3 hours",
            link:"Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 9,
            image: img12,
            title: "Advanced SQL",
            time: "5 hours",
            link:"Intro to SQL",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 10,
            image: img13,
            title: "Intro to Deep Learning",
            time: "5 hours",
            link:"Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 11,
            image: img14,
            title: "Computer Vision",
            time: "5 hours",
            link:"Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 12,
            image: img15,
            title: "Time Series",
            time: "5 hours",
            link:"Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        }   
     
    ]
    const courseData=[
        {
            id: 1,
            image: img16,
            title: "JAX Guide",
            subtitle: "JAX is a library for high-performance machine learning."
        },
        {
            id: 2,
            image: img17,
            title: "TensorFlow Guide",
            subtitle: "TensorFlow is a library for developing and training machine learning models."
        },
        {
            id: 3,
            image: img18,
            title: "Transfer Learning for CV Guide",
            subtitle: "Transfer Learning is the practice of using a pre-trained model towards a new task."
        },
        {
            id: 4,
            image: img19,
            title: "Kaggle Competitions Guide",
            subtitle: "Kaggle Competitions are machine learning challenges, often with large prizes."
        },
        {
            id: 5,
            image: img20,
            title: "Natural Language Processing Guide",
            subtitle: "NLP is a subfield of ML concerned with understanding text."
        },
        {
            id: 6,
            image: img21,
            title: "R Guide",
            subtitle: "R is a programming language for statistical analysis and visualization."
        },
    ]

  return (
     <>
            <section className={`learn `}>
                <div className="container">
                    <div className="learn-section">
                        <div className="top-section">
                            <SearchBar />
                            <div className="learn-details">
                                <div className="learn-content">
                                    <h1 className="main-title">Learn</h1>
                                    <p className="learn-para">Gain the skills you need to do independent data science projects.</p>
                                </div>
                                <div className="datasets-image">
                                    <img src={img1} alt="logo-1"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="trending-section">
                        <div className="top-trending top-learning">
                            <div className="trending-logo">
                                <img src={img3} alt="newsstand" className="timeline-icon" />
                                <h1 className="trending-title">Courses</h1>
                            </div>
                            <div className="learn-view">
                                <div className="learn-side-data learn-view" role="button" onKeyDown={()=>setGridView(false)} onClick={()=>setGridView(false)} tabIndex={0} >
                                    < MdOutlineViewList className='md-view'  title='list view'/>
                                </div>
                                <div className="learn-side-data learn-view" role="button" onKeyDown={()=>setGridView(true)} onClick={()=>setGridView(true)} tabIndex={0}>
                                    <MdOutlineCalendarViewMonth className='md-view'  title='grid view'/>
                                </div>
                            </div>
                        </div>
                        <div className="learn-desc">
                        <p className="learn-para">We pare down complex topics to their key practical components, so you gain usable skills in a few hours (instead of weeks or months). The courses are provided at no cost to you, and you can now earn certificates. <a href="#" className="lined"> Learn more</a>.</p>
                        </div>
                        {
                            gridView?
                           (<>
                             <div className="learn-grid4">
                            {
                                learnData.map((data)=>{
                                    return(
                                        <GridView key={data.id} {...data}/>
    
                                    )
                                })
                            }
                            </div>
                            </>):
                            (
                                learnData.map((data)=>{
                                    return(<ListView key={data.id} {...data}/>)
                                })
                            )
                        }
                        
                    </div>
                    <div className="trending-section second">
                        <div className="top-trending top-learning">
                            <div className="trending-logo">
                                <img src={img2} alt="newsstand" className="timeline-icon" />
                                <h1 className="trending-title">Guide</h1>
                            </div>
                            <div className="learn-view">
                                <div className="learn-side-data learn-view"  onKeyDown={()=>setGridView2(false)} onClick={()=>setGridView2(false)}  tabIndex={0} role="button">
                                    < MdOutlineViewList className='md-view'  title='list view'/>
                                </div>
                                <div className="learn-side-data learn-view"  onKeyDown={()=>setGridView2(true)} onClick={()=>setGridView2(true)} tabIndex={0} role="button">
                                    <MdOutlineCalendarViewMonth className='md-view' title='grid view'/>
                                </div>
                            </div>
                        </div>
                        <div className="learn-desc">
                        <p className="learn-para">Explore these curated collections of high-quality learning resources authored by the Kaggle community. <a href="#" className="lined"> Learn more</a>.</p>
                        </div>
                        {
                            gridView2?
                           (<>
                             <div className="learn-grid4">
                            {
                                courseData.map((data)=>{
                                    return(
                                        <GridView2 key={data.id} {...data}/>
    
                                    )
                                })
                            }
                            </div>
                            </>):
                            (
                                courseData.map((data)=>{
                                    return(<ListView key={data.id} {...data}/>)
                                })
                            )
                        }
                        
                    </div>
                </div>
            </section>
        </>
  )
}