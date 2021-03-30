import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import Cookie from 'js-cookie';
import { roleDeleteReducer, roleDetailsReducer, roleListReducer, roleSaveReducer, roleUpdateReducer } from './reducers/AccountReducers/roleReducers';
import { subCategoryDeleteReducer, subCategoryDetailsReducer, subCategoryListReducer, subCategorySaveReducer, subCategoryUpdateReducer } from './reducers/RegularReducers/subCategoriesReducers';
import { categoryDeleteReducer, categoryDetailsReducer, categoryListReducer, categorySaveReducer, categoryUpdateReducer } from './reducers/RegularReducers/categoryReducers';
import { userListReducer, userProfileDetailsReducer, userRegistrationReducer, userSigninReducer, userUpdatePasswordReducer, userUpdateReducer } from './reducers/AccountReducers/accountReducers';
import { productDeleteReducer, productDetailsReducer, productListByCategoryReducer, productListReducer, productSaveReducer, productUpdateReducer } from './reducers/RegularReducers/productReducers';
import { cartReducer } from './reducers/RegularReducers/cartReducers';
import { myOrderListReducer, orderCreateReducer, orderDeleteReducer, orderDetailsReducer, orderListReducer, orderPayReducer } from './reducers/RegularReducers/orderReducers';


const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;


const initialState = {
    cart: { cartItems },
    userSignIn: { userInfo },
};

const reducer = combineReducers({

    roleList: roleListReducer,
    roleDetails: roleDetailsReducer,
    roleSave: roleSaveReducer,
    roleUpdate: roleUpdateReducer,
    roleDelete: roleDeleteReducer,

    subCategoryList: subCategoryListReducer,
    subCategoryDetails: subCategoryDetailsReducer,
    subCategorySave: subCategorySaveReducer,
    subCategoryUpdate: subCategoryUpdateReducer,
    subCategoryDelete: subCategoryDeleteReducer,

    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    categorySave: categorySaveReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,

    productList: productListReducer,
    productListByCategory: productListByCategoryReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,

    cart: cartReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,

    userRegistrationReducer: userRegistrationReducer,
    userUpdateReducer: userUpdateReducer,
    userUpdatePasswordReducer: userUpdatePasswordReducer,
    userProfileDetailsReducer: userProfileDetailsReducer,
    userSignIn: userSigninReducer,
    userListReducer: userListReducer,

    form: formReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;