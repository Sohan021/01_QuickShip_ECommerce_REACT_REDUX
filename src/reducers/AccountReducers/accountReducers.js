import {

    USER_PASSWORD_UPDATE_FAIL,
    USER_PASSWORD_UPDATE_SUCCESS,

    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,

    SIGNIN_FAIL,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,

    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,


    USER_PROFILE_UPDATE_FAIL,
    USER_PROFILE_UPDATE_SUCCESS,

    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,

    LOGOUT,
} from "../../constants/Account/accountConstants";

function userSigninReducer(state = {}, action) {

    switch (action.type) {
        case SIGNIN_REQUEST:
            return { loading: true };
        case SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case LOGOUT:
            return {};
        default: return state;
    }
}

function userListReducer(state = { users: [] }, action) {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true };
        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload };
        case USER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function userUpdateReducer(state = {}, action) {
    switch (action.type) {
        case USER_PROFILE_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function userProfileDetailsReducer(state = {}, action) {
    switch (action.type) {
        case USER_PROFILE_DETAILS_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function userUpdatePasswordReducer(state = {}, action) {
    switch (action.type) {
        case USER_PASSWORD_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_PASSWORD_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function userRegistrationReducer(state = {}, action) {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}


export {
    userRegistrationReducer,
    userUpdateReducer,
    userUpdatePasswordReducer,
    userProfileDetailsReducer,
    userSigninReducer,
    userListReducer
}
