const initState = {
  value: 2,
};

const userReducer = (state = initState, action) => {
  // if (action.type === "POST_USERS") {
  //     const users = action.users
  //     return {
  //         ...state,
  //         users: users
  //     }
  // }
  // if (action.type === "LOGIN_STATUS") {
  //     const status = action.status
  //     return {
  //         ...state,
  //         isLoggedIn: status
  //     }
  // }
  // if (action.type === "SET_USER") {
  //     const user = action.user
  //     return {
  //         ...state,
  //         currentUser: user
  //     }
  // }
  // if (action.type === "RESET_STORE") {
  //     return {
  //         ...state,
  //         initState
  //     }
  // }

  return state;
};

export default userReducer;
