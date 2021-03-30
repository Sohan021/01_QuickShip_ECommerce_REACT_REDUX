import React, { useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux';
import {

    listSubCategories,
    deleteSubCategory
} from '../../../actions/RegularActions/subCategoryActions';



const { SearchBar } = Search;

const handleClick = (dispatch, id) => {

    swal({
        title: "Do you want to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteSubCategory(id))
                swal("SuccessFully Deleted", {
                    icon: "success",
                });
            } else {
                swal("Can Not deted SubCategory an Error occured");
            }
        });
}

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const SubCategoryScreen = (props) => {

    const subCategoryList = useSelector((state) => state.subCategoryList);
    const { subCategories } = subCategoryList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listSubCategories());

        return () => {
            //
        };
    }, []);


    const columns = [
        {
            dataField: "name",
            text: "Name",
            sort: true,
        },
        {
            dataField: "description",
            text: "Description",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"subcategorydetails/" + row.id}>
                            <Button color="dark" className="mr-2">
                                Detail
                            </Button>
                        </Link>
                        <Link to={"subcategoryedit/" + row.id}>
                            <Button color="dark" className="mr-2">
                                Edit
                            </Button>
                        </Link>
                        <Button color="dark" className="mr-2" onClick={() => handleClick(dispatch, row.id)}>
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (

        <Container>
            <br />
            <br />
            <br />
            {subCategories ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={subCategories}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {(props) => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to="/subcategorycreate">
                                        <Button color="dark" className="mr-2">
                                            Create SubCategory
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <div className="float-right">
                                        <SearchBar {...props.searchProps} placeholder="Search .." />
                                    </div>
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory()}
                            />
                        </div>
                    )}
                </ToolkitProvider>
            ) : (
                    <div className="text-center">
                        {props.errorCategoriesList ? (
                            <h4>{props.errorCategoriesList}</h4>
                        ) : (
                                <Spinner color="dark" />
                            )}
                    </div>
                )}
        </Container>
    );
};

export default SubCategoryScreen;
