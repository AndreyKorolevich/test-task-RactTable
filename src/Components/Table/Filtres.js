import React, {useState} from 'react';

export const GlobalFilter = ({preGlobalFilteredRows, globalFilter, setGlobalFilter}) => {
    let [value, setValue] = useState('');
    const count = preGlobalFilteredRows && preGlobalFilteredRows.length;

    const handleSubmit = (event) => {
        event.preventDefault();
        setGlobalFilter(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row align-items-center">
                <div className="col-10">
                    <label className="sr-only" htmlFor="inlineFormInput">Search</label>
                    <input value={value}
                           onChange={event => setValue(event.target.value)}
                           placeholder={`Search from ${count} records...`}
                           type="text" className="form-control mb-2" id="inlineFormInput"
                           required={true}/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-2">Filter</button>
                </div>
            </div>
        </form>
    );
};
