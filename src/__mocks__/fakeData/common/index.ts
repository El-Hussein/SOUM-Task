export const invalidAction = {
  type: 'INVALID_ACTION',
  payload: {},
};

export const failureResponse = Promise.reject({
  error: {
    message: 'moke error message',
    type: 'moke error type',
    code: 400,
  },
});
