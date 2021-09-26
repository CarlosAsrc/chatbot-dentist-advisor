import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList.js";
import ImageViewer from "./components/ImageViewer/ImageViewer";
import DentistBotAvatar from "./components/DentistBotAvatar";
import UserAvatar from "./components/UserAvatar";
import BibliographicTipsOptions from "./components/BibliographicTipsOptions/BibliographicTipsOptions";
import BibliographicTipsFinalizationOptions from "./components/BibliographicTipsFinalizationOptions/BibliographicTipsFinalizationOptions";
import BackToOptionsButton from "./components/BackToOptionsButton/BackToOptionsButton";

const config = {
    botName: "Assistente virtual Estrela",
    initialMessages: [createChatBotMessage(`Olá, aqui é a Estrela, assistente virtual inteligente, especialista em princípios do preparo radicular. O que você deseja?`, {
        widget: "learningOptions",
    }),
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#ff0095",
        },
        chatButton: {
            backgroundColor: "#ff0095",
        },
    },

    customComponents: {
        botAvatar: (props) => <DentistBotAvatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />,
    },

    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "summariesPDF",
            widgetFunc: (props) => <div>
                <LinkList {...props} />
                <BackToOptionsButton {...props} />
            </div>,
            props: {
                options: [
                    {
                        text: "Baixar resumo sobre os objetivos (limpeza e modelagem) + princípios de Schilder.",
                        url:
                            "https://www.google.com.br",
                        id: 1,
                    },
                    {
                        text: "Baixar resumo Medidas+instrumentais e produtos irrigadores.",
                        url:
                            "https://www.google.com.br",
                        id: 2,
                    },
                ],
            },
        },
        {
            widgetName: "mentalMap",
            widgetFunc: (props) => <div>
                <ImageViewer />
                <BackToOptionsButton {...props} />
            </div>,
        },
        {
            widgetName: "quizOptions",
            widgetFunc: (props) => <div>
                <LinkList {...props} />
                <BackToOptionsButton {...props} />
            </div>,
            props: {
                options: [
                    {
                        text: "Abrir o quiz",
                        url:
                            "https://www.google.com.br",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "bibliographicTipsOptions",
            widgetFunc: (props) => <div>
                <BibliographicTipsOptions {...props} />
                <BackToOptionsButton {...props} />
            </div>,
        },

        {
            widgetName: "videoLessonsLinks",
            widgetFunc: (props) => <div>
                <LinkList {...props} />
                <BibliographicTipsFinalizationOptions {...props} />
                <BackToOptionsButton {...props} />
            </div>,
            props: {
                options: [
                    {
                        text: "LINK VIDEOSAULA ENDOSCIENCE",
                        url:
                            "https://www.google.com.br",
                        id: 1,
                    },
                ],
            },
        },

        {
            widgetName: "booksLinks",
            widgetFunc: (props) => <div>
                <LinkList {...props} />
                <BibliographicTipsFinalizationOptions {...props} />
                <BackToOptionsButton {...props} />
            </div>,
            props: {
                options: [
                    {
                        text: "LINKS LIVROS",
                        url:
                            "https://www.google.com.br",
                        id: 1,
                    },
                ],
            },
        },

        {
            widgetName: "articlesLinks",
            widgetFunc: (props) => <div>
                <LinkList {...props} />
                <BibliographicTipsFinalizationOptions {...props} />
                <BackToOptionsButton {...props} />
            </div>,
            props: {
                options: [
                    {
                        text: "LINKS ARTIGOS",
                        url:
                            "https://www.google.com.br",
                        id: 1,
                    },
                ],
            },
        },

        {
            widgetName: "backToOptionsButton",
            widgetFunc: (props) => <BackToOptionsButton {...props} />,
        },
    ],
}

export default config