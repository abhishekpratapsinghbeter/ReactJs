import React from 'react'
import Me from "../../img/me1.png";
import "./intro.css"
import g from "../../img/github.png";
import l from "../../img/linkedin1.png";
const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name' >Abhishek Pratap Singh </h1>
          <div className='i-title'>
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          
          <p className="i-desc">
            I design and develop services of all sizes, specializing in creating stylish, modern websites, web services .
          </p>
          <div className='d1'>
          <a className='b1' href='https://github.com/abhishekpratapsinghbeter'> <img src={g} alt="" className="bk" /> </a>
          <a className='b1' href='https://www.linkedin.com/in/abhishek-pratap-singh-88523a207/'> <img src={l} alt="" className="bk" /> </a><br></br>
          <a href="Abhishek's Resume.pdf" download={`Abhishek's Resume.pdf`}><button id='resume'>Download Resume</button></a>
          </div>
        </div>
      </div>
      <div className='i-right'>
        <div className="i-bg"></div>
        <img src={Me} alt="" className='i-img'></img>
      </div>
    </div>
  )
}

export default Intro