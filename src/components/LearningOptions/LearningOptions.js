import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        { text: "Quais princípios são esses?", handler: props.actionProvider.handlePrinciples, id: 1 },
        { text: "Testar meus conhecimentos", handler: props.actionProvider.handleQuizRequest, id: 2 },
        { text: "Mapa mental", handler: props.actionProvider.handleMentalMap, id: 3 },
        { text: "Dicas bibliográficas", handler: props.actionProvider.handleBibliographicTips, id: 4 }

    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;