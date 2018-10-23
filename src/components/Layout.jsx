import React, { Component } from "react";
import Navbar from "./Navbar";

class Layout extends Component {
    render() {
        return (
            <div style={{ margin: "2em auto", maxWidth: "50em"}}>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;