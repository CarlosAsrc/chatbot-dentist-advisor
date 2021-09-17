import song from "./media/pling-sound.mp3";

class ActionProvider {

    state = {
        audio: new Audio(song)
    };
    
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        this.sendBotMessage("Olá! 😃", {})
        this.handleBackToOptions()
    }

    cannotUnderstandMessage() {
        this.sendBotMessage("Não entendi 😕", {})
        this.handleBackToOptions()
    }

    yourNameQuestion() {
        this.sendBotMessage("O meu nome é Estrela! 🥰", {})
        this.handleBackToOptions()
    }

    passwordMatch() {
        this.sendBotMessage("Perfeito! Estes são os links de acesso para o material complementar:",
            { widget: 'complementaryMaterialLinks' })
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
        this.sendBotMessage("Ótimo! No seguinte link você deverá realizar o quiz para obter a senha de acesso aos materiais complementares sobre o preparo do canal radicular:",
            { widget: "quizOptions" }
        )
    };


    handleBackToOptions = () => {
        this.sendBotMessage(
            "Escolha uma das opções para que eu possa lhe ajudar:",
            { widget: "learningOptions", delay: 2000 }
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
        setTimeout(() => this.state.audio.play(), 1000)
    }

    updateChatbotState(message) {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
}

export default ActionProvider;