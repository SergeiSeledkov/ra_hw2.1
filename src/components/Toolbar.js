import React from "react";

export default function Toolbar(props) {
    const { filters, onSelectFilter, selected } = props;

    return (
        <ul className="project__list">
            {
                filters.map(item =>
                    <li key={item} className="project__item">
                        {(item === selected) ? <button className="project__button active" onClick={onSelectFilter}>{item}</button> : <button className="project__button" onClick={onSelectFilter}>{item}</button>}
                    </li>)
            }
        </ul>
    )
}