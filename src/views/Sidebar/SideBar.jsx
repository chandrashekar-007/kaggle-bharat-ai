import React, { useContext, useState } from 'react'
import { MdOutlineTableChart, MdEmojiEvents , MdOutlineSchool,MdCode, MdOutlineComment,MdMenu} from "react-icons/md";
import plusImg from '../../assets/plus.svg';
import icon1 from '../../assets/BharatAi.svg';
import icon2 from '../../assets/bell-icon.svg';
import { TbBinaryTree2  } from "react-icons/tb";
import { RiCompass3Line   } from "react-icons/ri";
import {NavLink} from 'react-router-dom';
import './SideBar.css';
import { AppContext } from '../context/context';

export default function SideBar ({children }) {
    const {isOpening,setIsOpening,ids ,setIds} = useContext(AppContext);
    
  const [isMenuClicked, setIsMenuClicked] = useState(false);
    console.log(isMenuClicked);
    const handleClick=()=>{
        setIsOpening(!isOpening);
        setIsMenuClicked(!isMenuClicked)
    }
    const handleClick2=(e)=>{
        setIds(e.target.id);
        console.log(ids)
    }


  return (
    <div className="contain">
        <div className={`sidebar ${isOpening===false || isMenuClicked===false? "is-collapsed":"is-expanded"} ${isMenuClicked === true ? "is-opened":"is-closed"}`}>
            <div className="top-sidebar-content">
                <div className="hover-effect">
                    <MdMenu className='menu-icon' onClick={handleClick}/>
                </div>
                <NavLink to="/">
                    <div className={`sidebar-title ${isOpening===false?"is-hidden":""}`}>
                        <img src={icon1} alt="logo" />
                    </div>
                </NavLink>
            </div>
            <div className={`middle-sidebar-content ${isOpening===false?"is-hidden":""}`}>
                <div className={`sidebar-plus ${isOpening===false?"is-hidden":""}`}>
                    <img src={plusImg} alt="plus-icon" />
                    <div className="sidebar-create">
                        Create
                    </div>
                </div>
            </div>
            <div className={`bottom-sidebar-content ${isOpening===true? "overflow-hidden":""}`}
             >
                <NavLink to={"/"} className={`bottom-content `} onClick={handleClick2} id={1} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Home</div>
                        <div id={1} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/datasets"} className={`bottom-content `} onClick={handleClick2} id={2} >
                    <div className="content">
                        <div className="icon">
                            <MdOutlineTableChart/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Datasets</div>
                        <div id={2} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/models"} className={`bottom-content `} onClick={handleClick2} id={3} >
                    <div className="content">
                        <div className="icon">
                            <TbBinaryTree2/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Models</div>
                        <div id={3} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/code"} className={`bottom-content `} onClick={handleClick2} id={4} >
                    <div className="content">
                        <div className="icon">
                            <MdCode/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Code</div>
                        <div id={4} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/competitions"} className={`bottom-content`} onClick={handleClick2} id={5} >
                    <div className="content">
                        <div className="icon">
                            <MdEmojiEvents/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Competitions</div>
                        <div id={5} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/learn"} className={`bottom-content `} onClick={handleClick2} id={6} >
                    <div className="content">
                        <div className="icon">
                            <MdOutlineSchool/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Learn</div>
                        <div id={6} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/discussions"} className={`bottom-content`} onClick={handleClick2} id={7} >
                    <div className="content">
                        <div className="icon">
                            <MdOutlineComment/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Discussions</div>
                        <div id={7} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/ranking"} className={`bottom-content `} onClick={handleClick2} id={8} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Rankings</div>
                        <div id={8} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/documentation"} className={`bottom-content `} onClick={handleClick2} id={9} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Documentation</div>
                        <div id={9} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/host"} className={`bottom-content `} onClick={handleClick2} id={10} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Host Competition</div>
                        <div id={10} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/blog"} className={`bottom-content `} onClick={handleClick2} id={11} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Blog</div>
                        <div id={11} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/team"} className={`bottom-content `} onClick={handleClick2} id={12} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Team</div>
                        <div id={12} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/contact"} className={`bottom-content `} onClick={handleClick2} id={13} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Contact</div>
                        <div id={13} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/terms"} className={`bottom-content `} onClick={handleClick2} id={14} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Terms-of-use</div>
                        <div id={14} className={`right-line `}/>
                    </div>
                </NavLink>
                <NavLink to={"/privacy"} className={`bottom-content `} onClick={handleClick2} id={15} >
                    <div className="content">
                        <div className="icon">
                            <RiCompass3Line/>
                        </div>
                        <div className={`name ${isOpening===false?"is-hidden":""}`}>Privacy</div>
                        <div id={15} className={`right-line `}/>
                    </div>
                </NavLink>

              
            </div>
        </div>
        <main>
            <section className="top-sec">
                <div className="top-head">
                    <div className="top-head-left">
                        <div className="menu-btn" onClick={handleClick}>
                            <MdMenu className='menu-icon'/>
                        </div>
                        <img src={icon1} alt="icon1" className='main-logo' />
                    </div>
                    <div className="top-head-right">
                        <img src={icon2} alt="icon2" />
                    </div>
                </div>
            </section>

            {children}    
        </main>
    </div>
  )
}
