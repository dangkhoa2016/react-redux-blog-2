import React, { useEffect } from "react";
import { contentWayPoint } from '../../helpers/ui';
import ListPost1 from "../parts/ListPost1";

function Home() {
    const is_Contentful = false;
    useEffect(function () {
        contentWayPoint();
    }, []);

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-2">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <h2 className="mb-4">Articles</h2>
                        <p>The first thing you learn when you’re blogging is that people are one click away from leaving you. So you’ve got to get to the point, you can’t waste people’s time, you’ve got to give them some value for their limited attention span.</p>
                    </div>
                </div>

                <ListPost1 is_Contentful={is_Contentful} type="blogs1"></ListPost1>
            </div>
        </section>
    );
}

export default Home;