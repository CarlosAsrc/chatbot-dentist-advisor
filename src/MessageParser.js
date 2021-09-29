class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()

    if (
      lowerCaseMessage.includes("oi") ||
      lowerCaseMessage.includes("ola") ||
      lowerCaseMessage.includes("olá") ||
      lowerCaseMessage.includes("opa")
    ) {
      this.actionProvider.greet()
      return
    }

    if (
      lowerCaseMessage.includes("tchau")
    ) {
      this.actionProvider.bye()
      return
    }

    if (
      lowerCaseMessage.includes("obrigad")
    ) {
      this.actionProvider.handleThanks()
      return
    }
    

    if (lowerCaseMessage.includes("seu nome")) {
      this.actionProvider.yourNameQuestion()
      return
    }

    if (lowerCaseMessage.includes("mapa mental")) {
      this.actionProvider.handleMentalMap()
      return
    }

    if (lowerCaseMessage.includes("quiz")) {
      this.actionProvider.handleQuizRequest()
      return
    }

    if (lowerCaseMessage.includes("site")) {
      this.actionProvider.handleSitesTips()
      return
    }

    if (
      lowerCaseMessage.includes("principio") ||
      lowerCaseMessage.includes("princípio")
    ) {
      this.actionProvider.handlePrinciples()
      return
    }

    if (
      lowerCaseMessage.includes("videoaula") ||
      lowerCaseMessage.includes("video aula")
    ) {
      this.actionProvider.handleVideoLessonsTips()
      return
    }

    if (lowerCaseMessage.includes("livro")) {
      this.actionProvider.handleBooksTips()
      return
    }

    if (lowerCaseMessage.includes("artigo")) {
      this.actionProvider.handleArticlesTips()
      return
    }

    this.actionProvider.cannotUnderstandMessage()
  }
}

export default MessageParser