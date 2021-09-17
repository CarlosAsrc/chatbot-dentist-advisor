import React from "react";

import { ReactComponent as UserIcon } from "../icons/user-avatar.svg";

const UserAvatar = () => {
  return (
    <div className="react-chatbot-kit-user-avatar">
      <div className="react-chatbot-kit-user-avatar-container" style={{ backgroundColor: '#d8d8d8' }}>
        <UserIcon className="react-chatbot-kit-user-avatar-icon" />
      </div>
    </div>
  );
};

export default UserAvatar;