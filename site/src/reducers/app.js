const initialState = {
  userHasSeenWelcomeModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_HAS_SEEN_MODAL':
      return {
        ...state,
        userHasSeenWelcomeModal: true,
      };
    case 'USER_HAS_NOT_SEEN_MODAL':
      return {
        ...state,
        userHasSeenWelcomeModal: false,
      };
    default:
      return state;
  }
};
