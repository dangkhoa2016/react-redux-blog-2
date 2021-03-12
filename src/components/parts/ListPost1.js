import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { functions } from '../../helpers/functions';
import { getPostsFromAPI, getPostsFromAPIContentful } from './../../actions/posts';
import { Link } from 'react-router-dom';
import { scrollTop, contentWayPoint } from '../../helpers/ui';
import ReactPaginate from 'react-paginate';

const ListPost1 = ({ is_Contentful, type }) => {
    const posts = useSelector(st => st.posts.posts);
    const total = useSelector(st => st.posts.total) || 1;
    const page_size = 6;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    var [pageIndex, setPageIndex] = useState(1);

    useEffect(function () {
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

    if (isLoading) return <div className="row m-5"><b>Loading...</b></div>;

    if (!isLoading && posts.length === 0) {
        return (<div className="mb-5">
            <b>No posts found!</b>
        </div>);
    }

    return (
        <div id="blogs-list">
            <div className="row">
                {posts.map((post, index) => (
                <div className="col-md-4" key={index}>
                    <div className="blog-entry ftco-animate">
                        <Link to={{ pathname: `/${type}/${post.slug || post.id}` }} className="img img-2"
                        style={functions.ext_BgImage(post.heroImage ? post.heroImage.url : post.photo)} />
                        <div className="text text-2 pt-2 mt-3">
                            <span className="category mb-3 d-block"><Link to="#">Technology</Link></span>
                            <h3 className="mb-4"><Link to={{ pathname: `/${type}/${post.slug || post.id}` }}>{post.title}</Link></h3>
                            <p className="mb-4">{post.description || post.summary}</p>
                            <div className="author mb-4 d-flex align-items-center">
                                <Link to="#" className="img" style={functions.ext_BgImage('/images/person_2.jpg')}></Link>
                                <div className="ml-3 info">
                                    <span>Written by</span>
                                    <h3><Link to="#">{post.user ? post.user.name : post.author.name}</Link>, <span>{functions.formatShortDate(post.publishDate || post.createdAt)}</span></h3>
                                </div>
                            </div>
                            <div className="meta-wrap align-items-center">
                                <div className="half order-md-last">
                                    <p className="meta">
                                        <span><i className="icon-heart"></i> {functions.ext_RandomCount()}</span>
                                        <span><i className="icon-eye"></i> {functions.ext_RandomCount()}</span>
                                        <span><i className="icon-comment"></i> {post.linkedFrom ? post.linkedFrom.commentCollection.total : post.comments.length}</span>
                                    </p>
                                </div>
                                <div className="half">
                                    <p><Link to={{ pathname: `/${type}/${post.slug || post.id}` }} className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="row">
                <div className="col">
                    <div className="block-27">
                        <ReactPaginate pageCount={total} pageRangeDisplayed={3} marginPagesDisplayed={2}
                        nextLinkClassName="icon-arrow-right" nextLabel="" hrefBuilder={()=> { return '#'; }}
                        previousLinkClassName="icon-arrow-left" previousLabel="" onPageChange={onPageChange}
                        activeClassName="active" forcePage={pageIndex - 1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListPost1;
