import React from 'react';
import {Row, Col, CustomInput } from 'reactstrap';
import styles from './Pagination.module.css'


const Pagination = ({ setPageSize, gotoPage, previousPage, canPreviousPage, pageIndex,
                        pageOptions, pageSize, nextPage, canNextPage, pageCount}) => {
    const onChangeInSelect = (event) => {
        setPageSize(Number(event.target.value));
    };

    return (
            <Row className={styles.row}>
                <Col>
                    <button
                        className="btn btn-primary"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {'<<'}
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={previousPage}
                        disabled={!canPreviousPage}
                    >
                        {'<'}
                    </button>
                </Col>
                <Col className={styles.col}>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </Col>
                <Col md={2}>
                    <CustomInput
                        id='007'
                        type='select'
                        value={pageSize}
                        onChange={onChangeInSelect}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </CustomInput>
                </Col>
                <Col>
                    <button   className="btn btn-primary" onClick={nextPage} disabled={!canNextPage}>
                        {'>'}
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {'>>'}
                    </button>
                </Col>
            </Row>
    );
};

export default Pagination;