import GoogleLogin from '../../components/login/buttons/googleLogin';
import FacebookLogin from '../../components/login/buttons/facebookLogin';
import './login.css';



const Login = () => {

    return(
        <>
            <h1>Please Log In</h1>
            <div className="button-containers">
                <GoogleLogin />
                <FacebookLogin />
            </div>


        </>
    )
}

export default Login;