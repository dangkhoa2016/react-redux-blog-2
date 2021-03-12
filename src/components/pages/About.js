import React, { useEffect } from "react";
import { contentWayPoint, fullHeight, magnificPopup } from '../../helpers/ui';
import { functions } from '../../helpers/functions';
import { Link } from "react-router-dom";

function About() {
    const photos = [
        { image: 'images/image_1.jpg', category: 'Travel', name: 'Picture 1' },
        { image: 'images/image_2.jpg', category: 'Nature', name: 'Picture 2' },
        { image: 'images/image_3.jpg', category: 'Fashion', name: 'Picture 3' },
        { image: 'images/image_4.jpg', category: 'Photography', name: 'Picture 4' },
        { image: 'images/image_5.jpg', category: 'Fashion, Model', name: 'Picture 5' },
        { image: 'images/image_6.jpg', category: 'Photography', name: 'Picture 6' },
        { image: 'images/image_7.jpg', category: 'Fashion', name: 'Picture 7' },
        { image: 'images/image_8.jpg', category: 'Nature', name: 'Picture 8' },
        { image: 'images/image_9.jpg', category: 'Model', name: 'Picture 9' },
        { image: 'images/image_10.jpg', category: 'Travel', name: 'Picture 10' },
        { image: 'images/image_11.jpg', category: 'Nature', name: 'Picture 11' },
        { image: 'images/image_12.jpg', category: 'Technology', name: 'Picture 12' },
    ];

    useEffect(function () {
        fullHeight();
        contentWayPoint();
        magnificPopup();
    }, []);

    return (
        <div>
            <div className="hero-wrap hero-wrap-2 js-fullheight" style={functions.ext_BgImage('/images/bg_4.jpg')}
                data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="js-fullheight d-flex justify-content-center align-items-center ftco-animate">
                    <div className="col-md-8 text text-center">
                        <div className="img mb-4" style={functions.ext_BgImage('/images/author.jpg')}></div>
                        <div className="desc">
                            <h2 className="">Hello I'm</h2>
                            <h1 className="mb-4">Dang Khoa</h1>
                            <p className="mb-4">I am A Blogger Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                                Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <ul className="ftco-social mt-3">
                                <li className="ftco-animate"><Link to="#"><span className="icon-twitter"></span></Link></li>
                                <li className="ftco-animate"><Link to="#"><span className="icon-facebook"></span></Link></li>
                                <li className="ftco-animate"><Link to="#"><span className="icon-instagram"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section-2">
                <div className="photograhy">
                    <div className="row no-gutters">
                        {photos.map((item, index) => (
                            <div className="col-md-3" key={index}>
                                <a href={item.image} className="photography-entry image-popup img d-flex justify-content-center align-items-center"
                                    style={functions.ext_BgImage(item.image)}>
                                    <div className="overlay"></div>
                                    <div className="text text-center">
                                        <h3>{item.name}</h3>
                                        <span>{item.category}</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
