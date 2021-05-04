import React, {useEffect} from 'react';
import {awsSetup, currentUser} from "../../AuthUtil";

export default function Home() {

    useEffect(() => {

       try {
           awsSetup()
           user()
       } catch (error)
       {
           console.log(error)
       }
    })

    async function user() {
        const myuser = await currentUser();
        console.log("HOME:" + myuser)
    }

    return (
        <div className="GlobalStyle">
            Home
        </div>
    );
}
