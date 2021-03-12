import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Sidebar from "./parts/Sidebar";
import Footer from "./parts/Footer";
import PathNotFound from "./pages/PathNotFound";
import CustomRoute from "./parts/CustomRoute";
import PostDetail from "./parts/PostDetail";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogsWithContentful from "./pages/BlogsWithContentful";
import Blogs1 from "./pages/Blogs1";
import { Link } from "react-router-dom";
import { scrollToElement, burgerMenu, mobileMenuOutsideClick } from '../helpers/ui';

function App() {
    useEffect(function () {
        setTimeout(function() { scrollToElement(); }, 500);
        burgerMenu();
        mobileMenuOutsideClick();
    }, []);

    return (
        <div id="colorlib-page">
            <Link to="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></Link>
            <Sidebar />

            <div id="colorlib-main">
                <Switch>
                    <Route exact path="/">
                        <CustomRoute component={Home} meta={{ title: 'Welcome to my blog' }} />
                    </Route>
                    <Route exact path="/about">
                        <CustomRoute component={About} meta={{ title: 'About me' }} />
                    </Route>
                    <Route exact path="/contact">
                        <CustomRoute component={Contact} meta={{ title: 'Contact me' }}  />
                    </Route>
                    <Route exact path="/blogs1">
                        <CustomRoute component={Blogs1} meta={{ title: 'Blog with Repl' }}  />
                    </Route>
                    <Route exact path="/blogs_contentful">
                        <CustomRoute component={BlogsWithContentful} meta={{ title: 'Blog with Contentful' }} />
                    </Route>
                    <Route exact path="/:type(blogs1|blogs2|blogs3|blogs_contentful)/:id">
                        <CustomRoute component={PostDetail} meta={{ title: 'Read blog' }} />
                    </Route>

                    <Route exact path="*">
                        <CustomRoute component={PathNotFound} meta={{ title: 'Path not found' }}  />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </div>
    );
}

export default App;