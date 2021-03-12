import React from 'react';
import { scrollTop } from '../../helpers/ui';
import Title from "./Title";
import { Route } from "react-router-dom";

const CustomRoute = ({ component: Component, meta, ...rest }) => {
    return (
        <Route
            {...rest}
            render={function (routeProps) {
                scrollTop();
                return (<div>
                        <Title pageTitle={meta ? meta.title : null} />
                        <Component {...routeProps} />
                    </div>)
            }
            }
        />
    );
}

export default CustomRoute;
