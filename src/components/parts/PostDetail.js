import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { functions } from '../../helpers/functions';
import { getPostFromAPI, getPostFromAPIContentful } from './../../actions/post';
import { Link } from 'react-router-dom';
import { contentWayPoint, fullHeight } from '../../helpers/ui';
import { useParams } from "react-router-dom";
import Rightbar from "./Rightbar";
import CommentForm from "./CommentForm";
import './PostDetail.css';
import ReactMarkdown from 'react-markdown';


function PostDetail() {
    const { id, type } = useParams();
    const post = useSelector(st => {
        return st.post[id];
    });

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(post ? false : true);
    const is_Contentful = /^\d+$/.test(id) === false;

    useEffect(function () {
        fullHeight();

        async function fetchPost(postId) {
            await dispatch(is_Contentful ? getPostFromAPIContentful(postId) : getPostFromAPI(postId));
            setIsLoading(false);
        }

        if (isLoading) {
            fetchPost(id);
        } else {
            contentWayPoint();
        }

    }, [dispatch, id, isLoading, is_Contentful]);

    const comments = post ? (post.linkedFrom ? post.linkedFrom.commentCollection.items : post.comments) : [];

    return (
        <div>
            <div className="hero-wrap js-fullheight" style={functions.ext_BgImage('/images/bg_1.jpg')}
                data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="js-fullheight d-flex justify-content-center align-items-center">
                    <div className="col-md-8 text text-center">
                        <div className="desc">
                            <h1 className="mb-4">{isLoading ? 'Loading...' : (post ? post.title : 'Blog Details')}</h1>
                            <p>
                                <Link to="/" className="btn-custom mr-2">Home <span className="ion-ios-arrow-forward"></span></Link>
                                <Link to={{ pathname: `/${type}` }} className="btn-custom mr-2">Blog <span className="ion-ios-arrow-forward"></span></Link>
                                <span className="btn-custom">Post detail <span className="ion-ios-arrow-forward"></span></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section">
            <div className="container">
                <div className="row">
                    { isLoading ? <div className="col-lg-8"><b>Loading...</b></div>
                    : (post ? (<div className="col-lg-8 ftco-animate post-body">
                        <div>{ post.description || post.summary }</div>
                        {is_Contentful ? <ReactMarkdown>{post.body}</ReactMarkdown> : <div dangerouslySetInnerHTML={{ __html: post.content }}></div>}

                        <div className="tag-widget post-tag-container mb-5 mt-5">
                            <div className="tagcloud">
                                <Link to="#" className="tag-cloud-link">Life</Link>
                                <Link to="#" className="tag-cloud-link">Sport</Link>
                                <Link to="#" className="tag-cloud-link">Tech</Link>
                                <Link to="#" className="tag-cloud-link">Travel</Link>
                                {post.tags ? post.tags.map((tag, index) => (
                                    <Link to="#" className="tag-cloud-link">{tag}</Link>
                                )) : null}
                            </div>
                        </div>

                        <div className="about-author d-flex p-4 bg-light">
                            <div className="bio mr-5">
                                <img src="/images/person_1.jpg" alt="Person placeholder" className="img-fluid mb-4" />
                            </div>
                            <div className="desc">
                                <h3>{post.user ? post.user.name : post.author.name}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                                    necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                                    sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>

                        <div className="pt-5 mt-5">
                            <h3 className="mb-5 font-weight-bold">{post.linkedFrom ? post.linkedFrom.commentCollection.total : post.comments.length} Comments</h3>
                            <ul className="comment-list">
                                {comments.map((comment, index) => (
                                <li className="comment" key={ `comment_${index}` }>
                                    <div className="vcard bio">
                                        <img src="/images/person_1.jpg" alt="Person placeholder" />
                                    </div>
                                    <div className="comment-body">
                                        <h3>{comment.user ? comment.user.name : comment.author.name}</h3>
                                        <div className="meta">{functions.formatDate(comment.sys ? comment.sys.publishedAt : comment.createdAt, 'llll')}</div>
                                        <p>{comment.comment}</p>
                                        <p><Link to="#" className="reply" onClick={(e) => { e.preventDefault()} }>Reply</Link></p>
                                    </div>
                                </li>
                                ))}
                            </ul>

                            <CommentForm />
                        </div>
                    </div>) : (<div className="col-lg-8 ftco-animate">
                        <b>Post not found.</b>
                    </div>))}

                    <Rightbar />
                </div>
            </div>
        </section>
        </div>
    );
}

export default PostDetail;