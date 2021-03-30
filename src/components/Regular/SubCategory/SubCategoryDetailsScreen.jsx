import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsSubCategory } from "../../../actions/RegularActions/subCategoryActions";

const SubCategoryDetails = (props) => {

    const subCategoryId = props.match.params.id;

    const subCategoryDetails = useSelector((state) => state.subCategoryDetails);
    const { subCategory } = subCategoryDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsSubCategory(subCategoryId));

        return () => {
            //
        };
    }, [subCategoryId]);

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col col-lg-3">

                </div>
                <div className="col col-lg-6">
                    <h2>Upozila</h2>
                    <Table striped>
                        <tbody>
                            <tr>
                                <td width="200">Name</td>
                                <td width="10">:</td>
                                <td>{subCategory.name}</td>
                            </tr>
                            <tr>
                                <td width="200">Description</td>
                                <td width="10">:</td>
                                <td>{subCategory.description}</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div className="col col-lg-3">

                </div>
            </div>

        </div>
    );
};

export default SubCategoryDetails;
