import {FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from './type';
import axios from 'axios';

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

const fetchDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchDataRequest)
        axios.get(url)
            .then(res => {
                const data = res.data
                dispatch(fetchDataSuccess(data))
            })
            .catch(error => {
                const errMsg = error.message;
                dispatch(fetchDataFailure(errMsg))
            })
    }
}