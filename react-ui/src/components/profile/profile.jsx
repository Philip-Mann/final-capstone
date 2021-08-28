import './profile.css';
import { useParams } from "react-router";

import { useState, useEffect } from "react";

const Profile = () => {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchUserProfile = (id) => {
            fetch(`/profile/${id}`)
            .then(res => res.json())
            .then(userInfo => {
                setUserInfo(userInfo)
                console.log(userInfo)
                setIsLoading(false);
            });
        }
        fetchUserProfile(id);
    }, [id]);

    // const fetchData = useSelector(userData);
    // const { data } = useGetUserInfoQuery(fetchData);

    return (
        <>
        {isLoading ? <h1>Loading profile...</h1> :  
        userInfo ?  
            <div className="greeting-container">
                <h1>Hello, {userInfo.firstName}! Thank you for logging in.</h1>
                <p>User Name: {userInfo.firstName}</p>
                <p>Id: {userInfo.id}</p>
                <p>Login Strategy: {userInfo.loginStrategy.charAt(0).toUpperCase() + userInfo.loginStrategy.slice(1)}</p>
                <p>Login Strategy Id: {userInfo.loginStrategyId}</p>
            </div>
            : <h1>Not Logged In :/</h1>}
        </>
    )
}

export default Profile;