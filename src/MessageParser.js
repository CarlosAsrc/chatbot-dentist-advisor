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

    if (
      lowerCaseMessage.includes("principios") ||
      lowerCaseMessage.includes("princípios")
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