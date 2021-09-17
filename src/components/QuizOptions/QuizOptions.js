// in src/components/LearningOptions/LearningOptions.jsx

import React from "react";

import "./QuizOptions.css";

const QuizOptions = (props) => {
    let options = [
        { text: "Ja fiz o quiz e estou com a senha", handler: props.actionProvider.handleHasPassword, id: 1 },
        { text: "Voltar para as opções disponíveis", handler: props.actionProvider.handleBackToOptions, id: 2 }
    ];

    options = options.filter(option => props.options.includes(option.id))

    const optionsMarkup = options.map((option) => (
        <button
            className="quiz-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="quiz-options-container">{optionsMarkup}</div>;
};

export default QuizOptions;