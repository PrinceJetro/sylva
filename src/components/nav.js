import React, { useState } from 'react';
import "../styles/nav.css"
import jetro from '../images/jetro.png'

function TabBar() {
  const [activeClass, setActiveClass] = useState('home');

  const handleClick = (e, target, dataWhere) => {
    e.preventDefault();
    e.stopPropagation();

    if (target.classList.contains('active') || target.classList.contains('follow')) {
      return;
    }

    setActiveClass(dataWhere);

    const ul = target.parentNode;
    ul.parentNode.className = `${ul.parentNode.className} ${dataWhere}-style`;

    const lis = ul.querySelectorAll('li');
    lis.forEach((item) => clearClass(item, 'active'));

    setClass(target, 'active');
  };

  function clearClass(node, className) {
    node.classList.remove(className);
  }

  function setClass(node, className) {
    node.classList.add(className);
  }
  function gohome() {
    const url = "/";
    window.location.href = url;
  }
    function Jetro() {
    const url = "http://adegbuyi-jephthah.vercel.app/";
    const newTab = window.open(url, "_blank");
    newTab.focus(); // Optional: Switch focus to the new tab
  }
  

  return (
    <div className="container stage">
      <div className="container">
        <div className={`tabbar tab-style1 ${activeClass}-style`}>
          <ul className="flex-center">
            <li
              className={`home ${activeClass === 'home' ? 'active' : ''}`}
              data-where="home"
              onClick={gohome}
            >
              <span className="material-icons-outlined">home</span>
            </li>
            <li
              className={`products ${activeClass === 'products' ? 'active' : ''}`}
              data-where="products"
              onClick={(e) => handleClick(e, e.currentTarget, 'products')}
            >
              <span className="material-icons-outlined">shopping_bag</span>
            </li>
            <li
              className={`services ${activeClass === 'services' ? 'active' : ''}`}
              data-where="services"
              onClick={(e) => handleClick(e, e.currentTarget, 'services')}
            >
             
              <span className="material-icons-outlined"><i className=' fa fa-file-movie-o'></i></span>
            </li>
            <li
              className={`about ${activeClass === 'about' ? 'active' : ''}`}
              data-where="about"
              onClick={(e) => handleClick(e, e.currentTarget, 'about')}
            >
              <span className="material-icons-outlined"><i className='fa fa-youtube-play'></i></span>            </li>
            <li
              className={`help ${activeClass === 'help' ? 'active' : ''}`}
              data-where="help"
              onClick={Jetro}
            >
              <span className="material-icons-outlined"><img src={jetro} alt='the dev' className='jetro'/></span>
    
            </li>
            <li className="follow"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TabBar;
