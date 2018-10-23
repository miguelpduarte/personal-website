import React, { Component } from "react";
import { Link } from "gatsby";

//Probably needs refactor

const ListLink = props => (
    <li style={{ display: "inline-block", marginRight: "1rem" }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

class Navbar extends Component {
    render() {
        return (
            <header style={{ marginBottom: "1.5rem" }}>
                <Link to="/" style={{ color: "black" }}>
                    <h3 style={{ display: "inline" }}>miguelpduarte</h3>
                </Link>
                <ul style={{ listStyle: "none", float: "right" }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </header>
        );
    }
}

export default Navbar;