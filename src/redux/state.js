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
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("state changed");
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
