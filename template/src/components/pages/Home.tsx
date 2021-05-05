import React, {useEffect} from 'react';
import {awsSetup, currentUser} from "../../AuthUtil";
import CardButton from "../templates/CardButton";

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
    const cardProps = { onClick: () => {console.log("Clicked")}, name: "helpdesk", loading: false }
    return (
        <div className="GlobalStyle">
            Home
            <div>
                <CardButton  {...cardProps} />
            </div>
        </div>
    );
}
