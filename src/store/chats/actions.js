import { ADD_CHAT, ADD_MESSAGE } from "./types";

export const addChat = (newName) => ({
  type: ADD_CHAT,
  payload: newName,
});

export const addMessage = (text, author, chatId) => ({
    type: ADD_MESSAGE,
    text,
    author,
    chatId,
  });