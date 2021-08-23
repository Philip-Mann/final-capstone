import GoogleLogin from '../../components/login/buttons/googleLogin';
import FacebookLogin from '../../components/login/buttons/facebookLogin';
// import Facebook from '../../components/login/facebook';
import './login.css';

const Login = () => {

    return(
        <>
            <h1>Please Log In</h1>
            <div className="button-containers">
                <GoogleLogin />
                <FacebookLogin />
                {/* <Facebook /> */}
            </div>


        </>
    )
}

export default Login;