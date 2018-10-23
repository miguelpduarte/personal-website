import React from "react";
import boxContainerStyles from "./box-container.module.css";
import BoxContainerItem from "./BoxContainerItem";

class BoxContainer extends React.Component {
    render() {
        return (
            <div className={boxContainerStyles.box}>
                <h1>Hey! Welcome to my website!</h1>
                <div className={boxContainerStyles.flexContainer}>
                    {this.props.items.map(item => (
                        <BoxContainerItem key={item.name} name={item.name} linksto={item.linksto} isHref={item.isHref} />
                    ))}
                </div>
            </div>
        );
    }
}

export default BoxContainer;