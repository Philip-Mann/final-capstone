import { Switch } from 'react-router-dom';
import Routes from '../../routes';
import './main.css';

function Main({ userData }) {

    return(
        <div className="main-container">
            <Switch>
                <Routes />
            </Switch>
        </div>
    )
}

export default Main;