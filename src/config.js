import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import QuizOptions from "./components/QuizOptions/QuizOptions";
import LinkList from "./components/LinkList/LinkList.js";
import DentistBotAvatar from "./components/DentistBotAvatar";
import UserAvatar from "./components/UserAvatar";

const config = {
    botName: "Assistente virtual Estrela",
    initialMessages: [createChatBotMessage(`Olá! Aqui é a Estrela, assistente virtual inteligente, especializada em preparo do canal radicular. O que você deseja?`, {
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
            widgetName: "quizOptions",
            widgetFunc: (props) => <div>
                <LinkList {...props} />
                <QuizOptions {...props} options={[1, 2]} />
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
            widgetName: "quizOptionsWithoutPassword",
            widgetFunc: (props) => <QuizOptions {...props} options={[2]} />,
        },
        {
            widgetName: "complementaryMaterialLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Material 1",
                        url:
                            "https://www.google.com.br",
                        id: 1,
                    },
                    {
                        text: "Material 2",
                        url:
                            "https://www.google.com.br",
                        id: 2,
                    },
                    {
                        text: "Material 3",
                        url: "https://www.google.com.br",
                        id: 3,
                    },
                ],
            },
        },
    ],
}

export default config