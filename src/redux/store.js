import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "sup, catbro?", likesCount: 12 },
        { id: 2, message: "First post , sup?", likesCount: 35 },
      ],
      newPostText: "social-network",
    },
    messagePage: {
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
    },
    
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

// export const addPostActionCreator = () => ({
//   type: "ADD-POST",
// });

// export const updateNewPostTextActionCreator = (text) => ({
//   type: "UPDATE-NEW-POST-TEXT",
//   newText: text,
// });

// export const sendMessageCreator = () => ({ type: "SEND-MESSAGE" });
// export const updateNewMessageBodyCreator = (body) => ({
//   type: "UPDATE-NEW-MESSAGE-BODY",
//   body: body,
// });

export default store;
window.store = store;
