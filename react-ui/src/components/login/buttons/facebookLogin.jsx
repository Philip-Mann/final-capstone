import '../login.css';



const FacebookButton = () => {

    return (
        <div className="login-button facebook">
            <a href="/auth/facebook">
                <i className="fab fa-facebook"></i>
                Facebook
            </a>
        </div>
    )
}

export default FacebookButton;