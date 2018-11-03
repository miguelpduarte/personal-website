import React, { Component } from "react";
import { Link } from "gatsby";
import boxContainerStyles from "./box-container.module.css";
import shadowStyles from "../css/shadows.module.css";

export default class BoxContainerItem extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    (this.props.isHref ?
                        <a className={`${boxContainerStyles.item} ${shadowStyles.hoveredShadow}`} href={this.props.linksto}>
                            {this.props.name}
                        </a>
                        :
                        <Link className={`${boxContainerStyles.item} ${shadowStyles.hoveredShadow}`} to={this.props.linksto}>
                            {this.props.name}
                        </Link>
                    )
                }
            </React.Fragment>
        );
    }
}