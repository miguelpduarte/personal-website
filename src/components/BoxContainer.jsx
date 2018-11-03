import React from "react";
import boxContainerStyles from "./box-container.module.css";
import positionStyles from "../css/positions.module.css";
import shadowStyles from "../css/shadows.module.css";

export default class BoxContainer extends React.Component {
    render() {
        return (
            <div className={`${boxContainerStyles.box} ${positionStyles.horizontaleratorinatorSmaller} ${shadowStyles.inner}`}>
                {this.props.children}
            </div>
        );
    }
}