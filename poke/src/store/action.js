import {LIST_POKE, SET_LOADING} from './actionType';
const baseUrl = `https://pokeapi.co/api/v2`;
export function setLoading(load) {
  const thisLoad = {
    type: SET_LOADING,
    payload: load,
  };
  return thisLoad;
}

export function setListPokemon(data) {
  const dataPoke = {
    type: LIST_POKE,
    payload: data,
  };
  return dataPoke;
}

export function fetchListPoke() {
  return async function (dispatch, getState) {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`${baseUrl}/pokemon?&limit=100`);
      if (response.ok) {
        const {results} = await response.json();

        dispatch(setListPokemon(results));
      } else {
        throw Error;
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}
