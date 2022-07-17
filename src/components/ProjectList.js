import React from "react";

export default function ProjectList(props) {
    const { projects } = props;

    return (
        <div className="project__wrapper">
            {projects.map(item =>
                <div className="project__card">
                    <img className="project__image" src={item.img}></img>
                </div>
            )}
        </div>
    )
}