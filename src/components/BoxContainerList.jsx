import React, { Component } from "react";
import boxContainerStyles from "./box-container.module.css";
import BoxContainerItem from "./BoxContainerItem";

export default class BoxContainerList extends Component {
    render() {
        return (
            <div className={boxContainerStyles.listContainer}>
                {this.props.items.map((item, index) => (
                    <BoxContainerItem key={index} name={item.name} linksto={item.linksto} isHref={item.isHref} />
                ))}
            </div>
        );
    }
}
