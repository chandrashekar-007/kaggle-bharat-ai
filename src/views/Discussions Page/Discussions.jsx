import React from 'react';
import './Discussions.css';
import img1 from '../../assets/discussion-img1.svg';
import img2 from '../../assets/discussion-img2.svg';
import img3 from '../../assets/discussion-img3.svg';
import img4 from '../../assets/discussion-img4.svg';
import img5 from '../../assets/discussion-img5.svg';
import img6 from '../../assets/discussion-img6.svg';
import img7 from '../../assets/discussion-img7.svg';
import img8 from '../../assets/h-threedots.svg';
import forumImg from '../../assets/discussion-forum.svg';
import groupImg from '../../assets/discussion-group.svg';
import { SearchBar } from '../SearchBar';
import { FilterSearchBar } from '../FilterSearchBar';
import { GoTriangleUp } from 'react-icons/go';
import { NavLink, Link } from 'react-router-dom';

export default function Discussions() {
  const btnData = [{ searchData: 'Search datasets' }];
  const data = [
    {
      id: 1,
      title: 'Your Activity'
    },
    {
      id: 2,
      title: 'Bookmarks'
    },
    {
      id: 3,
      title: 'Beginners'
    },
    {
      id: 4,
      title: 'Data Visualization'
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
      title: 'Neural Networks'
    },
    {
      id: 8,
      title: 'More Filters'
    }
  ];
  const forumData = [
    {
      id: 1,
      image: img2,
      title: 'General',
      time: '2 hours',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      user3: 'Charan Reddy007',
      subtitle: 'Announcements, resources, and interesting discussions'
    },
    {
      id: 2,
      image: img3,
      title: 'Getting Started',
      time: '2 hours',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      subtitle: 'The first stop for new Kagglers'
    },
    {
      id: 3,
      image: img4,
      title: 'Product Feedback',
      time: '12 hours',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      subtitle: 'Tell us what you love, hate, and wish for',
      recent: 'Recent Topics by User1,User2,User3'
    },
    {
      id: 4,
      image: img5,
      title: 'Questions and Answers',
      time: 'an hour',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      subtitle: 'Technical advice from other data scientists',
      recent: 'Recent Topics by User1,User2,User3'
    },
    {
      id: 5,
      image: img6,
      title: 'Competition Hosting',
      time: '7 days',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      subtitle: 'Advice and support on running your own competitions'
    },
    {
      id: 6,
      image: img7,
      title: 'Accomplishments',
      time: '2 hours',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      subtitle: 'Celebrate success , share achievements!'
    }
  ];
  const discussData = [
    {
      id: 1,
      title: 'World Record? 5 Days Kaggle Expert Record!!! ',
      time: '2 hours',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      rating: 37,
      comments: 49
    },
    {
      id: 2,
      title: 'Top 1000 Notebook in just 7 Days',
      time: '2 hours',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      rating: 34,
      comments: 78
    },
    {
      id: 3,
      title: 'I have become an expert in Kaggle Notebooks',
      time: '2 hours',
      user1: ' Mrityunjay Pathak',
      user2: 'Akshat Gupta',
      rating: 47,
      comments: 59
    }
  ];

  return (
    <>
      <section className={`discussion `}>
        <div className="container">
          <div className="discussion-section">
            <div className="top-section">
              <SearchBar />
              <div className="discussion-details">
                <div className="discussion-content">
                  <h1 className="main-title">Discussions</h1>
                  <p className="discussion-para">
                    Discuss the Kaggle platform & machine learning topics - this includes sharing feedback, asking questions, and more.
                  </p>
                  <Link to="#" className="btn">
                    <div className="button second">
                      <div className="button-content"> Your Discussions</div>
                    </div>
                  </Link>
                </div>
                <div className="datasets-image">
                  <img src={img1} alt="logo-1" width={220} height={170} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="trending-section">
            <div className="top-trending top-learning">
              <div className="trending-logo">
                <img src={forumImg} alt="logo" className="timeline-icon" />
                <h1 className="trending-title">Forums</h1>
              </div>
            </div>
          </div>
          {forumData.map((data) => {
            return (
              <NavLink to="#" key={data.id}>
                <ForumList {...data} />
              </NavLink>
            );
          })}
        </div>
        <div className="container">
          <div className="trending-section second">
            <div className="top-trending top-learning">
              <div className="trending-logo ">
                <div className="discuss-logo">
                  <img src={groupImg} alt="discussion" />
                </div>
                <h1 className="trending-title">Discussions across BharatAi</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-section">
          <div className="filter-section">
            <FilterSearchBar btnData={btnData[0]} />
            <div className="option-section">
              {data.map((data) => {
                return (
                  <NavLink to="#" key={data.id}>
                    <div className="options">{data.title}</div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          {discussData.map((data) => {
            return (
              <NavLink to="#" key={data.id}>
                <DiscussionList {...data} />
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

const ForumList = (data) => {
  const { image, title, subtitle, time, user1, user2, user3 } = data;
  return (
    <div className="discussion-list">
      <div className="listview">
        <img src={image} alt="logo" />
        <div className="discussion-main">
          <div className="discussion-title">{title}</div>
          <div className="discussion-desc">{subtitle}</div>
          <div className="discussion-time">
            Last{' '}
            <Link to="#" className="lined">
              post
            </Link>{' '}
            {time} ago by {user1}
          </div>
        </div>
      </div>
      <div className="rightview">
        <div className="user-images">
          <div className="user1" />
          <div className="user2" />
          <div className="user3" />
        </div>
        <div className="user-topics">
          Recent Topics by {user1},{user2},{user3}
        </div>
      </div>
    </div>
  );
};
const DiscussionList = (data) => {
  const { title, time, user1, rating, comments } = data;
  return (
    <div className="discussion-list">
      <div className="listview">
        <div className="user" />
        <div className="discussion-main list">
          <div className="discussion-title">{title}</div>
          <div className="discussion-desc">
            <div className="dis-desc-1">
              <Link to="#" className="lined">
                {user1}
              </Link>{' '}
              {' . '} in{' '}
              <Link to="#" className="lined">
                Accomplishments
              </Link>
            </div>
            <div className="dis-desc-2">
              {' . '}Last{' '}
              <Link to="#" className="lined">
                comment
              </Link>{' '}
              {time} ago by {user1}
            </div>
          </div>
        </div>
      </div>
      <div className="right-view">
        <div className="rating">
          <div className="rating-icon" title="upvote">
            <GoTriangleUp className="inc-icon" />
          </div>
          <div className="rating-number">{rating}</div>
        </div>
        <div className="user-content">
          <div className="comments">
            {comments} comments {' . '}
          </div>
          <div className="dots">
            <Link to="#">
              <img src={img8} alt="logo8" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
