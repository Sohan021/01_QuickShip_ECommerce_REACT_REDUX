import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, ListGroupItem } from 'react-bootstrap'

import { Button } from 'reactstrap';
import { userProfileDetail } from '../../../actions/AccountActions/accountActions';



function ProfileDetails(props) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const userProfileDetailsReducer = useSelector((state) => state.userProfileDetailsReducer);
    const { user } = userProfileDetailsReducer;



    console.log("Outside", user)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(userProfileDetail(userInfo.item1.id));

        return () => {
            //
        };
    }, []);
    const handlePassWordChange = () => {
        props.history.push('/passwordupdate');
    }


    return (<div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { userInfo ? (
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">

                    <div className="row">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#1FC46C", }}>
                            <Card.Body>
                                <br />
                                <br />
                                <br />
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff", height: "97px" }}><h3>{userInfo.item1.firstName} {userInfo.item1.email}</h3></Card.Title>
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff" }}><h4>Phone Number: {userInfo.item1.phoneNumber}</h4></Card.Title>
                            </Card.Body>
                            <Button
                                color="success"
                                size="lg"
                                block
                                type="submit"
                                width="30px"
                                onClick={handlePassWordChange}
                            >
                                Change Password?
                            </Button>
                        </Card>
                    </div>


                </div>
                <div className="col-4">

                </div>
            </div>


        ) : (
                <h1></h1>
            )
        }
    </div >
    );
}
export default ProfileDetails;
