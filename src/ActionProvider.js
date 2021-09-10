
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.");
        this.updateChatbotState(greetingMessage);
    }

    passwordMatch() {
        this.sendBotMessage("Perfeito! Estes são os links de acesso para o material complementar: (LINKS)", {})
    }


    handleObjectives = () => {
        this.sendBotMessage("Os Principais objetivos do preparo radicular são:", {})
        this.sendBotMessage("- Manter saúde periapical", {})
        this.sendBotMessage("- Condições de reparação da região periapical e canal radicular", {})

        this.handleBackToOptions()
    };


    handleStepByStep = () => {
        this.sendBotMessage("O preparo é feito na direção cérvico-apical, através dos seguintes passos: ", {})

        this.sendBotMessage("Exploração do canal radicular", {})
        this.sendBotMessage("Preparo do ⅓ cervical", {})
        this.sendBotMessage("Odontometria", {})
        this.sendBotMessage("Preparo do ⅓ apical", {})

        this.handleBackToOptions()

    };

    handleQuizRequest = () => {
        this.sendBotMessage("Ótimo! No seguinte link você deverá realizar o quiz para obter a senha de acesso aos materiais complementares sobre o preparo do canal radicular: (LINK)",
            { widget: "quizOptions" }
        )
    };


    handleBackToOptions = () => {
        this.sendBotMessage(
            "Escolha uma das opções para que eu possa lhe ajudar:",
            { widget: "learningOptions" }
        )
    };

    handleHasPassword = () => {
        this.sendBotMessage(
            "Informe a senha para obter os links de acesso:",
            { widget: "quizOptionsWithoutPassword" }
        )
    };




    sendBotMessage = (text, widget) => {
        this.updateChatbotState(this.createChatBotMessage(text, widget));
    }

    updateChatbotState(message) {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
}

export default ActionProvider;