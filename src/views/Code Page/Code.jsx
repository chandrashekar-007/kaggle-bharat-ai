import React, { useContext } from 'react';
import './Code.css';
import { MdOutlineInsights } from 'react-icons/md';
import { GoTag } from 'react-icons/go';
import img1 from '../../assets/code-img1.svg';
import { SearchBar } from '../SearchBar';
import { Buttons } from '../Buttons';
import { FilterSearchBar } from '../FilterSearchBar';
import { Cards } from '../Cards';
import { AppContext } from '../context/context';
import img2 from '../../assets/code-img2.jpeg';
import img3 from '../../assets/code-img3.png';
import img4 from '../../assets/code-img4.png';
import img5 from '../../assets/code-img5.png';
import img6 from '../../assets/exercisedataset-img1.png';
import img7 from '../../assets/exercisedataset-img2.jpg';
import img8 from '../../assets/exercisedataset-img4.jpeg';

export default function Code() {
  const { pos } = useContext(AppContext);
  const btnData = [{ btn1: 'New Notebook' }, { searchData: 'Search public notebooks' }];
  const data = [
    {
      id: 1,
      title: 'All notebooks'
    },
    {
      id: 2,
      title: 'Recently Viewed'
    },
    {
      id: 3,
      title: 'Python'
    },
    {
      id: 4,
      title: 'R'
    },
    {
      id: 5,
      title: 'Beginner'
    },
    {
      id: 6,
      title: 'NLP'
    },
    {
      id: 7,
      title: 'Random Forest'
    },
    {
      id: 8,
      title: 'GPU'
    },
    {
      id: 9,
      title: 'TPU'
    },
    {
      id: 10,
      title: 'Competition notebook'
    },
    {
      id: 11,
      title: 'Scheduled notebook'
    }
  ];
  const trendingCode = [
    {
      id: 1,
      rating: 18,
      image: img2,
      title: 'Crime',
      desc1: 'Updated 9 hours ago',
      use: 'Crime in Los Angeles Data from 2020 to Present'
    },
    {
      id: 2,
      rating: 18,
      image: img3,
      title: 'Crime',
      desc1: 'Updated 9 hours ago',
      use: 'Crime in Los Angeles Data from 2020 to Present'
    },
    {
      id: 3,
      rating: 12,
      image: img4,
      title: 'Crime',
      desc1: 'Updated 9 hours ago',
      use: 'Crime in Los Angeles Data from 2020 to Present'
    },
    {
      id: 4,
      rating: 18,
      image: img5,
      title: 'Crime',
      desc1: 'Updated 9 hours ago',
      use: 'Crime in Los Angeles Data from 2020 to Present'
    }
  ];
  const exerciseData = [
    {
      id: 1,
      rating: 8,
      image: img6,
      title: 'Factors influencing US House Prices',
      desc1: 'Jyotsna Gurjar',
      time: 'Updated a day ago',
      use: 'Usability 7.6',
      size: '8 kB',
      desc3: '1 File (CSV)'
    },
    {
      id: 2,
      rating: 18,
      image: img7,
      title: 'Online Retail Transaction Records',
      desc1: 'The Devastator',
      time: 'Updated 2 days ago',
      use: 'Usability 7.1',
      size: '9 MB',
      desc3: '1 File (CSV)'
    },
    {
      id: 3,
      rating: 12,
      image: img7,
      title: 'SXSW 2019 Schedule Dataset',
      desc1: 'The Devastator',
      time: 'Updated 4 days ago',
      use: 'Usability 10.0',
      size: '2 MB',
      desc3: '3 File (CSV,other)'
    },
    {
      id: 4,
      rating: 18,
      image: img8,
      title: 'Heart Failure Prediction',
      desc1: 'Bhavik Jikadara',
      time: 'Updated 4 days ago',
      use: 'Usability 8.8',
      size: '4 kB',
      desc3: '1 File (CSV)'
    }
  ];

  return (
    <>
      <section className={`code `}>
        <div className="container">
          <div className="code-section">
            <div className="top-section">
              <SearchBar />
              <div className="code-details">
                <div className="code-content">
                  <h1 className="main-title">Code</h1>
                  <p className="code-para">
                    Explore, analyze, and share quality data. Learn more about data types, creating, and collaborating.
                  </p>
                  <Buttons btnData={btnData[0]} />
                </div>
                <div className="code-image">
                  <img src={img1} alt="logo-1" width={220} height={170} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`outer-section ${pos ? 'fixed' : 'width'} `}>
          <div className="filter-section">
            <FilterSearchBar btnData={btnData[1]} />
            <div className="option-section">
              {data.map((data) => {
                return (
                  <div className="options" key={data.id}>
                    {data.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="trending-section">
            <div className="top-trending">
              <div className="trending-logo">
                <MdOutlineInsights className="timeline-icon" />
                <h1 className="trending-title">Trending</h1>
              </div>
              <div className="trending-side-data">See All</div>
            </div>
            <div className="trending-cards grid4">
              {trendingCode.map((data) => {
                return <Cards key={data.id} {...data} />;
              })}
            </div>
          </div>
          <div className="exercise-section">
            <div className="top-exercise">
              <div className="exercise-logo">
                <GoTag className="exercise-icon" />
                <h1 className="exercise-title">Linear Regression</h1>
              </div>
              <div className="exercise-side-data">See All</div>
            </div>
            <div className="exercise-cards grid4">
              {exerciseData.map((data) => {
                return <Cards key={data.id} {...data} />;
              })}
            </div>
          </div>
          <div className="finance-section">
            <div className="top-finance">
              <div className="finance-logo">
                <GoTag className="finance-icon" />
                <h1 className="finance-title">Global</h1>
              </div>
              <div className="finance-side-data">See All</div>
            </div>
            <div className="finance-cards grid4">
              {exerciseData.map((data) => {
                return <Cards key={data.id} {...data} />;
              })}
            </div>
          </div>
          <div className="finance-section">
            <div className="top-finance">
              <div className="finance-logo">
                <GoTag className="finance-icon" />
                <h1 className="finance-title">PyTorch</h1>
              </div>
              <div className="finance-side-data">See All</div>
            </div>
            <div className="finance-cards grid4">
              {exerciseData.map((data) => {
                return <Cards key={data.id} {...data} />;
              })}
            </div>
          </div>
          <div className="social-section">
            <div className="top-social">
              <div className="social-logo">
                <GoTag className="social-icon" />
                <h1 className="social-title">Competition Notebooks</h1>
              </div>
              <div className="social-side-data">See All</div>
            </div>
            <div className="social-cards grid4">
              {exerciseData.map((data) => {
                return <Cards key={data.id} {...data} />;
              })}
            </div>
          </div>
          <div className="explore-section">
            <div className="explore-title">Didn&apos;t find what you were looking for?</div>
            <div className="explore-button">
              <div className="button-content">Explore all public notebooks</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
