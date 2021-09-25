import React from "react";

import "./BibliographicTipsFinalizationOptions.css";

const BibliographicTipsFinalizationOptions = (props) => {
    const options = [
        { text: "Me sinto pronto para os estudos!", handler: props.actionProvider.handleThanks, id: 1 },
        { text: "Quero mais dicas bibliográficas", handler: props.actionProvider.handleBibliographicTips, id: 2 }
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="bibliographic-tips-finalization-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="bibliographic-tips-finalization-options-container">{optionsMarkup}</div>;
};

export default BibliographicTipsFinalizationOptions;