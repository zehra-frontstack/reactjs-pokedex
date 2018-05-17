import {
    GET_POKEMON,
    GET_POKEMONS,
    POKEMON_LOADING,
    CLEAR_CURRENT_POKEMON
  } from '../actions/types';
  
  const initialState = {
    pokemon: null,
    pokemons: null,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case POKEMON_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_POKEMON:
        return {
          ...state,
          pokemon: action.payload,
          loading: false
        };
      case GET_POKEMONS:
        return {
          ...state,
          pokemons: action.payload,
          loading: false
        };
      case CLEAR_CURRENT_POKEMON:
        return {
          ...state,
          pokemon: null
        };
      default:
        return state;
    }
  }
  