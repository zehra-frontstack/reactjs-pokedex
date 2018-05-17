import axios from 'axios';

import {
  GET_POKEMON,
  GET_POKEMONS,
  POKEMON_LOADING,
  CLEAR_CURRENT_POKEMON
} from './types';

// Get all pokemons
export const getAllPokemons = () => dispatch => {
    dispatch(setPokemonLoading());
    axios
        .get('/pokemon')
        .then(res =>
        dispatch({
            type: GET_POKEMONS,
            payload: res.data
        })
        )
        .catch(err =>
        dispatch({
            type: GET_POKEMONS,
            payload: null
        })
        );
};

// Get pokemon by id
export const getPokemonById = id => dispatch => {
    dispatch(setPokemonLoading());
    axios
      .get(`/pokemon/${id}/`)
      .then(res =>
        dispatch({
          type: GET_POKEMON,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_POKEMON,
          payload: null
        })
      );
};

// Pokemons loading
export const setPokemonLoading = () => {
    return {
      type: POKEMON_LOADING
    };
  };
  
// Clear pokemon selection
export const clearCurrentPokemon = () => {
    return {
      type: CLEAR_CURRENT_POKEMON
    };
};