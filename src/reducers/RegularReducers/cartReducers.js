import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING,
    CART_SAVE_PAYMENT
} from "../../constants/Regular/cartConstants";


function cartReducer(state = { cartItems: [], shipping: {}, payment: {} }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const id = state.cartItems.find(x => x.id === item.id);
            if (id) {
                return {
                    cartItems:
                        state.cartItems.map(x => x.id === id.id ? item : x)
                };
            }
            return { cartItems: [...state.cartItems, item] };
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x => x.id !== action.payload) };
        case CART_SAVE_SHIPPING:
            return { ...state, shipping: action.payload };
        case CART_SAVE_PAYMENT:
            return { ...state, payment: action.payload };
        default:
            return state
    }
}
export { cartReducer }