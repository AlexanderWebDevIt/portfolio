import React, { useState } from "react";

export const LinkPreviewer = props => {
    const [isShown, setIsShown] = useState(false);

    return (
        <a
            href={props.href}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <span> {props.children} </span>
            {isShown && (
                <Card image={props.image} title={props.title} text={props.text} />
            )}
        </a>
    );
};

const Card = props => {
    return (
        <div>
            <img src={props.image}  alt="" />
            <div >
                <h5 >{props.title}</h5>
                <p >{props.text}</p>
            </div>
        </div>
    );
};