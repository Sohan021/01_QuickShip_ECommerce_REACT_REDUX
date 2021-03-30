import axios from 'axios'
import base from '../../Sevice/config';
import {
    SUB_CATEGORY_DELETE_FAIL,
    SUB_CATEGORY_DELETE_REQUEST,
    SUB_CATEGORY_DELETE_SUCCESS,
    SUB_CATEGORY_DETAILS_FAIL,
    SUB_CATEGORY_DETAILS_REQUEST,
    SUB_CATEGORY_DETAILS_SUCCESS,
    SUB_CATEGORY_LIST_FAIL,
    SUB_CATEGORY_LIST_REQUEST,
    SUB_CATEGORY_LIST_SUCCESS,
    SUB_CATEGORY_SAVE_FAIL,
    SUB_CATEGORY_SAVE_REQUEST,
    SUB_CATEGORY_SAVE_SUCCESS,
    SUB_CATEGORY_UPDATE_REQUEST,
    SUB_CATEGORY_UPDATE_SUCCESS
} from '../../constants/Regular/subCategoryConstants';

const listSubCategories = () => async (dispatch) => {
    try {
        dispatch({ type: SUB_CATEGORY_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/SubCategories");
        dispatch({ type: SUB_CATEGORY_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: SUB_CATEGORY_LIST_FAIL, payload: error.message });
    }
}


const saveSubCategory = (subCategory) => async (dispatch) => {
    try {
        dispatch({ type: SUB_CATEGORY_SAVE_REQUEST, payload: subCategory });
        const { data } = await axios.post(base + '/api/SubCategories', subCategory)
        dispatch({ type: SUB_CATEGORY_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: SUB_CATEGORY_SAVE_FAIL, payload: error.message });
    }
}

const updateSubCategory = (subCategory, subCategoryId) => async (dispatch) => {

    try {
        dispatch({ type: SUB_CATEGORY_UPDATE_REQUEST, payload: subCategory });
        const { data } = await axios.put(base + '/api/SubCategories/' + subCategoryId, subCategory)
        dispatch({ type: SUB_CATEGORY_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: SUB_CATEGORY_SAVE_FAIL, payload: error.message });
    }
}

const detailsSubCategory = (subCategoryId) => async (dispatch) => {

    try {
        dispatch({ type: SUB_CATEGORY_DETAILS_REQUEST, payload: subCategoryId });
        const { data } = await axios.get(base + "/api/SubCategories/" + subCategoryId)
        dispatch({ type: SUB_CATEGORY_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SUB_CATEGORY_DETAILS_FAIL, payload: error.message })
    }
}

const deleteSubCategory = (subCategoryId) => async (dispatch, getState) => {

    try {
        dispatch({ type: SUB_CATEGORY_DELETE_REQUEST, payload: subCategoryId });
        const { data } = await axios.delete(base + "/api/SubCategories/" + subCategoryId)
        dispatch({ type: SUB_CATEGORY_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: SUB_CATEGORY_DELETE_FAIL, payload: error.message });

    }
}

export { listSubCategories, detailsSubCategory, saveSubCategory, updateSubCategory, deleteSubCategory }


