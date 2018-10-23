import React, { Component } from "react";
import { Link } from "gatsby";
import boxContainerStyles from "./box-container.module.css";

export default class BoxContainerItem extends Component {
    render() {
        return (
            <div className={boxContainerStyles.item}>
                {
                    (this.props.isHref ?
                        <a href={this.props.linksto}>
                            {this.props.name}
                        </a>
                        :
                        <Link to={this.props.linksto}>
                            {this.props.name}
                        </Link>
                    )
                }
            </div>
        );
    }
}
