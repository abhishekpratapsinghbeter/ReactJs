import React from 'react';
import "./About.css"
import i from "../../img/me2.png"
const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                    src={i} 
                    alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                I am pursuing B.Tech from Information Tecnology Branch From United College of Engineering and Research,Naini,Prayagraj. College is affiliated with Dr. A.P.J Abdul Kalam Technical University.            </p>
            <p className="a-desc">I have scored 69% till 4<sup>th</sup> Semester. I am interested in Full Stack Development and have the knowledge of many frameworks such as Php with Codeignitor, MERN, Python Tkinter.   </p>
            <div className="a-award">
                <img src="" alt="" className="a-award-img" />
            </div>
        </div>
    </div>
  )
}

export default About