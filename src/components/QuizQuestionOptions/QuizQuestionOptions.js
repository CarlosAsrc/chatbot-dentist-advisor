import React from "react";

import "./QuizQuestionOptions.css";

const QuizQuestionOptions = (props) => {
    const options = [
        { text: "Sim", handler: props.actionProvider.handleYes, id: 1 },
        { text: "Não", handler: props.actionProvider.handleNo, id: 2 }
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

export default QuizQuestionOptions;