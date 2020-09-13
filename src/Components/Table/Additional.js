import React, {useEffect, useState} from 'react';

const Additional = ({choosenRow}) => {
    const [value, setValue] = useState();
    useEffect(() => {
        setValue(choosenRow.description)
    }, [choosenRow.description])
    const changeText = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div>Выбран пользователь <b>{choosenRow.firstName} {choosenRow.lastName}</b></div>
                <p>Описание:<textarea onChange={changeText} value={value}></textarea></p>
                <div>Адрес проживания: <b>{choosenRow.address.streetAddress}</b></div>
                <div>Город: <b>{choosenRow.address.city}</b></div>
                <div>Провинция/штат: <b>{choosenRow.address.state}</b></div>
                <div>Индекс: <b>{choosenRow.address.zip}</b></div>
            </div>
        </div>
    )
}

export default Additional;