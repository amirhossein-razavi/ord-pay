import {
    ON_NOTIFICATION
} from './types';

export const turnNotification = ({ title, description, duration, show, type }) => async (
    dispatch
) => {
    dispatch({
        type: ON_NOTIFICATION, payload: {
            title,
            description,
            duration,
            show,
            type
        }
    });
}

