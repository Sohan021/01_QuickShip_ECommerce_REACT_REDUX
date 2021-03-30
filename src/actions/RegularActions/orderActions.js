import axios from "axios";
import Cookie from "js-cookie";
import base from "../../Sevice/config";
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,

    MY_ORDER_LIST_REQUEST,
    MY_ORDER_LIST_SUCCESS,
    MY_ORDER_LIST_FAIL,

    ORDER_DELETE_REQUEST,
    ORDER_DELETE_SUCCESS,
    ORDER_DELETE_FAIL,

    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL
} from "../../constants/Regular/orderConstants";

const createOrder = (currentUserId, amount, products) => async (dispatch, getState) => {
    const { cart: { cartItems } } = getState();
  
    try {
        dispatch({ type: ORDER_CREATE_REQUEST, payload: { currentUserId, amount, products } });
        const { data } = await axios.post(base + "/api/order/checkout", { currentUserId, amount, products });
        Cookie.remove("cartItems", JSON.stringify(cartItems));
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
    }
}

const listMyOrders = (id) => async (dispatch, getState) => {
   
    try {
        dispatch({ type: MY_ORDER_LIST_REQUEST, payload: id });
        const { data } = await axios.get(base + "/api/order/OrderListCustomer/" + id);
        dispatch({ type: MY_ORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: MY_ORDER_LIST_FAIL, payload: error.message });
    }
}

const listOrders = () => async (dispatch, getState) => {
    debugger
    try {
        dispatch({ type: ORDER_LIST_REQUEST });
        // const { userSignin: { userInfo } } = getState();
        const { data } = await axios.get(base + "/api/order/OrderList");
        dispatch({ type: ORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
    }
}

const detailsOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST, payload: id });
        const { data } = await axios.get(base + "/api/order/orderDetails/" + id);
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
    }
}

const payOrder = (order, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_PAY_REQUEST, payload: paymentResult });
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.put(base + "/api/orders/" + order._id + "/pay", paymentResult, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: ORDER_PAY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
    }
}

const deleteOrder = (orderId) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DELETE_REQUEST, payload: orderId });
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.delete(base + "/api/orders/" + orderId, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: ORDER_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ORDER_DELETE_FAIL, payload: error.message });
    }
}
export {
    createOrder,
    detailsOrder,
    payOrder,
    listMyOrders,
    listOrders,
    deleteOrder
};