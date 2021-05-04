import React, {useState} from 'react';
import {Auth} from "aws-amplify";
import {awsSetup, currentUser} from "../../AuthUtil";
import {AWSApiRequest} from "../../backendUtils/AWSApi";
import {useHistory} from "react-router-dom";

export default function Login() {
    const [error, setError] = useState("")
    const history = useHistory();

    function useFormFields(initialState: any) {
        const [fields, setValues] = useState(initialState);

        return [
            fields,
            function (event: { target: { id: any; value: any; }; }) {
                setValues({
                    ...fields,
                    [event.target.id]: event.target.value,
                });
            },
        ];
    }

    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
    });

    awsSetup()

    async function handleSubmit(event: any) {

        event.preventDefault();

        try {
            await Auth.signIn(fields.email, fields.password)
            const currentEmail = await currentUser()
            console.log("DEBUG: Current User: " + currentEmail);
            const profile = await AWSApiRequest("profile", currentEmail);
            console.log(JSON.stringify(profile))
            history.push("/loggedIn")

        } catch (error) {
            console.log("Error while logging in.", error);
            setError(JSON.stringify(error))
        }

    }

    return (<div className="form-container">
            <div className="form-container">
                {error}
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <div className="form-card">
                        <label
                            className="ds-c-label"
                            htmlFor="email"
                        >
                            Email<span className="required-mark">*</span>
                        </label>
                        <input
                            className="field"
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleFieldChange}
                            value={fields.name}
                            required
                        ></input>
                        <label
                            className="ds-c-label"
                            htmlFor="password"
                        >
                            Password<span className="required-mark">*</span>
                        </label>
                        <input
                            className="field"
                            type="password"
                            id="password"
                            name="password"
                            value={fields.password}
                            onChange={handleFieldChange}
                            required
                        ></input>
                        <input id="loginDevUserBtn"
                               type="submit" className="form-submit" value="Login"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
