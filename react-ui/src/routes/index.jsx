import { Route } from "react-router-dom";
import Landing from './landing/landing';
import Cases from './cases/cases';
import About from './about/about';
import Login from './login/login';
import CaseId from "../components/caseId/caseId";
import SubmitCase from '../components/submitCase/submitCase'

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
                path='/cases/:id'
                render={() => <CaseId />}
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
            <Route
                exact
                path="/submitcase"
                render={() => <SubmitCase />}
            />
        </>
    )
}

export default Routes;