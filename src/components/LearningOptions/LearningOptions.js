// in src/components/LearningOptions/LearningOptions.jsx

import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        { text: "Objetivos do preparo do canal radicular", handler: props.actionProvider.handleObjectives, id: 1 },
        { text: "Passo a passo do preparo radicular", handler: props.actionProvider.handleStepByStep, id: 2 },
        { text: "Quero fazer o quiz", handler: props.actionProvider.handleQuizRequest, id: 3 }
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