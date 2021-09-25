import React from "react";

import "./LinkList.css";

import { ReactComponent as UrlIcon } from "../../icons/link.svg";

const LinkList = (props) => {
    console.log(props);
    const linkMarkup = props.options.map((link) => (
        
        <li key={link.id} className="link-list-item">
            
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-list-item-url"
            >
                <UrlIcon className="url-icon" />
                <h1 className="url-header">{link.text}</h1>
            </a>
        </li>
    ));

    return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;