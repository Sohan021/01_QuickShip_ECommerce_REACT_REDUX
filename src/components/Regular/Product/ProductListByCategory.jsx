import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsByCategory } from '../../../actions/RegularActions/productActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import base from '../../../Sevice/config';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function ProductListByCategory(props) {

    const category = props.match.params.id ? props.match.params.id : '';

    const productList = useSelector((state) => state.productListByCategory);
    const { products } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsByCategory(category));

        return () => {
            //
        };
    }, [category]);
    console.log(products);


    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                {products ? (
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-3">
                                <Card style={{ color: "#000", backgroundColor: "#fff" }} >
                                    <div className="row">
                                        <Link to={'/productdetails/' + product.id}>
                                            <Card.Img variant="top" height="200px" src={base + product.imageUrl} />
                                        </Link>
                                    </div>
                                    <div className="row">
                                        <Card.Body>
                                            <p style={{ color: "#06E2FF" }}>_________________________________</p>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {product.name}</h4></ListGroupItem>
                                                <ListGroupItem style={{ backgroundColor: "#fff" }}>Price: {product.price}</ListGroupItem>
                                            </ListGroup>
                                        </Card.Body>
                                    </div>

                                </Card>
                                <br />
                                <br />
                            </div>
                        ))}
                    </div>
                ) : (
                        <h1>Empty</h1>
                    )}
            </div>
        </>
    );
}
export default ProductListByCategory;
