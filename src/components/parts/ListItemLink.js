import React from "react";
import {
  Link,
  Route
} from "react-router-dom";

function ListItemLink({ to, activeClassName, ...rest }) {
  return (
    <Route
      path={to} exact
      children={({ match }) => (
        <li className={match ? activeClassName : ""}>
          <Link to={to} {...rest} />
        </li>
      )}
    />
  );
}

export default ListItemLink;
