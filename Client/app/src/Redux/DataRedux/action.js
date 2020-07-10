import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS
} from './type'
import axios from 'axios';

export const fetchUserRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,
    }
}

const fetchUserSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data

    }
}

const fetchUserFailure = error => {
    return {
              
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get(url)
            .then(res => {
                const data = res.data
                dispatch(fetchUserSuccess(data))
            })
            .catch(error => {
                const errMsg = error.message
                dispatch(fetchUserFailure(errMsg))
            })
    }
}