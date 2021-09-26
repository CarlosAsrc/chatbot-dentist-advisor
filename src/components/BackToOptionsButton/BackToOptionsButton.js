import React from "react";

import "./BackToOptionsButton.css";

const BackToOptionsButton = (props) => {
    const options = [
        { text: "Quero ver as opções iniciais.", handler: props.actionProvider.handleBackToOptions, id: 1 }
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="back-to-options-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="back-to-options-button-container">{optionsMarkup}</div>;
};

export default BackToOptionsButton;