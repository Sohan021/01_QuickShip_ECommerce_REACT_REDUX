import Axios from "axios";
import Cookie from 'js-cookie';
import base from "../../Sevice/config";
import {
    USER_PASSWORD_UPDATE_FAIL,
    USER_PASSWORD_UPDATE_REQUEST,
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
    USER_PROFILE_UPDATE_REQUEST,
    USER_PROFILE_UPDATE_SUCCESS,

    USER_PROFILE_DETAILS_REQUEST,
    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,

    LOGOUT,
} from "../../constants/Account/accountConstants";

const userUpdate = (currentuser, firstname, lastname, profilephoto, email, mobilenumber) => async (dispatch, getState) => {
    const { userSignin: { userInfo } } = getState();
    dispatch({
        type: USER_PROFILE_UPDATE_REQUEST, payload: { currentuser, firstname, lastname, profilephoto, email, mobilenumber }
    });
    try {
        const { data } = await Axios.put(base + "/api/account/profileUpdate",
            { currentuser, firstname, lastname, profilephoto, email, mobilenumber }, {
            headers: {
                Authorization: 'Bearer ' + userInfo.item2
            }
        });
        dispatch({ type: USER_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}

const userPasswordUpdate = (currentuserId, currentPassword, newPassword, confirmPassword) => async (dispatch, getState) => {
    dispatch({
        type: USER_PASSWORD_UPDATE_REQUEST, payload: { currentuserId, currentPassword, newPassword, confirmPassword }
    });
    try {
        const { data } = await Axios.put(base + "/api/account/changepassword",
            { currentuserId, currentPassword, newPassword, confirmPassword });
        dispatch({ type: USER_PASSWORD_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_PASSWORD_UPDATE_FAIL, payload: error.message });
    }
}
const userProfileDetail = (currentuserId) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_PROFILE_DETAILS_REQUEST, payload: currentuserId });
        const { data } = await Axios.get(base + "/api/account/profile/" + currentuserId);
        dispatch({ type: USER_PROFILE_DETAILS_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_PROFILE_DETAILS_FAIL, payload: error.message });
    }
}
const userList = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST });
        const { data } = await Axios.get(base + "/api/account/getCustomers");
        dispatch({ type: USER_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: USER_LIST_FAIL, payload: error.message });
    }
}
const userRegister = (firstname, mobilenumber, email, password, confirmPassword) => async (dispatch, getState) => {
    dispatch({
        type: USER_REGISTER_REQUEST, payload: { firstname, mobilenumber, email, password, confirmPassword }
    });
    try {
        const { data } = await Axios.post(base + "/api/account/signup", { firstname, mobilenumber, email, password, confirmPassword });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
}
const signIn = (mobilenumber, password) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    dispatch({ type: SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {
        const { data } = await Axios.post(base + "/api/account/signin", { mobilenumber, password });
        Cookie.set('userInfo', JSON.stringify(data));
        dispatch({ type: SIGNIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SIGNIN_FAIL, payload: error.message });
    }
}
const userSignOut = () => (dispatch, getState) => {
    const { cart: { cartItems } } = getState();
    Cookie.remove("userInfo");
    Cookie.remove("cartItems", JSON.stringify(cartItems));
    dispatch({ type: LOGOUT })
}

export { userUpdate, userRegister, userPasswordUpdate, userProfileDetail, userSignOut, signIn, userList, };