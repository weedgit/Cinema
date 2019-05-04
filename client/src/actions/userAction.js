import { FAVOURITE_CARD_ERROR, FAVOURITE_CARD_SUCCESS } from './actionTypes';
import Axios from 'axios';

export const ToggleFavouriteCard = (movieID) => {
    return async (dispatch) => {
        await Axios.patch('/api/users/:userID', movieID)
        .then(docs => dispatch({ type: FAVOURITE_CARD_SUCCESS, payload: docs.data }))
        .catch(error =>  dispatch({ type: FAVOURITE_CARD_ERROR, error }) );
    }
}