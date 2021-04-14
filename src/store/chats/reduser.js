import { ADD_CHAT, ADD_MESSAGE } from "./types";

const initialChats = {
  0: {
        chatName: "first Chat",
        messagesBot: ["I am bot", "I understand nothing", "buy"],
        chatMessages: [],
    },
  1: {
        chatName: "second Chat",
        messagesBot: ["Are you serious?", "show must go on!", "I know..."],
        chatMessages: [],
    },
  2: {
        chatName: "third Chat",
        messagesBot: ["I don't want to talk with you", "good night", "Hello"],
        chatMessages: [],
    },
};

export const chatsReduser = (state = initialChats, action) => {
  switch (action.type) {
    case ADD_CHAT:
        const idChat = Object.keys(state).length;
      return {
          ...state,
          [idChat]: {
            chatName: action.payload,
            messagesBot: state[idChat - 2].messagesBot,
            chatMessages: []
          }

      };
    case ADD_MESSAGE:
      return {
        ...state,
        [action.chatId]: {
            ...state[action.chatId],
            chatMessages: [
                ...state[action.chatId].chatMessages,
                { text: action.text, author: action.author }
            ]
        }
      };
    default:
      return state;
  }
};
