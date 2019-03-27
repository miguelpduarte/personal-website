import React from "react";

export default ({node}) => (
    <div>{node.frontmatter.title}{" @ "} <a href={node.frontmatter.where_link}>{node.frontmatter.where}</a></div>
);