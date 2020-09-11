import React from 'react';


const Header = (props) => {
    return (
        <header className="header">
            <div className="block">
                <h1 className="action">Сhoose how much data to upload</h1>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button className="btn btn-outline-primary" id="small" disabled={props.isFetching}
                            onClick={event => {
                                props.loadData(event)
                            }} type="button">
                        Small data
                    </button>
                    <button className="btn btn-outline-primary" id="big" disabled={props.isFetching} onClick={event => {
                        props.loadData(event)
                    }} type="button">
                        Big data
                    </button>
                </div>
                {props.isFetching
                    ? <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    :<div></div>}
            </div>
        </header>
    )
}

export default Header;