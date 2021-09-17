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

    if (lowerCaseMessage.includes("senha")) {
      this.actionProvider.passwordMatch()
      return
    }

    this.actionProvider.cannotUnderstandMessage()
  }
}

export default MessageParser