import React from "react";
import boxContainerStyles from "./box-container.module.css";
import BoxContainerItem from "./BoxContainerItem";

export default ({items}) => (
    <div className={boxContainerStyles.listContainer}>
        {items.map((item, index) => (
            <BoxContainerItem key={index} name={item.name} linksto={item.linksto} isHref={item.isHref} />
        ))}
    </div>
);