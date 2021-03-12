import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getContact } from './../../actions/static_data';
import { contentWayPoint } from '../../helpers/ui';

function Contact() {
    const dispatch = useDispatch();
    const contact = useSelector(st => {
        return st.static_data && st.static_data.contact;
    }) || {};
    
    useEffect(function () {
        dispatch(getContact());
        // eslint-disable-next-line
        init_gmap();
        contentWayPoint();
    }, [dispatch]);

    return (
        <section className="ftco-section contact-section">
            <div className="container">
                <div className="row d-flex mb-5 contact-info ftco-animate">
                    <div className="col-md-12 mb-4">
                        <h2 className="h4 font-weight-bold">Contact Information</h2>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-3">
                        <p><span>Address:</span> {contact.address}</p>
                    </div>
                    <div className="col-md-3">
                        <p><span>Phone:</span> <a href="tel://1234567920">{contact.tel}</a></p>
                    </div>
                    <div className="col-md-3">
                        <p><span>Email:</span> <a href={'mailto:' + contact.email}>{contact.email}</a></p>
                    </div>
                    <div className="col-md-3">
                        <p><span>Website</span> <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>
                    </div>
                </div>
                <div className="row block-9">
                    <div className="col-md-6 order-md-last pr-md-5 ftco-animate">
                        <form action="#">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" onClick={(e) => { e.preventDefault() } } className="btn btn-primary py-3 px-5" />
                            </div>
                        </form>
        
                    </div>
        
                    <div className="col-md-6 ftco-animate">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;