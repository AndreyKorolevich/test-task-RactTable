import {useMemo} from "react";

export const columns = [
    {
        Header: 'id',
        Footer: info => {
            const count = useMemo(
                () => info.rows.length,
                [info.rows]
            )

            return `General count users: ${count}`
        },
        accessor: 'id',
    },
    {
        Header: 'firstName',
        accessor: 'firstName',
    },
    {
        Header: 'lastName',
        accessor: 'lastName',
    },
    {
        Header: 'email',
        accessor: 'email',
    },
    {
        Header: 'phone',
        accessor: 'phone',
    },
];
