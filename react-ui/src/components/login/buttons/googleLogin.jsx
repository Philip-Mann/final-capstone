import '../login.css';
// import { useDispatch } from 'react-redux'
// import { updateUser } from '../../../redux/reducers/user'

const GoogleButton = () => {

    // const dispatch = useDispatch();

    // const handleClick = async () => {
    //     fetch('/auth/google', {
    //         // mode: 'no-cors',
    //         credentials: 'include',
    //         method: 'GET',
    //         origin: "*",
    //         preflightContinue: false,
    //         headers: {
    //             'Access-Control-Allow-Origin': 'http://localhost:3000',
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(user => {
    //             dispatch(updateUser(user))
    //         })

    // }



    return (
        <div className="login-button google">
                {/* <button
                    onClick={handleClick}
                > */}
                <a href="/auth/google">
                    <i className="fab fa-google"></i>
                    Google
                </a>

                {/* </button> */}
        </div>
    )
}

export default GoogleButton;