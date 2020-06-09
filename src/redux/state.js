let rerenderEntireTree = () => {
  console.log("state changed");
};

let state = {
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
};
export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) =>{
  rerenderEntireTree = observer;
}

export default state;
