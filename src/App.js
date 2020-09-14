import React, {useState} from 'react';
import {columns} from './Components/Table/ColumnsSource';
import Header from "./Components/Header/Header";
import {nanoid} from 'nanoid';
import {getData} from "./api/api";
import refactData from "./utils/refactDatafromApi";
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableContainer from "./Components/Table/TableContainer";
import {NewUser} from "./Components/Table/NewUser";


function App() {
    const [data, setData] = useState(null);
    const [isFetching, setFetching] = useState(false);
    const [choosenRow, setChoosenRow] = useState(null);
    const [isForm, setForm] = useState(false);

    const loadData = async (event) => {
        setFetching(true)
        const response = await getData(event.target.id);
        setData(refactData(response, nanoid));
        setFetching(false);
    }

    const showAdditionalInf = (event) => {
        const findRow = data.find(elem => elem.userId === event.currentTarget.id);
        if (choosenRow !== null && choosenRow.userId === findRow.userId) {
            setChoosenRow(null);
            return
        }
        setChoosenRow(findRow);
    }

    const showForm = () => {
        setForm(!isForm);
    }

    const addNewUser = (newUser) => {
        setData([
            ...data,
            newUser
        ])
    }

    return (
        <div className="container-lg">
            <Header loadData={loadData} isFetching={isFetching}/>
            {isForm && <NewUser addNewUser={addNewUser}/>}
            {data
                ? <Container>
                    <div className="col-auto">
                        <button onClick={() => {showForm()}} type="submit" className="btn btn-success mb-2">
                            Add new user
                        </button>
                    </div>
                    <TableContainer columns={columns} data={data} showAdditionalInf={showAdditionalInf}
                                    choosenRow={choosenRow}/>
                </Container>
                : <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h4>There`s no data for table</h4>
                </div>}
        </div>
    )
}

export default App;