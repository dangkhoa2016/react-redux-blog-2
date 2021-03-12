import React from 'react';
import ListPost1 from "../parts/ListPost1";
// import ListPost2 from "../parts/ListPost2";

function BlogsWithContentful() {
    const is_Contentful = true;

    return (
        <section className="ftco-section">
            <div className="container">
                <ListPost1 is_Contentful={is_Contentful} type="blogs_contentful" />
                {/* <ListPost2 is_Contentful={is_Contentful} type="blogs_contentful" /> */}
            </div>
        </section>
    );
}


export default BlogsWithContentful;