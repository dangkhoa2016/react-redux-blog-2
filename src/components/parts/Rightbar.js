import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { functions } from '../../helpers/functions';
import { getCategories, getArchives, getTags } from './../../actions/static_data';
import { Link } from "react-router-dom";

const Rightbar = () => {
    const dispatch = useDispatch();
    const categories = useSelector(st => {
        return st.static_data && st.static_data.categories;
    });
    const archives = useSelector(st => {
        return st.static_data && st.static_data.archives;
    });
    const tags = useSelector(st => {
        return st.static_data && st.static_data.tags;
    }) || [];
    
    useEffect(function () {
        dispatch(getArchives());
        dispatch(getCategories());
        dispatch(getTags());
    }, [dispatch]);

    return (
        <div className="col-lg-4 sidebar ftco-animate">
            <div className="sidebar-box">
                <form action="#" className="search-form" onSubmit={(e) => { e.preventDefault() } }>
                    <div className="form-group">
                        <span className="icon icon-search"></span>
                        <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                    </div>
                </form>
            </div>
            
            <div className="sidebar-box ftco-animate">
                <h3 className="sidebar-heading">Categories</h3>
                <ul className="categories">
                    { categories ? categories.map((category, index) => (
                        <li key={ `category_${index}` }><Link to="#">{category.name} <span>({category.count})</span></Link></li>
                    )) : null }
                </ul>
            </div>

            <div className="sidebar-box ftco-animate">
                <h3 className="sidebar-heading">Tag Cloud</h3>
                <ul className="tagcloud">
                    { tags ? tags.map((tag, index) => (
                        <Link to="#" className="tag-cloud-link" key={ `tag_${index}` }>{tag.keyword}</Link>
                    )) : null }
                </ul>
            </div>

            <div className="sidebar-box subs-wrap img" style={functions.ext_BgImage('/images/bg_1.jpg')}>
                <div className="overlay"></div>
                <h3 className="mb-4 sidebar-heading">Newsletter</h3>
                <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia
                </p>
                <form action="#" className="subscribe-form" onSubmit={(e) => { e.preventDefault() } }>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address" />
                        <input type="submit" value="Subscribe" className="mt-2 btn btn-white submit" />
                    </div>
                </form>
            </div>

            <div className="sidebar-box ftco-animate">
                <h3 className="sidebar-heading">Archives</h3>
                <ul className="categories">
                    { archives ? archives.map((archive, index) => (
                        <li key={ `archive_${index}` }><Link to="#">{archive.month} <span>({archive.count})</span></Link></li>
                    )) : null }
                </ul>
            </div>

            <div className="sidebar-box ftco-animate">
                <h3 className="sidebar-heading">Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                    necessitatibus voluptate quod mollitia delectus aut.</p>
            </div>
        </div>
    );
}

export default Rightbar;
