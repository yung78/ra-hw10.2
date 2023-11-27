const initialState = { name: '', price: '', id: ''};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_SERVICE_FIELD':
      const {name, value} = action.payload;

      return {...state, [name]: value};
    case 'CANCEL_SERVICE':
      return initialState;
    default:
      return state;
  }
}
