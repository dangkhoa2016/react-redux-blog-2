import React from 'react';
// import ListPost1 from "../parts/ListPost1";
import ListPost2 from "../parts/ListPost2";

function Blogs1() {
    const is_Contentful = false;

    return (
        <section>
            {/* <ListPost1 is_Contentful={is_Contentful} type="blogs1" /> */}
            <ListPost2 is_Contentful={is_Contentful} type="blogs1" />
        </section>
    );
}

export default Blogs1;
