import React from 'react';
import {Row, Col, Button, Input, CustomInput } from 'reactstrap';


const Pagination = ({ setPageSize, gotoPage, previousPage, canPreviousPage, pageIndex,
                        pageOptions, pageSize, nextPage, canNextPage, pageCount}) => {
    const onChangeInSelect = (event) => {
        setPageSize(Number(event.target.value));
    };

    const onChangeInInput = (event) => {
        const page = event.target.value ? Number(event.target.value) - 1 : 0;
        gotoPage(page);
    };

    return (
            <Row style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
                <Col md={3}>
                    <Button
                        color='primary'
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {'<<'}
                    </Button>
                    <Button
                        color='primary'
                        onClick={previousPage}
                        disabled={!canPreviousPage}
                    >
                        {'<'}
                    </Button>
                </Col>
                <Col md={2} style={{ marginTop: 7 }}>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </Col>
                <Col md={2}>
                    <Input
                        type='number'
                        min={1}
                        style={{ width: 70 }}
                        max={pageOptions.length}
                        defaultValue={pageIndex + 1}
                        onChange={onChangeInInput}
                    />
                </Col>
                <Col md={2}>
                    <CustomInput
                        id='007'
                        type='select'
                        value={pageSize}
                        onChange={onChangeInSelect}
                    >
                        >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </CustomInput>
                </Col>
                <Col md={3}>
                    <Button color='primary' onClick={nextPage} disabled={!canNextPage}>
                        {'>'}
                    </Button>
                    <Button
                        color='primary'
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {'>>'}
                    </Button>
                </Col>
            </Row>
    );
};

export default Pagination;