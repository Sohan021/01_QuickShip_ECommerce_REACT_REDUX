import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap'
import { Button } from 'reactstrap';
import { listOrders } from '../../../actions/RegularActions/orderActions'

const OrderListForAdmin = (props) => {


    const OrderList = useSelector((state) => state.orderList)
    const { orders } = OrderList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOrders())
        return () => {
            //
        };
    }, []);

    const handleOrderDetails = (id) => {
        props.history.push("/OrderDeatils/" + id);
    }
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            {orders ? (
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-10">
                        {orders.map((order) => (
                            <div>
                                <Card key={order.id} style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000" }} >
                                    <Card.Body >
                                        <div className="row">
                                            <div className="col-6">
                                               
                                                <h5 style={{ color: "#000" }}>OrderNo:- {order.orderNo}</h5>
                                                <h5 style={{ color: "#000" }}>Customer:- {order.userName}</h5>
                                                
                                            </div>
                                            <div className="col-6">
                                             
                                                    <h5 style={{ color: "#000" }}>Total Amount:-{order.totalAmount}</h5>
                                                
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-6">
                                               
                                                    <h5 style={{ color: "#000" }}>Order Time:-{order.orderDate}</h5>
                                                
                                            </div>
                                            <div className="col-6">
                                                <Card style={{ padding: "10px" }}>
                                                    <Button
                                                        style={{
                                                            color: "#fff",
                                                        }}
                                                        color="success" size="lg" block type="submit"
                                                        onClick={() => handleOrderDetails(order.id)}
                                                    >
                                                        Details
                                                </Button>
                                                </Card>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <br />
                                <br />
                            </div>
                        ))}
                    </div>
                    <div className="col-1">

                    </div>
                </div>

            ) : (
                    <h1></h1>
                )}
        </div>
    );
};

export default OrderListForAdmin;
