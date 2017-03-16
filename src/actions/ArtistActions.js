import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

export const fetchArtistSuccess = (artist) => {
  return {
    type: types.FETCH_ARTIST_SUCCESS,
    artist
  };
};

const spotify = (id) => {
  return fetch(`//api.spotify.com/v1/albums/${id}`)
    .then(response => {
      return response.json();
    })
    .then(({ album_type, artists }) => ({ album_type, artists}))
    .catch(error => {
      throw error;
    });
};

export const fetchArtists = (id) => {
  return (dispatch) => {
    dispatch(spotify(id));
  };
};
