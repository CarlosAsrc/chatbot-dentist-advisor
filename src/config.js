import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList.js";
import ImageViewer from "./components/ImageViewer/ImageViewer";
import DentistBotAvatar from "./components/DentistBotAvatar";
import UserAvatar from "./components/UserAvatar";
import BibliographicTipsOptions from "./components/BibliographicTipsOptions/BibliographicTipsOptions";
import BibliographicTipsFinalizationOptions from "./components/BibliographicTipsFinalizationOptions/BibliographicTipsFinalizationOptions";
import BackToOptionsButton from "./components/BackToOptionsButton/BackToOptionsButton";
import QuizQuestionOptions from "./components/QuizQuestionOptions/QuizQuestionOptions";

const config = {
    botName: "Assistente virtual Estrela",
    initialMessages: [createChatBotMessage(`Olá, aqui é a Estrela, assistente virtual especialista em Princípios do Preparo Radicular, que serve para que o profissional possa  planejar cuidadosamente o caso e ser executado de forma correta, evitando que seja surpreendido durante a execução do preparo do canal. Deseja fazer o Quiz?`, {
        widget: "quizQuestionOptions",
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
            widgetName: "quizQuestionOptions",
            widgetFunc: (props) => <QuizQuestionOptions {...props} />,
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
                            "https://chatbot-dentist-advisor-resources.s3.amazonaws.com/Grupo+6+Princ%C3%ADpios+do+Preparo+Radicular.pdf",
                        id: 1,
                    },
                    {
                        text: "Baixar resumo sobre Medidas + instrumentais e produtos irrigadores.",
                        url:
                            "https://chatbot-dentist-advisor-resources.s3.amazonaws.com/RESUMO+Princ%C3%ADpios+do+Preparo+Radicular.pdf",
                        id: 2,
                    },
                ],
            },
        },
        {
            widgetName: "mentalMap",
            widgetFunc: (props) => <div>
                <LinkList {...props} />
                <BackToOptionsButton {...props} />
            </div>,
            props: {
                options: [
                    {
                        text: "Baixar Mapa Mental",
                        url:
                            "https://chatbot-dentist-advisor-resources.s3.amazonaws.com/Mapa+Mental+-+Grupo+6+Princ%C3%ADpios+do+Preparo+radicular.pdf",
                        id: 1,
                    }
                ],
            },
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
                            "https://kahoot.it/",
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
                        text: "EndoScience - Princípios de preparo do Canal Radicular",
                        url: "https://www.youtube.com/watch?v=PAMNIaAf6Ms",
                        id: 1,
                    },
                ],
            },
        },

        {
            widgetName: "booksLinks",
            widgetFunc: (props) => <div>
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
                        text: "Artigo 'Como o ultrassom potencializa a ação hipoclorito de sódio?'",
                        url:
                            "https://endoscience.com.br/videos/como-o-ultrassom-potencializa-a-acao-hipoclorito-de-sodio/",
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