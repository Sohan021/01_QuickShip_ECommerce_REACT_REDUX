import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    detailsSubCategory,
    updateSubCategory
} from '../../../actions/RegularActions/subCategoryActions';


import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function SubCategoryEditScreen(props) {

    const subCategoryId = props.match.params.id;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');



    const subCategoryDetails = useSelector((state) => state.subCategoryDetails);

    const { subCategory } = subCategoryDetails;



    const {
        success: successUpdate
    } = subCategory;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsSubCategory(subCategoryId));
        setName(subCategory.name)
        setDescription(subCategory.description)
        return () => {

            //
        };
    }, [successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateSubCategory({
                name,
                description
            }, subCategoryId)
        );
    };

    return (
        <div className="container">
            <br />
            <br />
            <br />
            {subCategory ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"

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
                                <Label for="district">Description</Label>
                                <Input type="text"
                                    name="district"
                                    id="district"
                                    placeholder={subCategory.description}
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
export default SubCategoryEditScreen;
