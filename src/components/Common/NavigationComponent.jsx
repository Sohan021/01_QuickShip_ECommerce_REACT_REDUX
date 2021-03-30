import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { userSignOut } from '../../actions/AccountActions/accountActions'


const NavigationComponent = ({ toggleSidebar, props }) => {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        }
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(userSignOut());
    }
    
    return (
        <Navbar
            color="#fff"
            style={{ backgroundColor: "#1FC46C", height: "60px" }}
            light
            className="navbar"
            expand="md"
            fixed="top"
        >
            <Button color="dark" onClick={toggleSidebar}>
                Q
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>

                <Nav>
                    <NavLink style={{ color: "#fff" }} href="/products"><h1>Quick Ship</h1></NavLink>
                </Nav>

                {userInfo ? (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                width: "130px",
                                textAlign: "center"
                            }} href="/products"><h5>Products</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#1FC46C",
                                borderRadius: 10,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                width: "130px",
                                textAlign: "center"
                            }} href="/productcategory"><h5>Category</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#1FC46C",
                                borderRadius: 10,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#1FC46C",
                                borderRadius: 10,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#1FC46C",
                                borderRadius: 10,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#1FC46C",
                                borderRadius: 10,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                width: "130px",
                                textAlign: "center"
                            }} href="/cart"><h5>Cart</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#1FC46C",
                                borderRadius: 10,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                width: "200px",
                                textAlign: "center"
                            }} href="/orderList"><h5>Order_List</h5></NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 20,
                                width: "100px",
                                textAlign: "center"
                            }} href="/roles"><h5>Role</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 20,
                                width: "100px",
                                textAlign: "center"
                            }} href="/productsadmin"><h5>ProductAdmin</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 20,
                                width: "100px",
                                textAlign: "center"
                            }} href="/products"><h5>Product</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                borderRadius: 20,
                                width: "20px",
                                textAlign: "center"
                            }} href="/roles"></NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#1FC46C",
                                borderRadius: 10,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                width: "100px",
                                textAlign: "center"
                            }} href="/profiledetails"><h5>{userInfo.item1.firstName} </h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#1FC46C",
                                borderRadius: 10,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                width: "100px",
                                textAlign: "center"
                            }} onClick={handleLogout} href="/signin"><h5>Logout </h5></NavLink>
                        </NavItem>
                    </Nav>

                ) : (
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={{
                                    color: "#1FC46C",
                                    backgroundColor: "#fff",
                                    borderRadius: 0,
                                    width: "100px",
                                    textAlign: "center"
                                }} href="/SignIn"><h5>SignIn</h5></NavLink>
                            </NavItem>

                        </Nav>
                    )}

                {/* {userInfo.item2.name == "Customer" ? (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/profile"><h5>Customer</h5></NavLink>
                        </NavItem>

                    </Nav>
                ) : (
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={{
                                    color: "#1FC46C",
                                    backgroundColor: "#fff",
                                    borderRadius: 0,
                                    width: "100px",
                                    textAlign: "center"
                                }} href="/SignIn"><h5>SignIn</h5></NavLink>
                            </NavItem>

                        </Nav>
                    )} */}


                {/* <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink style={{
                            color: "#1FC46C",
                            backgroundColor: "#fff",
                            borderRadius: 0,
                            width: "100px",
                            textAlign: "center"
                        }} href="/profile"><h5>{userInfo.firstName}</h5></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{
                            color: "#ffb3d9",
                            backgroundColor: "#6600ff",
                            borderRadius: 50,
                            width: "100px",
                            textAlign: "center"
                        }} href="/cart" ><h5>Cart</h5></NavLink>
                    </NavItem>
                </Nav> */}

                {/* {userInfo ? (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{
                                color: "#ffb3d9",
                                backgroundColor: "#6600ff",
                                borderRadius: 50,
                                width: "100px",
                                textAlign: "center"
                            }} href="/profile"><h5>{userInfo.name}</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#ffb3d9",
                                backgroundColor: "#6600ff",
                                borderRadius: 50,
                                width: "100px",
                                textAlign: "center"
                            }} href="/cart" ><h5>Cart</h5></NavLink>
                        </NavItem>
                    </Nav>
                ) : (
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink
                                    style={{
                                        color: "#ffb3d9",
                                        backgroundColor: "#6600ff",
                                        borderRadius: 50,
                                        width: "100px",
                                        textAlign: "center"
                                    }}
                                    href="/signin" ><h5>SignIn</h5></NavLink>
                            </NavItem>
                        </Nav>
                    )}
 */}

            </Collapse>

            {/* <Collapse isOpen={topbarIsOpen} navbar>

                {userInfo ? (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{ color: "#fff" }} href="/appsharerprofiledetails"><h5>{userInfo.item1.phoneNumber}</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "#fff" }} onClick={handleLogout}><h5>Log Out</h5></NavLink>
                        </NavItem>
                    </Nav>
                ) : (
                        <Nav className="ml-auto" navbar>
                            <Nav>
                                <a href="/signin" style={{ color: "#fff" }}><h5>SignIn</h5></a>
                            </Nav>
                        </Nav>
                    )} *

            </Collapse> */}
        </Navbar >
    );

};

export default NavigationComponent;


