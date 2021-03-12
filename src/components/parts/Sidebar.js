import React from "react";
import ListItemLink from "./ListItemLink";
import { Link } from "react-router-dom";

function Sidebar() {
  const currentYear = new Date().getFullYear();

  return (
    <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
        <h1 id="colorlib-logo"><a href="index.html">Khoa<span>.</span></a></h1>
        <nav id="colorlib-main-menu" role="navigation">
            <ul>
                <ListItemLink
                    activeClassName="colorlib-active"
                    to='/'>Home</ListItemLink>
                <ListItemLink
                    activeClassName="colorlib-active"
                    to='/blogs1'>Blogs Repl</ListItemLink>
                <ListItemLink
                    activeClassName="colorlib-active"
                    to='/blogs_contentful'>Blogs Contentful</ListItemLink>
                <ListItemLink
                    activeClassName="colorlib-active"
                    to='/about'>About</ListItemLink>
                <ListItemLink
                    activeClassName="colorlib-active"
                    to='/contact'>Contact</ListItemLink>
            </ul>
        </nav>

        <div className="colorlib-footer">
            <p>
                Copyright &copy; {currentYear}&nbsp;
                 All rights reserved | This template is
                made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com"
                    target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
            <ul>
                <li><Link to="#"><i className="icon-facebook"></i></Link></li>
                <li><Link to="#"><i className="icon-twitter"></i></Link></li>
                <li><Link to="#"><i className="icon-instagram"></i></Link></li>
                <li><Link to="#"><i className="icon-linkedin"></i></Link></li>
            </ul>
        </div>
    </aside>
    );
}
    
export default Sidebar;