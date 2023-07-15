import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("donar");
    const [name, setName] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    return (

        <div>
            <form onSubmit={
                (e) => {
                    if (formType === 'login') return handleLogin(e, email, password, role)
                    else if (formType === 'register') return handleRegister(e, name, role, email, password, organisationName, hospitalName, address, phone,website)
                }
            }>
                <h1 className="text-center">{formTitle}</h1>
                <hr />
                {/* according to role..we decide what details to enter or what not..creating radio button*/}

                <div className="d-flex mb-3">

                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="donar" name="role" value={'donar'} onChange={(e) => setRole(e.target.value)}
                            defaultChecked
                        />
                        <label htmlFor="donar" className="for-check-label">Donor</label>
                    </div>


                    <div className="form-check ms-2">
                        <input type="radio" className="form-check-input" id="admin" name="role" value={'admin'} onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor="admin" className="for-check-label">Admin</label>
                    </div>



                    <div className="form-check ms-2">
                        <input type="radio" className="form-check-input" id="hospital" name="role" value={'hospital'} onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor="hospital" className="for-check-label">Hospital</label>
                    </div>



                    <div className="form-check ms-2">
                        <input type="radio" className="form-check-input" id="organisation" name="role" value={'organisation'} onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor="organisation" className="for-check-label">Organisation</label>
                    </div>

                </div>
                {/*Switch case -> conditional rendering*/}

                {(() => {
                    switch (true) {
                        case formType === 'login': {
                            return (
                                <>
                                    <InputType
                                        labelText={'Email'}
                                        labelFor={'forEmail'}
                                        inputType={'email'}
                                        name={'email'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <InputType
                                        labelText={'Password'}
                                        labelFor={'forPassword'}
                                        inputType={'password'}
                                        name={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </>
                            )
                        }


                        case formType === 'register': {
                            return (
                                <>
                                    {(role === "admin" || role === "donar") && (
                                        <InputType
                                            labelText={"Name"}
                                            labelFor={"forName"}
                                            inputType={"text"}
                                            name={"name"}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    )}

                                    {
                                        (role === 'organisation') && (
                                            <InputType
                                                labelText={'Organisation Name'}
                                                labelFor={'fororganisationName'}
                                                inputType={'text'}
                                                name={'organisationName'}
                                                value={organisationName}
                                                onChange={(e) => setOrganisationName(e.target.value)}
                                            />

                                        )
                                    }

                                    {
                                        (role === 'hospital') && (

                                            <InputType
                                                labelText={'Hospital Name'}
                                                labelFor={'forHospitalName'}
                                                inputType={'text'}
                                                name={'hospitalName'}
                                                value={hospitalName}
                                                onChange={(e) => setHospitalName(e.target.value)}
                                            />
                                        )
                                    }

                                    <InputType
                                        labelText={'Email'}
                                        labelFor={'forEmail'}
                                        inputType={'email'}
                                        name={'email'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <InputType
                                        labelText={'Password'}
                                        labelFor={'forPassword'}
                                        inputType={'password'}
                                        name={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />


                                    <InputType
                                        labelText={'Website'}
                                        labelFor={'forWebsite'}
                                        inputType={'text'}
                                        name={'website'}
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />

                                    <InputType
                                        labelText={'Address'}
                                        labelFor={'forAddress'}
                                        inputType={'text'}
                                        name={'address'}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />



                                    <InputType
                                        labelText={'Phone Number'}
                                        labelFor={'forPhone'}
                                        inputType={'text'}
                                        name={'phone'}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />

                                </>
                            )
                        }
                    }
                })()}

                <div className="d-flex  flex-row  justify-content-between">
                    {/*ternary operator....to redirect from register page to login if already user or if not user
                     redirect from login page to register...to register to our website */}


                    {formType === 'login' ? (
                        <p>Not registered yet? Register <Link to='/register'>Here !</Link></p>
                    ) : (
                        <p>Already User? Please <Link to='/login'> Login</Link></p>
                    )}

                    <button className="btn btn-primary" type="Submit">
                        {submitBtn}

                    </button>

                </div>
            </form>
        </div>
    );
};

export default Form;