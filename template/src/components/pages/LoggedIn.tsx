import React, {useEffect, useState} from "react";
import {awsSetup, currentUser} from "../../AuthUtil";

export default function  LoggedIn() {

    const [me, setMe] = useState({error: "Not Logged In"})

    useEffect(() => {

        try {
            awsSetup()
            user()
        } catch (error) {
            console.log(error)
        }
    })

    async function user() {
        try {
            const myuser = await currentUser();
            console.log("Logged In:" + myuser)
            setMe(myuser)
        } catch (error) {
            setMe(error)
        }
    }

    return (
        <div className="GlobalStyle">
            Logged In {JSON.stringify(me)}
        </div>
    );
}
