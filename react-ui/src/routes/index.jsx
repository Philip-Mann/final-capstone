import { Route } from "react-router-dom";
import Landing from './landing/landing';
import Cases from './cases/cases';
import Forum from './forum/forum';
import About from './about/about';
import Login from './login/login';

const Routes = () => {

    return (
        <>
            <Route
                exact
                path="/"
                render={() => <Landing />}
            />
            <Route
                exact
                path="/cases"
                render={() => <Cases />}
            />
            <Route
                exact
                path="/forum"
                render={() => <Forum />}
            />
            <Route
                exact
                path="/about"
                render={() => <About />}
            />
            <Route
                exact
                path="/login"
                render={() => <Login />}
            />
        </>
    )
}

export default Routes;