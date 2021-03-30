import {
    SUB_CATEGORY_DELETE_FAIL,
    SUB_CATEGORY_DELETE_REQUEST,
    SUB_CATEGORY_DELETE_SUCCESS,

    SUB_CATEGORY_DETAILS_FAIL,
    SUB_CATEGORY_DETAILS_SUCCESS,

    SUB_CATEGORY_LIST_FAIL,
    SUB_CATEGORY_LIST_REQUEST,
    SUB_CATEGORY_LIST_SUCCESS,

    SUB_CATEGORY_SAVE_FAIL,
    SUB_CATEGORY_SAVE_REQUEST,
    SUB_CATEGORY_SAVE_SUCCESS,

    SUB_CATEGORY_UPDATE_FAIL,
    SUB_CATEGORY_UPDATE_SUCCESS
} from "../../constants/Regular/subCategoryConstants";

let initialState = {
    subCategory: false

}

function subCategoryListReducer(state = { subCategories: [] }, action) {

    switch (action.type) {
        case SUB_CATEGORY_LIST_REQUEST:
            return { loading: true };
        case SUB_CATEGORY_LIST_SUCCESS:
            return { loading: false, subCategories: action.payload };
        case SUB_CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function subCategoryDetailsReducer(state = { subCategory: false }, action) {

    switch (action.type) {
        case SUB_CATEGORY_DETAILS_SUCCESS:
            return { loading: false, subCategory: action.payload };
        case SUB_CATEGORY_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function subCategoryDeleteReducer(state = { subCategory: {} }, action) {

    switch (action.type) {
        case SUB_CATEGORY_DELETE_REQUEST:
            return { loading: true };
        case SUB_CATEGORY_DELETE_SUCCESS:
            return { loading: false, subCategory: action.payload, success: true };
        case SUB_CATEGORY_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function subCategorySaveReducer(state = initialState, action) {

    switch (action.type) {
        case SUB_CATEGORY_SAVE_REQUEST:
            return { loading: true };
        case SUB_CATEGORY_SAVE_SUCCESS:
            return { loading: false, success: true, subCategory: action.payload };
        case SUB_CATEGORY_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function subCategoryUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case SUB_CATEGORY_UPDATE_SUCCESS:
            return { loading: false, success: true, subCategory: action.payload };
        case SUB_CATEGORY_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    subCategoryListReducer,
    subCategoryDetailsReducer,
    subCategoryDeleteReducer,
    subCategoryUpdateReducer,
    subCategorySaveReducer
}