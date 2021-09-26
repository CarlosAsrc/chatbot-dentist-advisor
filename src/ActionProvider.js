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
        this.handleBackToOptions(2000)
    }

    cannotUnderstandMessage() {
        this.sendBotMessage("Não entendi 😕", {})
        this.handleBackToOptions(2000)
    }

    yourNameQuestion() {
        this.sendBotMessage("O meu nome é Estrela! 🥰", {})
        this.handleBackToOptions(2000)
    }


    handlePrinciples = () => {
        this.sendBotMessage("Esses princípios são ....", {})
        this.sendBotMessage("Que saber mais? Confira esses resumos que preparamos para você!", { widget: 'summariesPDF' })
    };


    handleMentalMap = () => {
        this.sendBotMessage("Preparamos um brinde para você, que tal um mapa mental para te ajudar? Assim fica moleza né?!", { widget: 'mentalMap' })
    };

    handleQuizRequest = () => {
        this.sendBotMessage("Agora, que tal testar os seus conhecimentos sobre os princípios do preparo radicular?",
            { widget: "quizOptions" }
        )
    };

    handleBibliographicTips = () => {
        this.sendBotMessage("Confira as dicas de sites que irão de ajudar:", { widget: 'bibliographicTipsOptions' })
    };

    handleVideoLessonsTips = () => {
        this.sendBotMessage("Então saca só esse canal que traz uma abordagem completa sobre o assunto:", { widget: 'videoLessonsLinks' })
    }

    handleBooksTips = () => {
        this.sendBotMessage("Segue algumas dicas de livros referências sobre o assunto:", { widget: 'booksLinks' })
    }

    handleArticlesTips = () => {
        this.sendBotMessage("Segue algumas dicas de artigos para se manter atualizado:", { widget: 'articlesLinks' })
    }

    handleThanks = () => {
        this.sendBotMessage("Espero que tenha te ajudado, obrigada!", {})
    }

    



    handleBackToOptions = (delay) => {
        this.sendBotMessage(
            "Escolha uma das opções para que eu possa continuar lhe ajudando:",
            { widget: "learningOptions" }
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