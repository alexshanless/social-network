const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = "";
      stateCopy.messages.push({ id: 7, message: body });
      return stateCopy;
    }
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
