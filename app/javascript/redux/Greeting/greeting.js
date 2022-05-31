const GET_MESSAGES = "messages/GET_MESSAGES";

const initialState = "Greetings";

export const getMessages = (payload) => ({
  type: GET_MESSAGES,
  payload,
});

export const getMessageFromAPI = () => async (dispatch) => {
  await fetch("v1/messages.json")
    .then((response) => response.json())
    .then((json) => {
      dispatch(getMessages(json.message));
      console.log(json.message);
    })
    .catch((e) => {
      console.log(e);
    });
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default messageReducer;
