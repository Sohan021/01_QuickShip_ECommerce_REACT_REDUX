import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { userRegister } from '../../../actions/AccountActions/accountActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import base from '../../../Sevice/config'

function SignUpScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');

    const [email, setEmail] = useState('');


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const Register = useSelector(state => state.adminRegistration);
    // const { userinfo } = Register;



    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        // if (userinfo) {
        //     props.history.push(redirect);
        // }

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userRegister(
            firstname,
            mobilenumber,
            email,
            password,
            confirmPassword
        ));
        props.history.push('/')
    }
    // const uploadFileHandler = (e) => {
    //     const file = e.target.files[0];
    //     const bodyFormData = new FormData();
    //     bodyFormData.append('profilePhoto', file);
    //     axios
    //         .post(base + '/api/account/savephoto', bodyFormData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         })
    //         .then((response) => {
    //             setProfilePhoto(response.data);

    //         })
    //         .catch((err) => {
    //             console.log(err);

    //         });
    // };

    return (
        <div className="container" style={{ backgroundColor: '#fff' }}>
            <br />
            <br />
            {1 && (
                <div className="container" style={{ width: 475, height: 700, marginTop: 60, backgroundColor: "#0C373A" }}>
                    <br />



                    <h3 style={{ color: "#06E2FF", textAlign: "center" }}>Sign Up</h3>
                    <p style={{ color: "#06E2FF", textAlign: "center" }}>___________________________________________________________</p>

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-12">
                                <FormGroup>
                                    <Label for="name"
                                        style={{ color: "#06E2FF" }}>Name</Label>
                                    <Input type="text"
                                        style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter firstname"
                                        size="lg"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>



                        </div>
                        <div className="row">
                            <div className="col-12">
                                <FormGroup>
                                    <Label for="name"
                                        style={{ color: "#06E2FF" }}>Phone Number</Label>
                                    <Input
                                        style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}
                                        type="text"
                                        name="countInStock"
                                        id="countInStock"
                                        placeholder="Enter Mobile Number"
                                        size="lg"
                                        value={mobilenumber}
                                        onChange={(e) => setMobilenumber(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <FormGroup>
                                    <Label style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}>Email</Label>
                                    <Input
                                        style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email"
                                        size="lg"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <FormGroup>
                                    <Label style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}>Password</Label>
                                    <Input type="password"
                                        style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter Password"
                                        size="lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <FormGroup>
                                    <Label style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}>Confirm Password</Label>
                                    <Input type="password"
                                        style={{ color: "#06E2FF", backgroundColor: "#0C373A" }}
                                        name="price"
                                        id="price"
                                        placeholder="Enter Confirm Password"
                                        size="lg"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <Button
                            style={{
                                color: "#06E2FF",
                            }}
                            outline color="primary" size="lg" block type="submit">
                            SignUp
                        </Button>
                        <Button
                            style={{
                                color: "#06E2FF"
                            }}
                            outline color="primary" size="lg" block type="submit">
                            <a href="/signin">Already Have An Account?</a>
                        </Button>
                    </Form>
                </div>
            )
            }
        </div >
    );
}
export default SignUpScreen;




