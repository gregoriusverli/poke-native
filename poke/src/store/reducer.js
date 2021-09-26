import {LIST_POKE, SET_LOADING} from './actionType';

const initialState = {
  listPokemon: [],
  loading: false,
};

export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      const setLoad = {
        ...state,
        loading: action.payload,
      };
      return setLoad;

    case LIST_POKE:
      const dataPoke = {
        ...state,
        listPokemon: action.payload,
      };
      return dataPoke;

    default:
      return state;
  }
}
