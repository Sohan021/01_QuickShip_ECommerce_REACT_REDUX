import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../../../actions/RegularActions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button, Input } from 'reactstrap';
import base from '../../../Sevice/config';


function CartScreen(props) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

  
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    useEffect(() => {
      
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/placeorder");
    }

    return (<div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { cartItems  ? (
            <Card style={{ color: "#000", backgroundColor: "#fff", borderColor: "#000" }} >
                <div className="row">
                    <div className="col-8">
                        {cartItems.map((item) => (
                            <div className="row">
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-6">
                                            <Card.Body>
                                                <Card style={{ height: "40px", justifyContent: "center" }}>{item.name}</Card>
                                            </Card.Body>
                                        </div>
                                        <div className="col-6">
                                            <Card.Body>
                                                <Button
                                                    style={{ color: "#fff", }}
                                                    color="danger" size="lg" block type="submit"
                                                    onClick={() => removeFromCartHandler(item.id)}
                                                >
                                                    Remove?
                                                </Button>
                                            </Card.Body>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Card.Body>
                                                <Input
                                                    style={{ color: "#000", backgroundColor: "#fff" }}
                                                    type="select"
                                                    name="select"
                                                    id="exampleSelect"
                                                    size="lg"
                                                    value={item.qty}
                                                    onChange={(e) => dispatch(addToCart(item.id, e.target.value))}
                                                >
                                                    {[...Array(item.countInStock).keys()].map(x =>
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    )}
                                                </Input>
                                            </Card.Body>
                                            <p style={{ color: "#000" }}>_____________________</p>
                                        </div>
                                        <div className="col-6">
                                            <Card.Body>
                                                <Card style={{ height: "40px", justifyContent: "center" }}>{item.price * item.qty}</Card>
                                            </Card.Body>
                                            <p style={{ color: "#000" }}>_____________________</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <Card.Body>
                                        <Card.Img variant="top" height="110px" width="60px" src={base + item.imageUrl} />
                                    </Card.Body>
                                </div>

                            </div>

                        ))}

                    </div>
                    <div className="col-4">
                        <p style={{ color: "#06E2FF" }}>____________________</p>
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <h4>SubTotal: {cartItems.reduce((a, c) => a + c.qty * 1, 0)} items</h4>
                                </ListGroupItem>
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <h4>TotalPrice: {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}Taka</h4>
                                </ListGroupItem>
                                
                                {cartItems.reduce((a, c) => a + c.price * c.qty, 0) && cartItems.reduce((a, c) => a + c.qty * 1, 0) > 0 ? (
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                        <Button
                                            style={{ color: "#fff", }}
                                            color="success" size="lg" block type="submit"
                                            onClick={checkoutHandler}
                                        >
                                            Proceed to Checkout
                                                </Button>
                                    </ListGroupItem>
                                ) : (
                                        <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                            <Button
                                                style={{ color: "#fff", }}
                                                color="danger" size="lg" block type="submit"

                                            >
                                                You Can't CheckOut
                                                </Button>
                                        </ListGroupItem>
                                    )}
                            </ListGroup>

                        </Card.Body>
                    </div>
                </div>

            </Card>

        ) : (
                <h1></h1>
            )}
    </div >)
}

export default CartScreen;


























