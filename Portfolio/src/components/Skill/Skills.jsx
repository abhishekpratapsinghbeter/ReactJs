import React from 'react'
import h from "../../img/html.png";
import c from "../../img/css.png";
import j from "../../img/js.svg";
import m from "../../img/mui.png";
import p from "../../img/phpmyadmin.png";
import r from "../../img/react.png";
import s from "../../img/scss.svg";
import sq from "../../img/sql.svg";
import k from "../../img/node.png";
import q from "../../img/codeignitor.png"
import o from "../../img/c.png";
import e from "../../img/mongodb.png";
import i from "../../img/python.jfif";
import "./Skills.css"
const Skills = () => {
  return (
    <div className="s">     
        <div className="s-title">
            <h1 className="s-hd">My Skills</h1>
        </div>
        <br/>
        <div className="skil">
          <div className="s-logo">
            <abbr title='Hypertext Markup Language(HTML)'><img src={h} alt="HTML" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='Cascading Style Sheet(CSS)'><img src={c} alt="CSS" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='Javascript'><img src={j} alt="JAVASCRIPT" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='Python'><img src={i} alt="Python" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='C'><img src={o} alt="C" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='Codeignitor'><img src={q} alt="Codeigitor" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='Material UI'><img src={m} alt="MATERIALUI" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='React js'><img src={r} alt="REACT" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='Node js'><img src={k} alt="Node" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='SCSS'><img src={s} alt="SCSS" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='PHPMYADMIN'><img src={p} alt="PHPMYADMIN" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='Mysql'><img src={sq} alt="SQL" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <abbr title='MongoDB'><img src={e} alt="MongoDB" className="s-outer" /></abbr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
    </div>
  )
}

export default Skills