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


    handlePrinciples = () => {
        this.sendBotMessage("Esses princípios são ....", {})
        this.sendBotMessage("Que saber mais? Confira esses resumos que preparamos para você!", { widget: 'summariesPDF' })

        this.handleBackToOptions()
    };


    handleMentalMap = () => {
        this.sendBotMessage("Preparamos um brinde para você, que tal um mapa mental para te ajudar? Assim fica moleza né?!", { widget: 'mentalMap' })

        this.handleBackToOptions()
    };

    handleQuizRequest = () => {
        this.sendBotMessage("Agora, que tal testar os seus conhecimentos sobre os princípios do preparo radicular?",
            { widget: "quizOptions" }
        )
        this.handleBackToOptions()
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

    



    handleBackToOptions = () => {
        this.sendBotMessage(
            "Escolha uma das opções para que eu possa continuar lhe ajudando:",
            { widget: "learningOptions", delay: 2000 }
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