import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    saveRole,
    listRoles
} from '../../../actions/AccountActions/roleAction';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function RoleCreateScreen(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const roleSave = useSelector((state) => state.roleSave);

    const roleList = useSelector((state) => state.roleList);
    const { roles } = roleList;


    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = roleSave;

    const roleDelete = useSelector((state) => state.roleDelete);

    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = roleDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listRoles());

        return () => {

            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveRole({
                name,
                description
            })
        );
    };

    return (
        <div className="container">
            <br />
            <br />
            <br />
            {roles ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Role Name"
                                    size="lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="union">Desription</Label>
                                <Input type="text"
                                    name="union"
                                    id="union"
                                    placeholder="Enter Role Desription"
                                    size="lg"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>

                        </div>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            ) :
                <h1>Error</h1>
            }
        </div>
    );
}
export default RoleCreateScreen;
