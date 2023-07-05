import React from "react";
import Sidebar from "./Components/sidebar";
import ChatPage from "./Components/chatPage";
import users from "./data/userData";
import conversations from "./data/conversationData";
import chats from "./data/chatData";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateCurrentConversation = this.updateCurrentConversation.bind(this);
    this.updateCurrentChats = this.updateCurrentChats.bind(this);
  }
  state = {
    users: users,
    conversations: conversations,
    currentUser: {
        _id: 0,
        name: 'Ankit',
    },
    currentConversation: {
      _id: 0,
      name: "Ankit",
      users: [0],
    },
    currentChats: [
      {
        _id: 0,
        content: "hi",
        conversation_id: 0,
        user_id: 0,
        user_name: "Ankit",
        created_at: Date().toLocaleString(),
      },
      {
        _id: 1,
        content: "this is my space",
        conversation_id: 0,
        user_id: 0,
        user_name: "Ankit",
        created_at: Date().toLocaleString(),
      },
    ],
  };

  updateCurrentConversation(conversation) {
    this.setState({
      currentConversation: conversation,
    });
    this.updateCurrentChats(conversation._id);
  }

  updateCurrentChats(conversationId) {
    const currentChats = chats.filter((chat) => {
      return conversationId === chat.conversation_id;
    });
    this.setState({
      currentChats: currentChats,
    });
  }

  render() {
    return (
      <>
        <div className="row vh-100">
          <div className="col-3">
            <Sidebar
              currentUser={this.state.currentUser}
              conversations={this.state.conversations}
              updateCurrentConversation={this.updateCurrentConversation}
            />
          </div>
          <div className="col-9">
            <ChatPage
              currentUser={this.state.currentUser}
              currentConversation={this.state.currentConversation}
              currentChats={this.state.currentChats}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
