import React from "react";

export default ({title, children}) => (
    <React.Fragment>
        <h1>{title}</h1>
        {children}
    </React.Fragment>
);