import React, {useEffect, useState} from 'react';

const UserInfo = () => {
    const [firstName, setFirstName] = useState("Jolanta")
    const [lastName, setLastName] = useState("Woronowska")

    useEffect(() => {
        setTimeout(() => {
            setFirstName("Jola")
        }, 3000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLastName("Obruśnik")
        }, 3000)
    }, [])

    return (
        <div>{firstName} {lastName}</div>
    );
};

export default UserInfo;