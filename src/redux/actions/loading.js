import {
    ON_LOADING
} from './types';

export const turnLoading = (loading) => async (dispatch) => {
    dispatch({
        type: ON_LOADING, payload: loading
    });
}
