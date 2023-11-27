import {nanoid} from 'nanoid';

const initialState = {
  state: [
    {id: nanoid(), name: 'Замена стекла', price: 5000},
    {id: nanoid(), name: 'Установка стекла', price: 1500},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
    {id: nanoid(), name: 'Замена АКБ', price: 12000},
    {id: nanoid(), name: 'Замена кнопки уровня звука', price: 8000},
    {id: nanoid(), name: 'Перенос данных', price: 3000},
  ],
  filtred: [],
};

export default function serviceListReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_SERVICE': {
      const {name, price, id} = action.payload;

      const edit = (statePart) => {
        return statePart.map((el) => {
          if (el.id === id) {
            return {...el, name: name, price: Number(price)}
          }

          return el;
        });
      }

      if (id) {
        return {
          state: edit([...state.state]),
          filtred: edit([...state.filtred]) || [],
        };
      }

      return {
        state: [...state.state, {id: nanoid(), name, price: Number(price)}],
        filtred: state.filtred,
      };
    }
    case 'REMOVE_SERVICE': {
      const {id} = action.payload;
      const remove = (statePart) => statePart.filter(service => service.id !== id)

      return {
        state: remove(state.state),
        filtred: remove(state.filtred) || [],
      };
    }
    case 'SEARCH_SERVICE': {
      const { search } = action.payload;

      if (search) {
        return {
          ...state,
          filtred: [...state.state].filter((el) => el.name.toLowerCase().includes(search.toLowerCase())),
        };
      }

      return {
        ...state,
        filtred: [],
      };
    }

    default: {
      return state;
    }
  }
}
