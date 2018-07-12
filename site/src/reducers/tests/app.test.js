import app from '../app.js';

const initialState = {
  userHasSeenWelcomeModal: false,
};

test('User has seen welcome modal', () => {
  const action = {type: 'USER_HAS_SEEN_MODAL'};
  const expectedState = {
    userHasSeenWelcomeModal: true,
  };
  expect(app(initialState, action)).toEqual(expectedState);
});

test('User has not seen welcome modal', () => {
  const newState = {
    userHasSeenWelcomeModal: true,
  };
  const action = {type: 'USER_HAS_NOT_SEEN_MODAL'};
  const expectedState = {
    userHasSeenWelcomeModal: false,
  };
  expect(app(newState, action)).toEqual(expectedState);
});
