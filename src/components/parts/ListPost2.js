import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { functions } from '../../helpers/functions';
import { getPostsFromAPI, getPostsFromAPIContentful } from './../../actions/posts';
import { Link } from 'react-router-dom';
import { fullHeight, carousel, scrollTop, contentWayPoint } from '../../helpers/ui';
import ReactPaginate from 'react-paginate';
import Rightbar from "./Rightbar";

const ListPost2 = ({ is_Contentful, type }) => {
    const posts = useSelector(st => st.posts.posts);
    const total = useSelector(st => st.posts.total) || 1;
    const page_size = 4;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    var [pageIndex, setPageIndex] = useState(1);

    useEffect(function () {
        fullHeight();
        carousel();
        
        async function fetchPosts(pageIndex) {
            await dispatch(is_Contentful ? getPostsFromAPIContentful(pageIndex, page_size) : getPostsFromAPI(pageIndex, page_size));
            setIsLoading(false);
        }

        if (isLoading) {
            fetchPosts(pageIndex);
        } else if (posts && posts.length > 0) {
            contentWayPoint();
        }

    }, [dispatch, pageIndex, isLoading, is_Contentful, posts]);

    function onPageChange(e) {
        scrollTop();
        setIsLoading(true);
        setPageIndex(e.selected + 1);
    }

    return (
        <div>
            <section className="home-slider js-fullheight owl-carousel">
                <div className="slider-item js-fullheight" style={functions.ext_BgImage('/images/bg_2.jpg')}>
                    <div className="overlay"></div>
                    <div className="container-fluid">
                        <div className="row no-gutters slider-text slider-text-2 js-fullheight align-items-center justify-content-center"
                            data-scrollax-parent="true">
                            <div className="col-md-10 text-center ftco-animate"
                                data-scrollax='properties: { translateY: "70%" }'>
                                <h1 className="mb-4" data-scrollax='properties: { translateY: "30%", opacity: 1.6 }'>Discover the Place</h1>
                                <p data-scrollax='properties: { translateY: "30%", opacity: 1.6 }'>Find great places to stay, eat, shop, or visit from local experts</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item js-fullheight" style={functions.ext_BgImage('/images/bg_4.jpg')}>
                    <div className="overlay"></div>
                    <div className="container-fluid">
                        <div className="row no-gutters slider-text slider-text-2 js-fullheight align-items-center justify-content-center"
                            data-scrollax-parent="true">
                            <div className="col-md-10 text-center ftco-animate"
                                data-scrollax="properties: { translateY: '70%' }">
                                <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Technology</h1>
                                <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">is best when it brings people together</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item js-fullheight" style={functions.ext_BgImage('/images/bg_3.jpg')}>
                    <div className="overlay"></div>
                    <div className="container-fluid">
                        <div className="row no-gutters slider-text slider-text-2 js-fullheight align-items-center justify-content-center"
                            data-scrollax-parent="true">
                            <div className="col-md-10 text-center ftco-animate"
                                data-scrollax="properties: { translateY: '70%' }">
                                <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Explore and travel</h1>
                                <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat, shop, or visit from local experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section" id="blogs-list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            { isLoading ?
                            <div className="row m-5"><b>Loading...</b></div>
                            : (posts && posts.length > 0 ?
                            (<div className="row">
                                {posts.map((post, index) => (
                                <div className="col-md-12" key={index}>
                                    <div className="blog-entry ftco-animate">
                                        <Link to={{ pathname: `/${type}/${post.slug || post.id}` }}
                                            className="img" style={functions.ext_BgImage(post.heroImage ? post.heroImage.url : post.photo)} />
                                        <div className="text pt-2 mt-3">
                                            <span className="category mb-1 d-block"><Link to="#">Technology</Link></span>
                                            <h3 className="mb-4"><Link to={{ pathname: `/${type}/${post.slug || post.id}` }}>{post.title}</Link></h3>
                                            <p className="mb-4">{post.description || post.summary}</p>
                                            <div className="author mb-4 d-flex align-items-center">
                                                <Link to="#" className="img" style={functions.ext_BgImage('/images/person_1.jpg')}></Link>
                                                <div className="ml-3 info">
                                                    <span>Written by</span>
                                                    <h3><Link to="#">{post.user ? post.user.name : post.author.name}</Link>, <span>{functions.formatShortDate(post.publishDate || post.createdAt)}</span></h3>
                                                </div>
                                            </div>
                                            <div className="meta-wrap d-md-flex align-items-center">
                                                <div className="half order-md-last text-md-right">
                                                    <p className="meta">
                                                        <span><i className="icon-heart"></i> {functions.ext_RandomCount()}</span>
                                                        <span><i className="icon-eye"></i> {functions.ext_RandomCount()}</span>
                                                        <span><i className="icon-comment"></i> {post.linkedFrom ? post.linkedFrom.commentCollection.total : post.comments.length}</span>
                                                    </p>
                                                </div>
                                                <div className="half">
                                                    <p><Link to={{ pathname: `/${type}/${post.slug || post.id}` }} className="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading <span className="ion-ios-arrow-forward"></span></Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>)
                            : (<div className="mb-5">
                                <b>No posts found!</b>
                            </div>))}

                            <div className="row mt-5">
                                <div className="col">
                                    <ReactPaginate pageCount={total} pageRangeDisplayed={3} marginPagesDisplayed={2}
                                        hrefBuilder={()=> { return '#'; }}
                                        onPageChange={onPageChange}
                                        nextLinkClassName="page-link"
                                        pageLinkClassName="page-link"
                                        previousLinkClassName="page-link"
                                        containerClassName="pagination"
                                        pageClassName="page-item"
                                        nextClassName="page-item"
                                        previousClassName="page-item"
                                        activeClassName="active" forcePage={pageIndex - 1} />
                                </div>
                            </div>
                        </div>

                        <Rightbar />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListPost2;
