import React, { useContext } from 'react';
import './Models.css';
import { MdOutlineInsights } from 'react-icons/md';
import img1 from '../../assets/model-img1.svg';
import img2 from '../../assets/cardimg-audio.svg';
import img3 from '../../assets/cardimg-pose.svg';
import img4 from '../../assets/cardimg-resolution.svg';
import img5 from '../../assets/cardimg-processing.svg';
import img6 from '../../assets/cardimg-detection.svg';
import img7 from '../../assets/cardimg-other.svg';
import img8 from '../../assets/cardimg-generation.svg';
import { SearchBar } from '../SearchBar';
import { ImagelessCard } from '../ImagelessCard';
import { AnimatedCard } from '../AnimatedCard';
import { AppContext } from '../context/context';

export default function Models() {
  const { pos } = useContext(AppContext);
  const searchModels = 'Search Models';
  const cardTitle = [
    { title: 'Audio Synthesis' },
    { title: 'Pose Detection' },
    { title: 'Image Super Resolution' },
    { title: 'Text Pre-Processing' },
    { title: 'Object Detection' },
    { title: 'Other' },
    { title: 'Text Generation' }
  ];
  const data = [
    {
      id: 1,
      title: 'All models'
    },
    {
      id: 2,
      title: 'Computer Science'
    },
    {
      id: 3,
      title: 'Education'
    },
    {
      id: 4,
      title: 'Classification'
    },
    {
      id: 5,
      title: 'Computer Vision'
    },
    {
      id: 6,
      title: 'NLP'
    },
    {
      id: 7,
      title: 'Data Visualization'
    },
    {
      id: 8,
      title: 'Pre-Trained Model'
    }
  ];

  return (
    <>
      <section className={`model `}>
        <div className="container">
          <div className="model-section">
            <div className="top-section">
              <SearchBar />
              <div className="model-details">
                <div className="model-content">
                  <h1 className="main-title">Models</h1>
                  <p className="model-para">
                    Search and discover hundreds of trained, ready-to-deploy machine learning models in one place.
                  </p>
                </div>
                <div className="models-image">
                  <img src={img1} alt="models" width={220} height={170} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`outer-section ${pos ? 'full-width' : ''} `}>
          {/* <div className={`outer-section ${pos ? "is-fixed":"full-width"} `}> */}
          <div className="filter-section">
            <SearchBar searchModels={searchModels} />
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
          <div className="trending-models">
            <div className="top-trending">
              <div className="trending-logo">
                <MdOutlineInsights className="timeline-icon" />
                <h1 className="trending-title">Trending Models</h1>
              </div>
              <div className="trending-side-data">See All</div>
            </div>
            <div className="trending-cards grid4">
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
            </div>
          </div>
          <div className="trending-models">
            <div className="trending-cards grid4">
              <AnimatedCard cardTitle={cardTitle[0].title} image={img2} />
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
            </div>
          </div>
          <div className="trending-models">
            <div className="trending-cards grid4">
              <AnimatedCard cardTitle={cardTitle[1].title} image={img3} />
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
            </div>
          </div>
          <div className="trending-models">
            <div className="trending-cards grid4">
              <AnimatedCard cardTitle={cardTitle[2].title} image={img4} />
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
            </div>
          </div>
          <div className="trending-models">
            <div className="trending-cards grid4">
              <AnimatedCard cardTitle={cardTitle[3].title} image={img5} />
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
            </div>
          </div>
          <div className="trending-models">
            <div className="trending-cards grid4">
              <AnimatedCard cardTitle={cardTitle[4].title} image={img6} />
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
            </div>
          </div>
          <div className="trending-models">
            <div className="trending-cards grid4">
              <AnimatedCard cardTitle={cardTitle[5].title} image={img7} />
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
            </div>
          </div>
          <div className="trending-models">
            <div className="trending-cards grid4">
              <AnimatedCard cardTitle={cardTitle[6].title} image={img8} />
              <ImagelessCard />
              <ImagelessCard />
              <ImagelessCard />
            </div>
          </div>
          <div className="model-explore-section">
            <div className="explore-title">Didn&apos;t find what you were looking for?</div>
            <p className="explore-para">Explore Kaggle-curated Models from organizations like Google Research, Deepmind, and more</p>
            <div className="explore-button">
              <div className="button-content">View all organization models</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
