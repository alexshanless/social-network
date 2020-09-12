const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Marianna" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Sergey" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Max" },
    { id: 6, name: "Pushok" },
  ],
  messages: [
    { id: 1, message: "sup, catbro?" },
    { id: 2, message: "sup, catbro?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Anton" },
    { id: 5, message: "Max" },
    { id: 6, message: "Pushok" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
