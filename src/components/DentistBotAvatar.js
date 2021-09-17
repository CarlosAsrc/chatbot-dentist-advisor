import React from "react";

import { ReactComponent as DentistIcon } from "../icons/bot-avatar.svg";

const DentistBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <DentistIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default DentistBotAvatar;