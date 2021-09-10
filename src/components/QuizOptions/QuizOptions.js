// in src/components/LearningOptions/LearningOptions.jsx

import React from "react";

import "./QuizOptions.css";

const QuizOptions = (props) => {
    const options = [
        { text: "Ja fiz o quiz e estou com a senha", handler: props.actionProvider.handleHasPassword, id: 1 },
        { text: "Quero ver os materiais disponíveis", handler: props.actionProvider.handleBackToOptions, id: 2 }
    ];

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