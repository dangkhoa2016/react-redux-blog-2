import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getArchives, getContact } from './../../actions/static_data';
import { Link } from "react-router-dom";

function Footer() {
    const dispatch = useDispatch();
    const categories = useSelector(st => {
        return st.static_data && st.static_data.categories;
    });
    const archives = useSelector(st => {
        return st.static_data && st.static_data.archives;
    });
    const contact = useSelector(st => {
        return st.static_data && st.static_data.contact;
    }) || {};
    
    useEffect(function () {
        dispatch(getArchives());
        dispatch(getCategories());
        dispatch(getContact());
    }, [dispatch]);

    return (
        <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container px-md-5">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Categories</h2>
                            <ul className="list-unstyled categories">
                                { categories ? categories.map((category, index) => (
                                    <li key={ `category_${index}` }><Link to="#">{category.name} <span>({category.count})</span></Link></li>
                                )) : null }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Archives</h2>
                            <ul className="list-unstyled categories">
                                { archives ? archives.map((archive, index) => (
                                    <li key={ `archive_${index}` }><Link to="#">{archive.month} <span>({archive.count})</span></Link></li>
                                )) : null }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions ?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text"> {contact.address}</span></li>
                                    <li><Link to="#"><span className="icon icon-phone"></span><span className="text"> {contact.tel}</span></Link></li>
                                    <li><Link to="#"><span className="icon icon-envelope"></span><span className="text"> {contact.email}</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;