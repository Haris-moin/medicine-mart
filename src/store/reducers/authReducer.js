const authState = {
  isUserLoggedIn: false,
};

const authReducer = (state = authState, action) => {
  if (action.type === 'IS_USER_SIGN_IN') {
    console.log('!!action.id: ', !!action.id);
    state.isUserLoggedIn = !!action.id;
    return {...state};
  } else {
    return state;
  }
};

export default authReducer;
