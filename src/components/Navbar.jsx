import React from "react";
import { Link } from "gatsby";

// import textStyles from "../css/text-styles.module.css";

/*
const ListLink = (props) => (
    <li style={{ display: "inline-block", marginRight: "1rem" }}>
        <Link className={textStyles.primary} to={props.to}>{props.children}</Link>
    </li>
);
*/

export default () => (
    <header style={{ marginBottom: "1.5rem" }}>
        <Link to="/" style={{ color: "black" }}>
            <h3 style={{ display: "inline" }}>miguelpduarte</h3>
        </Link>
        {/* <ul style={{ listStyle: "none", display: "inline-block", margin: "0 1.5em" }}>
            <ListLink to="/cv/">CV</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
        </ul>*/}
    </header>
);
