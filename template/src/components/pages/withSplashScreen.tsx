import React, {useEffect, useState} from 'react';

interface SplashProps {
    SplashScreen: any,
    ForComponent: any,
}

export default function WithSplashScreen(props: SplashProps) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    },[loading]);

    if (loading) {
        return (<>{props.SplashScreen}</>)
    } else {
        return <>{props.ForComponent}</>;
    }
};

