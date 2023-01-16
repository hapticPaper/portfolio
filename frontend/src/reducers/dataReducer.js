const initialState = {};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default dataReducer;
