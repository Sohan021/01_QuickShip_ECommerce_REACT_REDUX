import axios from 'axios'
import base from '../../Sevice/config';
import {
    CATEGORY_DELETE_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DETAILS_FAIL,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_SAVE_FAIL,
    CATEGORY_SAVE_REQUEST,
    CATEGORY_SAVE_SUCCESS,
    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS
} from '../../constants/Regular/categoryConstants';

const listCategories = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/categories");
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
}

const saveCategory = (category) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_SAVE_REQUEST, payload: category });
        const { data } = await axios.post(base + '/api/categories', category)
        dispatch({ type: CATEGORY_SAVE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CATEGORY_SAVE_FAIL, payload: error.message });
    }
}

const updateCategory = (category, categoryId) => async (dispatch) => {

    try {
        dispatch({ type: CATEGORY_UPDATE_REQUEST, payload: category });
        const { data } = await axios.put(base + '/api/categories/' + categoryId, category)
        dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: CATEGORY_SAVE_FAIL, payload: error.message });
    }
}

const detailsCategory = (categoryId) => async (dispatch) => {

    try {
        dispatch({ type: CATEGORY_DETAILS_REQUEST, payload: categoryId });
        const { data } = await axios.get(base + "/api/categories/" + categoryId)
        dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: CATEGORY_DETAILS_FAIL, payload: error.message })
    }
}

const deleteCategory = (categoryId) => async (dispatch, getState) => {

    try {
        dispatch({ type: CATEGORY_DELETE_REQUEST, payload: categoryId });
        const { data } = await axios.delete(base + "/api/categories/" + categoryId)
        dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: CATEGORY_DELETE_FAIL, payload: error.message });

    }
}

export { listCategories, detailsCategory, saveCategory, updateCategory, deleteCategory }


