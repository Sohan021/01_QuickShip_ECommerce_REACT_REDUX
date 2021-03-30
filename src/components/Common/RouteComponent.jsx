import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import HomeScreen from './HomeScreenComponent';
import NavigationComponent from './NavigationComponent';

import RolesScreen from "../User/Role/RolesScreen";
import RoleCreateScreen from "../User/Role/RoleCreateScreen";
import RoleUpdateScreen from "../User/Role/RoleUpdateScreen";
import RoleDetailsScreen from "../User/Role/RoleDetailsScreen";
import SubCategoryScreen from "../Regular/SubCategory/SubCategoriesScreen";
import SubCategoryCreateScreen from "../Regular/SubCategory/SubCategoryCreateScreen";
import SubCategoryDetails from "../Regular/SubCategory/SubCategoryDetailsScreen";
import SubCategoryEditScreen from "../Regular/SubCategory/SubCategoryUpdateScreen";
import CategoryScreen from "../Regular/Category/CategoriesScreen";
import CategoryCreateScreen from "../Regular/Category/CategoryCreateScreen";
import CategoryDetails from "../Regular/Category/CategoryDetailsScreen";
import CategoryUpdateScreen from "../Regular/Category/CategoryUpdateScreen";
import SignUpScreen from "../User/Account/SignUpScreen";
import SigninScreen from "../User/Account/SignInScreen";
import ProductHomeScreen from "../Regular/Product/ProductHomeScreen";
import ProductCreateScreen from "../Regular/Product/ProductCreateScreen";
import ProductDetailsScreen from "../Regular/Product/ProductDetailsScreen";
import ProductsScreen from "../Regular/Product/ProductsScreen";
import ProductUpdateScreen from "../Regular/Product/ProductUpdateScreen";
import CartScreen from "../Regular/Cart/CartScreen";
import PlaceOrderScreen from "../Regular/Order/placeOrder";
import OrderDetails from "../Regular/Order/orderDetails";
import OrderListForCustomer from "../Regular/Order/orderListForCustomer";
import OrderListForAdmin from "../Regular/Order/orderListForAdmin";
import ProfileDetails from "../../components/User/Account/ProfileDetails";
import UpadatePasswordScreen from "../../components/User/Account/UpdatePassword";
import ProductCaregory from "../../components/Regular/Product/ProductCategory";
import ProductListByCategory from "../Regular/Product/ProductListByCategory";



const RouteComponemt = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}
    >
        <NavigationComponent toggleSidebar={toggleSidebar} />
        <Switch>
            <Route path="/" exact component={ProductHomeScreen} />

            <Route path="/roles" exact component={RolesScreen} />
            <Route path="/rolecreate" exact component={RoleCreateScreen} />
            <Route path="/roledetails/:id" exact component={RoleDetailsScreen} />
            <Route path="/roleupdate/:id" exact component={RoleUpdateScreen} />

            <Route path="/subcategories" exact component={SubCategoryScreen} />
            <Route path="/subcategorycreate" exact component={SubCategoryCreateScreen} />
            <Route path="/subcategorydetails/:id" exact component={SubCategoryDetails} />
            <Route path="/subcategoryedit/:id" exact component={SubCategoryEditScreen} />

            <Route path="/categories" exact component={CategoryScreen} />
            <Route path="/categorycreate" exact component={CategoryCreateScreen} />
            <Route path="/categorydetails/:id" exact component={CategoryDetails} />
            <Route path="/categoryedit/:id" exact component={CategoryUpdateScreen} />

            <Route path="/products" exact component={ProductHomeScreen} />
            <Route path="/productcreate" exact component={ProductCreateScreen} />
            <Route path="/productdetails/:id" exact component={ProductDetailsScreen} />
            <Route path="/productsadmin" exact component={ProductsScreen} />
            <Route path="/productedit/:id" exact component={ProductUpdateScreen} />
            <Route path="/productcategory" exact component={ProductCaregory} />
            <Route path="/productcategory/:id" exact component={ProductListByCategory} />

            <Route path="/cart/:id?" exact component={CartScreen} />
            {/* <Route path="/cart" exact component={CartScreenTwo} /> */}
            <Route path="/placeorder" exact component={PlaceOrderScreen} />

            <Route path="/orderList" exact component={OrderListForCustomer} />
            <Route path="/orderListforadmin" exact component={OrderListForAdmin} />
            <Route path="/orderDeatils/:id" exact component={OrderDetails} />

            <Route path="/signup" exact component={SignUpScreen} />
            <Route path="/signin" exact component={SigninScreen} />
            <Route path="/profiledetails" exact component={ProfileDetails} />
            <Route path="/passwordupdate" exact component={UpadatePasswordScreen} />




        </Switch>
    </Container>
);

export default RouteComponemt;

