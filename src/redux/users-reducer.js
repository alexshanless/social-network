const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";



let initialState = {

  users: [
    // {
    //   id: 1,
    //   photoUrl : 'https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg',
    //   followed: true,
    //   fullname: "Dima",
    //   status: "Wassup, yo!",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 2,
    //   photoUrl : 'https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg',
    //   followed: false,
    //   fullname: "Apex",
    //   status: "Wassup, yo!",
    //   location: { city: "Athena", country: "Greece" },
    // },
    // {
    //   id: 3,
    //   photoUrl : 'https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg',
    //   followed: false,
    //   fullname: "Anna",
    //   status: "Cimislia is the best",
    //   location: { city: "Sea", country: "Usa" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
