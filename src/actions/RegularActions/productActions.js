import axios from 'axios'
import base from '../../Sevice/config';
import {

    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,

    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,


    PRODUCT_LIST_CATEGORY_FAIL,
    PRODUCT_LIST_CATEGORY_REQUEST,
    PRODUCT_LIST_CATEGORY_SUCCESS,

    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,
    PRODUCT_SAVE_FAIL,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL
} from '../../constants/Regular/productConstants';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/products/GetAllAsync");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}



const listProductsByCategory = (categoryId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_CATEGORY_REQUEST });
        const { data } = await axios.get(base + "/api/products/GetProductsByCategory/" + categoryId);
        dispatch({ type: PRODUCT_LIST_CATEGORY_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_CATEGORY_FAIL, payload: error.message });
    }
}

const saveProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
        const { data } = await axios.post(base + '/api/products/postasync', product)
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
}

const updateProduct = (product, productId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
        const { data } = await axios.put(base + '/api/products/putasync/' + productId, product)
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get(base + "/api/products/getoneasync/" + productId)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })
    }
}

const deleteProduct = (id) => async (dispatch, getState) => {

    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: id });
        const { data } = await axios.delete(base + "/api/products/deleteasync/" + id)
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });

    }
}


export {
    listProducts,
    listProductsByCategory,
    detailsProduct,
    saveProduct,
    updateProduct,
    deleteProduct,
}


