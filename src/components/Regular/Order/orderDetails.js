import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../../actions/RegularActions/productActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { detailsOrder } from '../../../actions/RegularActions/orderActions';
import base from '../../../Sevice/config'

function OrderDetails(props) {

    const orderId = props.match.params.id;

    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    //const category = props.match.params.id ? props.match.params.id : '';

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order } = orderDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsOrder(orderId));

        return () => {
            //
        };
    }, []);


    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                {order ? (
                    <Card>
                        <div className="row">
                            {order.map((product) => (
                                <div className="col-3">
                                    <Card style={{ color: "#000", backgroundColor: "#fff" }} >
                                        <div className="row">
                                            <Card.Img variant="top" height="200px" src={base + product.imageUrl} />
                                        </div>
                                        <div className="row">
                                            <Card.Body>
                                                <p style={{ color: "#000" }}>_________________________________</p>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {product.name}</h4></ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Price: {product.price}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Category: {product.category.name}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>SubCategory: {product.subCategory.name}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>CountInStock: {product.countInStock}</ListGroupItem>
                                                </ListGroup>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            ))}
                        </div>
                    </Card>

                ) : (
                        <h1></h1>
                    )}
            </div>
        </>
    );
}
export default OrderDetails;
