import {NavLink}  from 'react-router-dom';



function Layout() {
  return (
    <div>
        <div className="header"> 
        <div className="logo">Aimee Keeble</div>
        <nav className="navs">
            <div className="homeLink"><NavLink to="/">Home</NavLink></div>
            <div className="aboutLink"><NavLink to="/about">About</NavLink></div>
            <div className="portfolioLink"><NavLink to="/portfolio">Portfolio</NavLink></div>
        </nav></div>

       
     
    </div>
  )
}

export default Layout;