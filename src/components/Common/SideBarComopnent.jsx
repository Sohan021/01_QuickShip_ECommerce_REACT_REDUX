import React, { useEffect } from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function SideBar({ isOpen, toggle }) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    useEffect(() => {

        return () => {
            //
        }
    }, [])

    return (

        <div className={classNames("sidebar", { "is-open": isOpen })}>

            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
                </span>
                <h3>Quick Ship</h3>
            </div>
            {userInfo.item2.name == "Admin" ? (
                <div className="side-menu">
                    <Nav className="list-unstyled pb-3">
                        
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                             
                        <NavItem>
                            <NavLink tag={Link} to={"/categories"}>
                                Category
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/subcategories"}>
                                SubCategory
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to={"/products"}>
                                ProductList
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/productsadmin"}>
                                Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/productcreate"}>
                                Create Product
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/orderListforadmin"}>
                                Order List
                            </NavLink>
                        </NavItem>
                      
                        <NavItem>
                            <NavLink tag={Link} to={"/roles"}>
                                Application_Role
                            </NavLink>
                        </NavItem>
                      

                    </Nav>
                </div>
            ) : (
                    <h1> </h1>
                )
            }


            {userInfo.item2.name == "Customer" ? (
                <div className="side-menu">
                    <Nav  className="list-unstyled pb-3">
                     
                        {/* <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/products"}>
                                ProductList
                            </NavLink>
                        </NavItem> */}
                   

                    </Nav>

                </div>) :
                (<h1></h1>)

            }
        </div>
    );
}






export default SideBar;
