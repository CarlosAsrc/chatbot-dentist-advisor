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

    bye() {
        this.sendBotMessage("Até logo! 😃", {})
    }


    handlePrinciples = () => {
        this.sendBotMessage("Que saber mais? Confira esses resumos que preparamos para você!", { widget: 'summariesPDF' })
    };


    handleMentalMap = () => {
        this.sendBotMessage("Preparamos um brinde para você, que tal um mapa mental para te ajudar? Assim fica moleza né?!", { widget: 'mentalMap' })
    };

    handleQuizRequest = () => {
        this.sendBotMessage("Que tal testar os seus conhecimentos sobre os princípios do preparo radicular?",
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
        this.sendBotMessage("Segue algumas dicas de livros referências sobre o assunto:", {})

        this.sendBotMessage("LOPES, H.P.; SIQUEIRA JÚNIOR, J.F. Endodontia: biologia e técnica. 3. ed., Rio de Janeiro: Guanabara Koogan, 2015.", {})
        this.sendBotMessage("TORABINEJAD, M. & WALTON R. E. Endodontia Princípios e Prática. Trad. 4ª. Ed. Elsevier Editora ltda. Rio de Janeiro, 2010. 474p.",  {})
        this.sendBotMessage("LEONARDO, MÁRIO ROBERTO. Endodontia: Tratamento de Canais Radiculares  Princípios Técnicos e Biológicos .Volume 1. Ed. Artes médicas. São Paulo, 2008.", {})
        this.sendBotMessage("ESTRELA, Carlos. Endodontia laboratorial e clínica. São Paulo: Artes Médicas, 2013.", {})
        this.sendBotMessage("BIBLIOGRAFIA: 1. ESTRELA, C. Ciência Endodôntica. São Paulo: Artes Médicas, 2004.", { widget: 'booksLinks' })
    }

    handleArticlesTips = () => {
        this.sendBotMessage("Segue algumas dicas de artigos para se manter atualizado:", { widget: 'articlesLinks' })
    }
    
    handleSitesTips = () => {
        this.sendBotMessage("Olha so este excelente site de ensino e pesquisa em Ciência Edondôntica:", { widget: 'sitesLinks' })
    }

    handleThanks = () => {
        this.sendBotMessage("Espero que tenha ajudado, obrigada, e até logo! 😃", {})
    }

    handleYes = () => {
        this.sendBotMessage("Aqui está o link do quiz:", { widget: "quizOptions" })
    }

    handleNo = () => {
        this.sendBotMessage("Aqui estão algumas sugestões para que você se aprofunde no assunto:", { widget: "learningOptions" })
    }

    



    handleBackToOptions = () => {
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