import React, {useState} from "react";

export const NewUser = ({addNewUser}) => {

    let [id, setId] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewUser({id, firstName,lastName, email, phone});
        setId('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col">
                    <label className="sr-only" htmlFor="inlineFormInput">Thing</label>
                    <input value={id} onChange={event => setId(event.target.value)} type="text"
                           className="form-control mb-2" id="id"
                           placeholder="Text id" required={true}/>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2">
                        <input value={firstName} onChange={event => setFirstName(event.target.value)} type="text"
                               className="form-control" id="firstName"
                               placeholder="Text first Name" required={true}/>
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2">
                        <input value={lastName} onChange={event => setLastName(event.target.value)} type="text"
                               className="form-control" id="lastName"
                               placeholder="Text last Name" required={true}/>
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2">
                        <input value={email} onChange={event => setEmail(event.target.value)} type="text"
                               className="form-control" id="email"
                               placeholder="Text email" required={true}/>
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2">
                        <input value={phone} onChange={event => setPhone(event.target.value)} type="text"
                               className="form-control" id="phone"
                               placeholder="Text phone" required={true}/>
                    </div>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-2">Add in table</button>
                </div>
            </div>
        </form>
    )
}