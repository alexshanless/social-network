const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
