import React from 'react';
import {useGlobalFilter, usePagination, useSortBy, useTable} from 'react-table';
import {Table} from 'reactstrap';
import generateSortingIndicator from "../../utils/generateSortingIndicator";
import {GlobalFilter} from "./Filtres";
import Pagination from "./Pagination";
import Additional from "./Additional";

const TableContainer = ({columns, data, showAdditionalInf, choosenRow}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
        footerGroups,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize}
    } = useTable({
            columns,
            data,
            initialState: {pageIndex: 0, pageSize: 10}
        },
        useGlobalFilter,
        useSortBy,
        usePagination);

    return (
        <>
            <Table {...getTableProps()}>
                <thead>
                <tr>
                    <th
                        colSpan={visibleColumns.length}
                        style={{textAlign: "right"}}
                    >
                        <GlobalFilter
                            preGlobalFilteredRows={preGlobalFilteredRows}
                            globalFilter={state.globalFilter}
                            setGlobalFilter={setGlobalFilter}
                        />
                    </th>
                </tr>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                <div {...column.getSortByToggleProps()}>
                                    {column.render('Header')}
                                    {generateSortingIndicator(column)}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return (
                        <tr id={row.original.userId} onClick={showAdditionalInf} {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
                <tfoot>
                {footerGroups.map(group => (
                    <tr {...group.getFooterGroupProps()}>
                        {group.headers.map(column => (
                            <td {...column.getFooterProps()}>{column.Footer && column.render('Footer')}</td>
                        ))}
                    </tr>
                ))}
                </tfoot>
            </Table>
            {choosenRow
                ? <Additional choosenRow={choosenRow}/>
                : <h5>Choose user to show additional information</h5>}
            <Pagination canNextPage={canNextPage} canPreviousPage={canPreviousPage} gotoPage={gotoPage}
                        pageOptions={pageOptions} nextPage={nextPage} pageCount={pageCount} pageIndex={pageIndex}
                        previousPage={previousPage} pageSize={pageSize} setPageSize={setPageSize}/>
        </>
    );
}

export default TableContainer;