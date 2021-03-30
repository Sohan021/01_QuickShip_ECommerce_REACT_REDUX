import {
    CATEGORY_DELETE_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,

    CATEGORY_DETAILS_FAIL,
    CATEGORY_DETAILS_SUCCESS,

    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,

    CATEGORY_SAVE_FAIL,
    CATEGORY_SAVE_REQUEST,
    CATEGORY_SAVE_SUCCESS,

    CATEGORY_UPDATE_FAIL,
    CATEGORY_UPDATE_SUCCESS
} from "../../constants/Regular/categoryConstants";

let initialState = {
    category: false

}

function categoryListReducer(state = { categories: [] }, action) {

    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true };
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload };
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function categoryDetailsReducer(state = { category: false }, action) {

    switch (action.type) {
        case CATEGORY_DETAILS_SUCCESS:
            return { loading: false, category: action.payload };
        case CATEGORY_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function categoryDeleteReducer(state = { category: {} }, action) {

    switch (action.type) {
        case CATEGORY_DELETE_REQUEST:
            return { loading: true };
        case CATEGORY_DELETE_SUCCESS:
            return { loading: false, category: action.payload, success: true };
        case CATEGORY_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function categorySaveReducer(state = initialState, action) {

    switch (action.type) {
        case CATEGORY_SAVE_REQUEST:
            return { loading: true };
        case CATEGORY_SAVE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case CATEGORY_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function categoryUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case CATEGORY_UPDATE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case CATEGORY_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { categoryListReducer, categoryDetailsReducer, categoryDeleteReducer, categoryUpdateReducer, categorySaveReducer }