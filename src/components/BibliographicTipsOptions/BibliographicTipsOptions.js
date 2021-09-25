import React from "react";

import "./BibliographicTipsOptions.css";

const BibliographicTipsOptions = (props) => {
    const options = [
        { text: "Quero assistir videoaulas sobre o assunto.", handler: props.actionProvider.handleVideoLessonsTips, id: 1 },
        { text: "Quero dicas de livros referências sobre o assunto", handler: props.actionProvider.handleBooksTips, id: 2 },
        { text: "Quero artigos para se manter atualizado", handler: props.actionProvider.handleArticlesTips, id: 3 }
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="bibliographic-tips-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="bibliographic-tips-options-container">{optionsMarkup}</div>;
};

export default BibliographicTipsOptions;