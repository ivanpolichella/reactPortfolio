import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {  FiExternalLink } from 'react-icons/fi';
import logo from '../images/My-logo4.ico'

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img src={logo} />
                <h1><Link smooth to="/#start" className="h1_links">Iván Andrés Polichella Brieba</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> ivan_pb_bsso@hotmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">Sobre Mi</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interés</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Educacion</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="https://ar.linkedin.com/in/ivan-polichella-brieba" rel="opener noreferrer" target="https://ar.linkedin.com/in/ivan-polichella-brieba" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/ivanpolichella" rel="opener noreferrer" target="https://github.com/ivanpolichella" class="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/ivanpolichella/" rel="opener noreferrer" target="https://www.instagram.com/ivanpolichella/" class="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:ivan_pb_bsso@hotmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/ivan.polichella.brieba/" rel="opener noreferrer" target="https://www.facebook.com/ivan.polichella.brieba/" class="fa fas fa-facebook fa-lg"></a></li>
                    </ul>
                </div>
              
            </div>
        )
    }
}
export default Sidebar